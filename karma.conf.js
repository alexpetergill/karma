module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai', 'commonjs'],
    files: [
      'test/**/*.+(spec|test).+(js|jsx|mjs)',
      { pattern: 'test/**/*', included: false, served: true }
    ],
    browsers: ['Chrome'],
    plugins: [
      'karma-*'
    ],
    preprocessors: {
      'test/**/*.+(spec|test).+(js|jsx|mjs)': ['commonjs']
    },
    client: {
      clearContext: false
    },
    reporters: ['spec', 'html']
  })
}
