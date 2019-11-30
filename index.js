var unflatten = require('flat').unflatten
var pickBy = require('lodash.pickby')
var mapKeys = require('lodash.mapkeys')
// Error in this file 2
function filterObjectKeys(obj, prefix) {
    var filtredObj = pickBy(obj, function(val, key) {
        return key.startsWith(prefix);
    })

    return mapKeys(filtredObj, function(val, key) {
        return key.substr(prefix.length)
    })
}

function objectEnv(options) {
    var opts = Object.assign({
        env: process.env,
        prefix: 'CONFIG_',
        delimiter: '_'
    }, options)

    return unflatten(filterObjectKeys(opts.env, opts.prefix), opts)
}

module.exports = objectEnv
