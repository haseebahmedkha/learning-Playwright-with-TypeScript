import {test,expect} from '@playwright/test';


// -------- run Group of text -----------
// npx playwright test testname.spec.ts --grep "Group Name"
test.describe("Group One",async()=>{
    test("test One",async({})=>{

    });
    test("test two",async({})=>{

    });
    test("test Three",async({})=>{

    });
    

})

test.describe("Group Two",async()=>{
    test("test One",async({})=>{

    });
    test("test two",async({})=>{

    });
    test("test Three",async({})=>{

    });
    

})