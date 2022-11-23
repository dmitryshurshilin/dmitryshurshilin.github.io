type TObj = object | null
let obj_1: TObj = { id: 1 }
let obj_2: TObj = { id: 2 }
let obj_3: TObj = { id: 3 }
let obj_4: TObj = { id: 4 }
let obj_5: TObj = { id: 5 }
let obj_6: TObj = { id: 6 }

/**
 * A WeakMap is a collection of key/value pairs whose keys must be objects,
 * with values of any arbitrary JavaScript type, and which does not create
 * strong references to its keys. That is, an object's presence
 * as a key in a WeakMap does not prevent the object from being garbage collected.
 * Once an object used as a key has been collected, its corresponding values
 * in any WeakMap become candidates for garbage collection as well —
 * as long as they aren't strongly referred to elsewhere.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 */
const wm = new WeakMap()
wm.set(obj_1, { name: 'Object 1' })
wm.set(obj_2, { name: 'Object 2' })
wm.set(obj_3, { name: 'Object 3' })
console.log(wm.get(obj_1)) // true
console.log(wm.get(obj_2)) // true
console.log(wm.get(obj_3)) // true
obj_1 = null
obj_2 = obj_3
console.log(wm.get(obj_1)) // false
console.log(wm.get(obj_2)) // true
console.log(wm.get(obj_3)) // true

/**
 * WeakSet objects are collections of objects. Just as with Sets,
 * each object in a WeakSet may occur only once; all objects
 * in a WeakSet's collection are unique.
 * 
 * The main differences to the Set object are:
 * WeakSets are collections of objects only.
 * They cannot contain arbitrary values of any type, as Sets can.
 * The WeakSet is weak, meaning references to objects
 * in a WeakSet are held weakly. If no other references
 * to an object stored in the WeakSet exist, those objects
 * can be garbage collected.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 */
const ws = new WeakSet()
ws.add(obj_4)
ws.add(obj_5)
ws.add(obj_6)

console.log(ws.has(obj_4)) // true
console.log(ws.has(obj_5)) // true
console.log(ws.has(obj_6)) // true
obj_4 = null
obj_5 = obj_6
console.log(ws.has(obj_4)) // false
console.log(ws.has(obj_5)) // true
console.log(ws.has(obj_6)) // true
