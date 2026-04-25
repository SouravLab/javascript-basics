//================================================================================
// JAVASCRIPT LOOPS - COMPREHENSIVE GUIDE
// Purpose: Understand different loop types, their use cases, and when to use each
// Why loops? They allow execution of code blocks repeatedly without writing same code
//================================================================================

console.log("\n========== 1. WHILE LOOP: Basic Iteration ==========\n");

/**
 * WHILE LOOP: Use when condition needs to be checked before each iteration
 * WHY NEEDED: Useful when number of iterations is not predetermined
 * Structure: while (condition) { code block }
 * 
 * Example: Print numbers 1-10
 */
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;  // Increment after each iteration (i++ is same as i = i + 1)
}

console.log("\n========== 2. BREAK STATEMENT: Early Exit from Loop ==========\n");

/**
 * BREAK: Exits loop immediately when condition is met
 * WHY NEEDED: Stop processing once target is found (saves unnecessary iterations)
 * Real-world: Stop searching list once item found
 * 
 * Example: Print 1-10 but stop at 5
 */
let j = 1;
while (j <= 10) {
    if (j === 5) {
        console.log('Found 5 - exiting loop');
        break;  // Exits while loop immediately
    }
    console.log(j);
    j++;
}

console.log("\n========== 3. INFINITE LOOP: Condition Always False ==========\n");

/**
 * Demonstrates infinite loop with constant false condition (0 = false)
 * WHY NEEDED: Educational - shows loop never executes if condition never true
 * NOTE: Commented out below to prevent hanging
 */
// This loop will NEVER execute because while(0) means while(false)
// while (0) {
//     console.log("This will never print");
// }

console.log("\n========== 4. FOR LOOP: Fixed Number of Iterations ==========\n");

/**
 * FOR LOOP: Best when number of iterations is known
 * WHY NEEDED: Cleaner syntax than while for predictable iterations
 * Structure: for (initialization; condition; increment) { code }
 * 
 * Example: Print numbers 1-10
 */
for (let m = 1; m <= 10; m++) {
    console.log(m);
}

console.log("\n========== 5. FOR LOOP: Initialization Outside ==========\n");

/**
 * FOR LOOP without initialization (initialized before loop)
 * WHY NEEDED: Sometimes you need variable to persist after loop ends
 */
let n = 1;
for (; n <= 10; n++) {  // Note: empty initialization part
    console.log(n);
}
console.log(`Value of n after loop: ${n}`);  // n = 11 (visible outside loop)

console.log("\n========== 6. FOR LOOP: Infinite Loop with Break ==========\n");

/**
 * FOR LOOP with empty conditions creates infinite loop
 * WHY NEEDED: Structured way to handle loops without predetermined exit condition
 * Must use break to exit
 */
for (; ;) {  // Empty initialization, condition, and increment = infinite loop
    console.log('Infinite loop - but breaking immediately');
    break;  // Exit after first iteration
}

console.log("\n========== 7. FOR LOOP: Countdown (Reverse Order) ==========\n");

/**
 * FOR LOOP with decrement (s--)
 * WHY NEEDED: Sometimes need to go in reverse (e.g., countdown, array in reverse)
 */
for (let s = 10; s > 0; s--) {  // Decrements by 1 each iteration
    console.log(s);
}

console.log("\n========== 8. WHILE LOOP: Countdown Using Decrement ==========\n");

/**
 * Alternative to for loop - using while with decrement
 * WHY NEEDED: Shows same logic can be written in different ways
 */
let t = 10;
while (t >= 0) {
    console.log(t);
    t--;  // Decrease t by 1 each iteration
}

console.log("\n========== 9. FOR LOOP: Filter Even Numbers (1-10) ==========\n");

/**
 * Combining loop with conditional (if) statement
 * WHY NEEDED: Loop through items and only process those meeting criteria
 * Pattern: Modulo operator (%) returns remainder - even numbers have remainder 0
 */
for (let num = 1; num <= 10; num++) {  // Fixed: was using 'i' instead of 'num'
    if (num % 2 === 0) {  // Check if remainder is 0 (means even)
        console.log(`Even number: ${num}`);
    }
}

