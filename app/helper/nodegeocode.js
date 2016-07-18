var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyDkrLvz-HFoT-xKmuvQY8uNEdGv4uvNi50', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
exports.geocoder = NodeGeocoder(options);