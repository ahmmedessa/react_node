module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config:{
      contentSecurityPolicy:{
        useDefaults:true,
        directives:{
          'connect-src':["'self'",'http:'],
          'img-src':["'self'",'data','blob','dl.airtable.com'],
          'media-src':["'self'",'data:','bole:','dl.airtable.com'],
          upgradeInsecureRequests:null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
