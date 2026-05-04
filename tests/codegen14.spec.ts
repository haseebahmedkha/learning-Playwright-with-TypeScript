import {test,expect} from '@playwright/test';

// ------ Codegen -----------> Playwright Inspector
// what is codegen ------
// A playwright test generator to write test for you 
// ---- npx playwright codegen --------- this will open a writer screen 
// and for easiness like to create your test file name and save code automatically
// -------- npx playwright codegen -o tests/codegenexample.spec.ts ----------- -o mean output
// when run a specific browser just use --b chorium 
// -------- npx playwright codegen -o tests/codegenexample.spec.ts --b chorium -------------
// when run a specific mobile device just use --b chorium 
// -------- npx playwright codegen -o tests/codegenexample.spec.ts --device "iPhone 15" ----------
// when run a specific viewport device just use --viewport-size "1280,720"
// -------- npx playwright codegen -o tests/codegenexample.spec.ts --viewport-size "1280,720" ----------


// Playwright Inspector features
// 1. generate test code and save it automatically
// 2. debug your code using --debug keywork using in terminal
// 3. change test code in any language like java,c#,python 
// 4. generate locator automatically by just dragging pointer or pick locator of inspector