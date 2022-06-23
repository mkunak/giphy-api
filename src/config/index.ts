// App Env
const environment = process.env.NODE_ENV || 'development'
const namespace = process.env.REACT_APP_NAMESPACE || 'development'

// Gifs credentials
const gifsApiKey = 'sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh'
const gifItemId = 'fpXxIjftmkk9y'

// Api Env
const domain = process.env.REACT_APP_API_ENDPOINT || 'localhost:9000'
const protocol = process.env.REACT_APP_SSL_ENABLED === 'false' ? 'http' : 'http'

const apiBase = `${protocol}://${domain}`

// Describes how code runs: in dev mode, in prod mode, etc.
const isProductionNamespace = namespace === 'production'
const isDevelopmentNamespace = namespace === 'development'

// Describes where code runs: in dev environment, in prod environment, etc.
const isDevelopmentEnvironment = environment === 'development'

export const config = {
  app: {
    environment,
    namespace,

    isProductionNamespace,
    isDevelopmentNamespace,
    isDevelopmentEnvironment
  },

  ui: {
    toFixed: 2,
    locale: window.navigator.language,
    notificationsTimeout: 5000
  },

  api: {
    base: apiBase,
    domain,
    protocol,
  },

  gifs: {
    apiKey: gifsApiKey,
    itemId: gifItemId,
  }
}
