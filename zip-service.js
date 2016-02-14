var fs = require('fs');
var exec = require('child_process').execSync;

var zipAsPasswordProtectedFile = function(options) {
  exec([
    'zip',
    '-' + options.compressionLevel,
    '--junk-paths',
    '--password ' + options.password,
    options.to,
    options.from
  ].join(' '));
}

module.exports = {
  zipAsPasswordProtectedFile: zipAsPasswordProtectedFile, 
}
