/* global module */
var spawn = require('child_process').spawn;

var log4js = require('log4js');

var logger = log4js.getLogger();

module.exports = {

	start : function(browser, url) {
		"use strict";
		
		logger.info("Starting browser: %s", browser);

		if (browser === "internet explorer") {
			browser = "iexplore";
		}
		
		var args = [];
		args.push('/C');
		args.push('start');
		args.push(browser);
		args.push(url);

		var child = spawn('cmd', args, {
			detached : 'true'
		});
		
		child.unref();
	}

};