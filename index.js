var injector = require('node-sjsp/lib/injector');
var gutil = require('gulp-util');
var through = require('through2');

var PluginError = gutil.PluginError;

module.exports = function (option) {
  function transform(file, enc, cb) {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new PluginEror('gulp-sjsp', 'Streaming not supported'));

    var data;
    var str = file.contents.toString('utf8');
    var dest = gutil.replaceExtension(file.path, '.sjsp.js');
    var option = option || {};
    var interval = option.interval || 10;
    try {
      data = injector.inject(file.path, str, interval);
    } catch (err) {
      return cb(new PluginError('gulp-sjsp', err))
    }

    file.contents = new Buffer(data);
    file.path = dest;
    cb(null, file);
  }

  return through.obj(transform);
};
