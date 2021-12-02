import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify'

const refreshAccessToken = async token => {
	try {
		spotifyApi.setAccessToken(token.accessToken)
		spotifyApi.setreshToken(token.refreshToken)
	} catch (err) {
		console.error(err)

		return {
			...token,
			err: 'RefreshAccessTokenError',
		}
	}
}

export default NextAuth({
	// configure one or more  authentication providers
	providers: [
		SpotifyProvider({
			cliendId: process.env.NEXT_PUBLIC_CLIENT_ID,
			clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
			authorization: LOGIN_URL,
		}),
	],
	secret: process.env.JWT_SECRET,
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({ token, account, user }) {
			// initial signin
			if (account && user) {
				return {
					...token,
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					username: account.providerAccountId,
					accessTokenExpires: account.expires_at * 1000, // we're handling expiry time in millisseconds hence * 1000.
				}
			}

			// return previous token if access token has not expired.
			if (Date.now() < token.accessTokenExpires) {
				console.log('Current access_token is valid.')
				return token
			}

			// access token expired, we need to refresh it.
			console.log('Access token expired, refreshing...')
			return await refreshAccessToken(token)
		},
	},
})
