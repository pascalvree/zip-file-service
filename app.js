var fs = require('fs');
var zipService = require('./zip-service.js');

var path = __filename + '.zip-demo.txt';
fs.writeFileSync(path, 'Hello Node.js', 'utf8');
zipService.zipAsPasswordProtectedFile({ password: 'foo',  compressionLevel: 9, from: path, path, to: path.replace('.txt', '.zip') });
fs.unlink(path);
