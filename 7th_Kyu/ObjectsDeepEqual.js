
/*Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same
 properties, where the values of the properties are equal when compared with a recursive call to deepEqual. */



 function deepEqual(a, b) {
    // Step 1: Direct comparison for non-objects.
    if (a === b) return true;
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) 
        return false;

    // Step 2: Compare property names.
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    // Step 3: Compare property values.
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) 
            return false;
    }

    // Step 4: All checks passed, objects are deeply equal.
    return true;
}

// Testing the function
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, { here: 1, object: 2 })); // false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // true
