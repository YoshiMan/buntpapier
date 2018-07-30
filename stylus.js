var path = require('path'),
	pkg = require('./package.json')

exports = module.exports = function (opts) {
	var implicit = !((opts && opts.implicit == false))

	return function (style) {
		style.include(__dirname)

		if (implicit) {
			style.import('buntpapier')
		}
	}
}

exports.libname = pkg.name
exports.path = __dirname
exports.version = pkg.version
