module.exports = {
  projectId: 'hv77bg',
  e2e: {
    
    setupNodeEvents(on, config) {
      config.env.BASE_URL = 'https://bukharibooks.com/';
   
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
};



require('@applitools/eyes-cypress')(module);
