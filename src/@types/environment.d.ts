namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    EMAIL_SERVER: string
    EMAIL_FROM: string
    APPLE_ID: string
    APPLE_TEAM_ID: string
    APPLE_PRIVATE_KEY: string
    APPLE_KEY_ID: string
    AUTH0_ID: string
    AUTH0_SECRET: string
    AUTH0_DOMAIN: string
    FACEBOOK_ID: string
    FACEBOOK_SECRET: string
    GITHUB_ID: string
    GITHUB_SECRET: string
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    TWITTER_ID: string
    TWITTER_SECRET: string
    DATABASE_URL: string
    SECRET: string
    FAUNADB_KEY: string
    SIGNING_kEY: string
    STRIPE_API_KEY: string
    STRIPE_SUCCESS_URL: string
    STRIPE_CANCEL_URL: string
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string  
    STRIPE_WEBHOOKS_SECRET: string  
    PRISMIC_ACCESS_TOKEN: string  
    PRISMIC_ENPOINT: string  


  }
}