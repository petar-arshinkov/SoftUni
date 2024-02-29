function add(n) {
    // Initialize the internal sum if it's not already set
    const sum = (this.sum || 0) + n;
    // Create a copy of the add function with the updated sum
    const f = add.bind({ sum });
    // Override toString to return the current sum when the function is coerced into a string or number
    f.toString = function() { return sum; };
    return f;
}

// Example usage
console.log(add(1)); // Expected output: 1
console.log(add(1)(6)(-3)); // Expected output: 4

// To see the output as numbers, you might need to coerce them explicitly, like so:
console.log(+add(1)); // Expected output: 1
console.log(+add(1)(6)(-3)); // Expected output: 4
