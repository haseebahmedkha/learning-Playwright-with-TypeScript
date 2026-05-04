import test from "@playwright/test";

// ------------ tagging -------------
// there is Two Method to craeting a Tagging

// for running test like sanity 
// npx playwrigth test testname.spec.ts --grep "@sanity"


// for running test like sanity and regression 
// npx playwrigth test testname.spec.ts --grep (?=.*@sanity)(?=.*@regression)

// for running test like sanity or regression 
// npx playwrigth test testname.spec.ts --grep "@sanity|@regression"

// for running test like sanity which not belongs to regression
// npx playwrigth test testname.spec.ts --grep "@sanity|@regression"

// for running test like sanity but not regression
// npx playwrigth test testname.spec.ts --grep "@sanity" --grep-invert "@regression"

// 1. first 
test("@sanity Test Case",async({})=>{

});

// we can use multple like this 
test("@sanity @regression Test Case",async({})=>{

});

// 1. Second
test("Test Case",{tag:'@regression'}, async({})=>{

});

// we can use multple like this 
test("@sanity @regression Test Case",{tag:['@regression,@sanity']},async({})=>{

});


