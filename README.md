百度云存储的nodejs版sdk
========

使用方法
---------
    var bcs = require('bcs-nodejs-sdk');
    bcs.setKeys(accessKey, secrectKey);
    bcs.listObject(buckect, function (res) {
		if (res.statusCode == 200) {
			console.log('success');
		}
		console.log(res.headers);
		console.log(res.data);
    });
    //其他使用详见test/test.js
