
// ------ tracevider is used for debugging like report for developer to see the failed test


// // Approoches to create Tracviewer
// 1. using Playwright config.ts file
// 2. using command 
//     npx playwright test mytest.spec.ts --trace on
// 3. code(programmatically) you cant see in html report
//     // context.tracing.start({});
//     // statement or code
//     // context.stop({path:name.zip})


// // to View the file of Tracevierr
// 1. from html file trace.zip
// 2. throught command ---> npx Playwright show-trace trace.zip
// 3. utility ---> https://trace.playwright.dev/ (drag and drop)



// ----------- Flasky Test -----------------
// sometimes is failing sometimes is passed
// like network issue , slow net, time issue
// in playwright we have rerun multiple time to check the flasky test
// so we an option in a config.ts file an option is Retries
// ------------- retries: process.env.CI ? 2 : 0, ------------- its for CI Enviroment
// for local env retries: 3; 

// we can also run using run time 
// ------ npx playwright test test.spec.ts --retries=3



