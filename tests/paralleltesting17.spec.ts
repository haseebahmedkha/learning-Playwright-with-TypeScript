import {test,expect} from '@playwright/test'

// ------ Manual Config for parallel and series testing --------
// test.describe.configure({mode:'parallel'});
// test.describe.configure({mode:'serial'});


// --- from config file ------
// maybe True and False
// fullyParallel: false, 


// to run test on A Specific Worker Using Cli 
// npx playwright test paralleltesting17.spec.ts --project Chromium


// ----- for 

test("test One",async({})=>{
    console.log("1. Welcome Haseeb");
});
test("test two",async({})=>{
    console.log("2. Welcome Haseeb");
});
test("test Three",async({})=>{
    console.log("3. Welcome Haseeb");
});