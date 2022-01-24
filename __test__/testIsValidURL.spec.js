// Import the js file to test
import { isValidURL } from "../src/client/js/isValidURL"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           expect(isValidURL).toBeDefined();
})});