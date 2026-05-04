



// ------------ Annotation ----------------
//  there are 5 Types of Annotation 
//  1. only
//  2. skip
//  3. fail
//  4. fixme
//  5. slow

// we can also use in a Group Test

import test from "@playwright/test";

test.only("",async({})=>{

});
test.skip("",async({})=>{
    test.skip()

});
test.fail("",async({})=>{

});
// when use when we have complete the test case it will shows in a report with skip test
test.fixme("",async({})=>{

});
test("",async({})=>{
    test.slow() // its will become 90 second = default time X 3 = 30 X 3 = 90 Seconds

});



