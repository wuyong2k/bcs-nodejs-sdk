var util = require('./util');
var sign = require('./sign');
var fs = require('fs');
var bcs = {};
bcs.setKeys = function (accessKey, secrectKey) {
    sign.setAccessKey(accessKey);
    sign.setSecrectKey(secrectKey);
}
bcs.listBucket =  function (callback) {
    var opt = util.getOptions('GET', '', '');
    util.request(opt, callback).end();
}

bcs.putBucket =  function (buckect, acl, callback) {
    acl = acl || 'private';
    var opt = util.getOptions('PUT', buckect, '', { 'x-bs-acl': acl });
    util.request(opt, callback).end();
}
bcs.deleteBucket = function (buckect, callback) {
    var opt = util.getOptions('DELETE', buckect, '');
    util.request(opt, callback).end();
}
bcs.listObject =  function (buckect, callback) {
    var opt = util.getOptions('GET', buckect, '');
    util.request(opt, callback).end();
}
bcs.deleteObject =  function (buckect, object, callback) {
    var opt = util.getOptions('DELETE', buckect, object);
    util.request(opt, callback).end();
}
bcs.putObject = function (buckect, object, acl, file, callback) {
    acl = acl || 'private';
    var stat = fs.statSync(file);
    var opt = util.getOptions('PUT', buckect, object, {
        'x-bs-acl': acl,
        'Content-Length': stat.size
    });
    fs.createReadStream(file).pipe(util.request(opt, callback));
}
module.exports = bcs;