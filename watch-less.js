var less = require('less'),
	fs = require('fs'),
	path = require('path');

var srcDir = 'app/styles/less',
	saveDir = 'app/styles/css',
	lessFiles = fs.readdirSync(srcDir),
	watchFiles = lessFiles.filter(function(file) {
		return !/^_|^\.+/.test(file);
	}),
	parser = new(less.Parser);

function watch(callback) {
	compile(true, callback);
	watchFiles.forEach(function(file) {
		var filename = srcDir + '/' + file;
		console.log('Watching... ' + filename);
		fs.watchFile(filename, function(curr, prev) {
			console.log(filename + ' changed');
			compile();
		});
	});
}

function compile(minify, callback) {
	var min = min || true;
	var done = 0;
	watchFiles.forEach(function(file) {
		var filename = srcDir + '/' + file,
			saveFilename = saveDir + '/' + path.basename(file, 'less') + 'css';
		fs.readFile(filename, function(err, data) {
			if (err) console.log(err);

			parser.parse(data.toString(), function (e, tree) {
				var css = tree.toCSS({compress: min});
				fs.writeFile(saveFilename, css, function(err) {
					if (err) console.log(err);
					console.log(saveFilename + ' compiled');
					done += 1;
					if (typeof callback !== 'undefined' && watchFiles.length === done) {
						callback();
					}
				});
			});
		});
	});
}

watch();