console.log("\n========== 10. WHEN TO USE WHILE LOOP (Non-fixed Iterations) ==========\n");

/**
 * WHILE LOOP USE CASES - When iteration count is unknown:
 * 
 * 1. WAIT FOR WEB ELEMENT: Retry until element loads (0, 5, 10, 20, 30 attempts)
 * 2. PAGE LOADING: Poll server until page fully loads (handling slow networks)
 * 3. WEB TABLE PAGINATION: Unknown number of pages to scroll through
 * 4. INFINITE SCROLLING: Facebook, Instagram feeds never end
 * 5. COUNTING ELEMENTS: Don't know if 30, 40, or 50 elements exist
 * 6. CALENDAR NAVIGATION: Loop until finding target month (April, December, etc.)
 * 7. CAROUSEL NAVIGATION: Click next button until finding desired product
 * 8. DATABASE QUERIES: Don't know how many records will be returned
 * 9. DYNAMIC POPUPS: Wait until alert/popup appears
 * 10. FILE READING: Process until End Of File (EOF) reached
 * 
 * KEY BENEFIT: Handles uncertainty - continues until target condition met
 */
console.log("While loop is perfect for automation scenarios with unknown iteration count");

console.log("\n========== 11. WHEN TO USE FOR LOOP (Fixed Iterations) ==========\n");

/**
 * FOR LOOP USE CASES - When iteration count is predetermined:
 * 
 * 1. DROPDOWN SELECTION: Iterate through fixed list (Countries, Days, Months)
 * 2. CSV/EXCEL OPERATIONS: Process fixed rows and columns
 * 3. FLIGHT BOOKING SEATS: Loop through seats 0-119 (120 total)
 * 4. MENU ITEMS: Navigate fixed number of categories
 * 5. FOOTER LINKS: Click through all footer links (known quantity)
 * 6. LOGIN RETRY: Try login 3 times (fixed attempts)
 * 7. TEST RETRY: Rerun failed test case specific number of times
 * 8. ARRAY ITERATION: Process all elements in array
 * 9. FORM FILLING: Fill fixed set of form fields
 * 10. RANGE OPERATIONS: Process numbers in known range
 * 
 * KEY BENEFIT: Clean, readable syntax - loop ends naturally after N iterations
 */
console.log("For loop is perfect when you know exactly how many iterations needed");

console.log("\n========== 12. DO-WHILE LOOP: Execute First, Then Check ==========\n");

/**
 * DO-WHILE LOOP: Different from while - executes code BEFORE checking condition
 * WHY NEEDED: Guarantees at least one execution (useful for user input validation)
 * Structure: do { code } while (condition)
 * 
 * KEY DIFFERENCE: Condition checked AFTER first execution
 * NOTE: break statement must be INSIDE do block, not after while
 */
let p = 1;
do {
    console.log(`Do-while iteration: ${p}`);
    p++;
    break;  // Exit after first iteration (must be inside do block)
} while (p <= 10);  // Condition checked only after execution

console.log("\n========== 13. OUTPUT METHODS: console.log vs process.stdout.write ==========\n");

/**
 * CONSOLE.LOG vs PROCESS.STDOUT.WRITE
 * WHY NEEDED: Different output methods serve different purposes
 * 
 * console.log():
 * - Adds automatic newline after each output
 * - Can accept multiple arguments and objects
 * - Best for: Most debugging and normal logging
 * 
 * process.stdout.write():
 * - Does NOT add newline (stays on same line)
 * - Only accepts strings (must convert objects)
 * - Best for: Single-line progress, no newlines needed
 * 
 * Example showing the difference:
 */
console.log("\nUsing process.stdout.write (no newline):");
process.stdout.write('Hello');  // Outputs "Hello" without newline
process.stdout.write(' ');      // Same line
process.stdout.write('Coding');  // Same line
process.stdout.write('\n');     // Manually add newline

console.log("\nUsing console.log (automatic newline):");
console.log('Each');            // New line
console.log('Line');            // New line  
console.log('Automatically');   // New line
  









