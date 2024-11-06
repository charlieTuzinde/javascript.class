//  Here are examples of JavaScript functions that utilize various types of operators, including arithmetic, comparison, logical, bitwise, assignment, identity, and membership operators.

// ### 1. Arithmetic Operators

function arithmeticOperations(a, b) {
    return {
        addition: a + b,
        subtraction: a - b,
        multiplication: a * b,
        division: b !== 0 ? a / b : 'undefined',
        modulus: a % b,
        exponentiation: a ** b,
        floorDivision: Math.floor(a / b)
    };
}


// ### 2. Comparison Operators

function comparisonOperations(a, b) {
    return {
        equal: a === b,
        notEqual: a !== b,
        greaterThan: a > b,
        lessThan: a < b,
        greaterThanOrEqual: a >= b,
        lessThanOrEqual: a <= b
    };
}


// ### 3. Logical Operators

function logicalOperations(a, b) {
    return {
        and: a && b,
        or: a || b,
        not: !a
    };
}


// ### 4. Bitwise Operators

function bitwiseOperations(a, b) {
    return {
        and: a & b,
        or: a | b,
        xor: a ^ b,
        not: ~a,
        leftShift: a << 1,
        rightShift: a >> 1
    };
}


// ### 5. Assignment Operators

function assignmentOperations(a, b) {
    a += b;
    return {
        addAndAssign: a,
        subtractAndAssign: (a -= b),
        multiplyAndAssign: (a *= b),
        divideAndAssign: (b !== 0 ? (a /= b) : 'undefined'),
        modulusAndAssign: (a %= b),
        exponentiateAndAssign: (a **= b)
    };
}


// ### 6. Identity Operators

function identityOperations(a, b) {
    return {
        is: a === b,
        isNot: a !== b
    };
}


// ### 7. Membership Operators
// JavaScript uses the `in` operator for checking properties in objects. Here’s an example:

function membershipOperations(property, obj) {
    return {
        in: property in obj,
        notIn: !(property in obj)
    };
}


// ### Example Usage

const a = 10;
const b = 20;
const obj = { prop: 1, anotherProp: 2 };

console.log(arithmeticOperations(a, b));
console.log(comparisonOperations(a, b));
console.log(logicalOperations(true, false));
console.log(bitwiseOperations(a, b));
console.log(assignmentOperations(a, b));
console.log(identityOperations(a, b));
console.log(membershipOperations('prop', obj));
// 

// These functions illustrate how different operators can be utilized within JavaScript functions.