const fs = require('fs');
require('dotenv').config();

const appContents = {
  expo: {
    name: 'capstone',
    slug: 'capstone',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
      },
      infoPlist: {
        UIBackgroundModes: ['location', 'fetch']
      }
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY
        }
      }
    },
    web: {
      favicon: './assets/favicon.png'
    }
  }
};

fs.writeFile('app.json', JSON.stringify(appContents, null, 2), function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});
