
import { query as q } from 'faunadb'

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from "../../../services/fauna";

interface SignInProps {
  user: string;
  account: string;
  profile: string

}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,

      authorization: {
        params: {
          scope: 'read:user'
        }
      }
    }),
    // ...add more providers here
  ],
  // session:{
  //   strategy: 'jwt'

  // },
  // jwt:{
  //   secret: process.env.default|| 'default',

  // },
  callbacks: {
    async signIn({ user, account, profile }): Promise<boolean> {

      console.log(user);
      const email: any = user.email

      try {

        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(email )
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold( email )
              )
            )
          )

          // q.Create(
          //   q.Collection('users'),
          //   { data: { email } }
          // ),
        )


        return true
      } catch (error) {
        console.log(error)
        return false;

      }

    },

  },
}
)
