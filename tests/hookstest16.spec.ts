import {test,expect} from '@playwright/test'

//  ----------- Hooks Test -------------
// there is Four Types of Hooks 
// 1.BeforeEach
// 2.AfterEach
// 3.BeforeAll
// 4.AfterAll
// we can use hooks with Groups but when we put in a group its wont work with other Group

test.beforeAll("Group One",async()=>{
    console.log("this will execute before all Test Cases");

});
test.afterAll("Group One",async()=>{
    console.log("this will execute after all Test Cases");

});
test.beforeEach("Group One",async()=>{
    console.log("this will execute before each Test Case");
    });
test.afterEach("Group One",async()=>{
    console.log("this will execute after each Test Case");
    });

test("test One",async({})=>{
    console.log("Welcome Haseeb");

});
test("test two",async({})=>{
    console.log("Welcome Haseeb");
});
test("test Three",async({})=>{
    console.log("Welcome Haseeb");
});
    

    



