'use strict'
// Compiled with Babel from index.mjs

module.exports = function matchMap(value) {
  return function() {
    var _map = void 0

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    if (args[0] instanceof Map || args[0].constructor === Map) {
      _map = args[0]
    } else if (args[0] instanceof Array) {
      _map = new Map(args)
    } else {
      throw new Error('expected Array or Map instance')
    }

    return _map.get(value)
  }
}
