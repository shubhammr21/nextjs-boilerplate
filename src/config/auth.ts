import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { NextAuthOptions } from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"
import GoogleProvider from "next-auth/providers/google"

import db from "@/db"
import { env } from "@/env/server"

const options: NextAuthOptions = {
  // If using a database adapter, the default behavior sets the session strategy to "database".
  // Switching the strategy to "jwt" bypasses the use of the session table.
  // To keep session data in the database while using "jwt", you can implement custom checks manually.
  // Refer to the following resources for guidance:
  // - https://authjs.dev/getting-started/session-management/get-session
  // - https://authjs.dev/getting-started/session-management/protecting
  //
  // Currently, this boilerplate uses the "jwt" strategy, which is sufficient for now.
  // However, this section should be configured according to the specific requirements of your project.
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/"
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),
    AzureADProvider({
      clientId: env.AZURE_AD_CLIENT_ID,
      clientSecret: env.AZURE_AD_CLIENT_SECRET,
      tenantId: env.AZURE_AD_TENANT_ID
    })
  ]
}

export default options
