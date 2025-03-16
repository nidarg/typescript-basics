/*
TYPE ANNOTATION in TypeScript:
Type annotation is the explicit way of defining the type of a variable, function parameter, or return value. You provide the type explicitly when declaring the variable or function.

Example:

typescript */

let age: number = 25; // Explicitly specifying the type 'number'
/*
You can also annotate function parameters and return types:

typescript
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}
/*

//-------------------------------------------------------------------------

TYPE INFERENCE in TypeScript:
Type inference is when TypeScript automatically determines the type of a variable based on its assigned value without the need for explicit type annotations. TypeScript infers the type when it can figure it out from the context.

Example:

typescript
*/
let age1 = 25; // TypeScript infers that 'age' is of type 'number'
/*
In functions:

typescript
*/
function greet1(name: string) {
  return `Hello, ${name}!`; // TypeScript infers that the return type is 'string'
}
/*
Key Difference:
Type annotation: You manually specify the type.
Type inference: TypeScript automatically infers the type based on the value.
*/

//----------------------------------------------------------------

/*
    ANY TYPE
    The any type in TypeScript is a special type that allows you to bypass TypeScript's strict typing system. It can represent any value, and using it means TypeScript will not check the type of the variable. It’s useful when you don’t know the type or when you want to allow flexibility, but using it can lead to losing the benefits of type safety.
*/

let value: any = 42;
value = "Hello";  // No error
value = true;     // No error

function logValue(value: any) {
  console.log(value);
}

logValue(42);      // Works fine
logValue("Text");  // Works fine
logValue({});      // Works fine

/*
Use Cases:
You might use any when dealing with dynamic content or interacting with third-party libraries that don’t have type definitions.
It allows flexibility but sacrifices type safety.
Note: Overusing any defeats the purpose of using TypeScript for type safety. It's better to use more specific types when possible.

*/

//------------------------------------------------------------------------

/*
FUNCTION PARAMETERS ANNOTATION

Function parameter annotation in TypeScript is the process of explicitly defining the type of the parameters that a function accepts. It helps ensure that the function is called with the correct data types, providing type safety.

Example:
typescript
*/
function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10);  // Works fine, result will be a number
// let invalidResult = add(5, "10");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'
/*
In this example:

a: number and b: number are type annotations specifying that both parameters a and b must be of type number.
: number after the parentheses indicates that the function will return a value of type number.
Key Points:
Parameter annotations define the type of the arguments a function accepts.
TypeScript ensures that the arguments passed to the function match the specified types.
*/

// ---------------------------------------------------------------------

/*
VOID

In TypeScript, void is a type used to indicate that a function does not return any value. It’s commonly used as the return type of functions that perform actions but don't need to return anything.
*/
function logMessage(message: string): void {
    console.log(message);  // This function doesn't return anything
  }
  
  logMessage("Hello, World!");  // Works fine
  
  // If you try to return a value from a function with 'void', TypeScript will show an error
//   function invalidFunction(): void {
//     return 42;  // Error: A function whose declared type is 'void' cannot return a value.
  //}
  
  // -------------------------------------------------------------------------------------------

  /*
  NEVER

  The never type in TypeScript represents values that never occur. It’s used for functions that never successfully return (e.g., functions that throw errors or run indefinitely). A function with a never return type doesn't complete its execution normally.
  Key Points:
never is used when a function doesn’t return a value (e.g., throws an error, runs indefinitely).
It indicates that a certain piece of code will never reach a conclusion (normal return).

  */
function throwError(message: string): never {
    throw new Error(message);  // This function never returns a value, it throws an error
  }
  
  function infiniteLoop(): never {
    while (true) {
      // Infinite loop
    }
  }
  