module.exports = {
  development: {
    isProduction: false,
    app: {
      name: 'Sheckley boilerplate'
    }
  },
  production: {
    isProduction: true,
    app: {
      name: 'Sheckley boilerplate'
    }
  }
}[process.env.NODE_ENV || 'development'];