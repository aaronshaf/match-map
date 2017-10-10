export default function matchMap(value) {
  return function(...args) {
    let _map
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
