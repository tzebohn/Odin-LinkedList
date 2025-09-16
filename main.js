import { LinkedList } from "./LinkedList.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

// Test 1: Empty list
console.log("Initial list (should be empty):", list.toString());
console.log("Initial size (should be 0):", list.size());

// Test 2: Append values
list.append("dog");
list.append("cat");
list.append("parrot");

console.log("\nAfter appending 3 animals:");
console.log("List:", list.toString());       // dog -> cat -> parrot
console.log("Size:", list.size());           // 3

// Test 3: Prepend value
list.prepend("elephant");

console.log("\nAfter prepending 'elephant':");
console.log("List:", list.toString());       // elephant -> dog -> cat -> parrot
console.log("Size:", list.size());           // 4

// Test 4: Pop last node
list.pop();

console.log("\nAfter popping last node:");
console.log("List:", list.toString());       // elephant -> dog -> cat
console.log("Size:", list.size());           // 3

// Test 5: Head and tail values
console.log("\nHead value:", list.head?.value);   // elephant
console.log("Second node:", list.head?.nextNode?.value); // dog

// Test 6: Multiple pops
list.pop();
list.pop();
list.pop();

console.log("\nAfter popping all nodes:");
console.log("List:", list.toString());       // (empty)
console.log("Size:", list.size());           // 0

// Test 7: Pop from empty list
list.pop(); // Should not crash
console.log("\nAfter popping from empty list:");
console.log("List:", list.toString());       // (empty)
console.log("Size:", list.size());           // 0