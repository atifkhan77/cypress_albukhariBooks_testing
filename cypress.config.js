module.exports = {
  projectId: 'hv77bg',
  e2e: {
    
    setupNodeEvents(on, config) {
      config.env.BASE_URL = 'https://bukharibooks.com/';
      return config;
      // implement node event listeners here
    },
  },
};

