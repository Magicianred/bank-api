export default {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '3.5.9',
      skipMD5: true
    },
    autoStart: false
  }
}
