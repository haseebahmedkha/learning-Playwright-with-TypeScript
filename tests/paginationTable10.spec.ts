import { Locator, test, expect } from "@playwright/test";


test("Verify Pagination Table Data ", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    let pages = true;
    while (pages) {
        const rows = await page.locator("#example tbody tr").all();
        for(let row of rows) {
            console.log(await row.innerText())// this will print the data of the current page in the table
        }
        await page.waitForTimeout(2000);
        const nextButton: Locator = page.locator("Button[aria-label='Next']");
        const isdisabled = await nextButton.getAttribute("class");
        if (isdisabled?.includes("disabled")) {
            pages = false; // this will exit the loop if the next button is disabled
        } else {
            await nextButton.click(); // this will click the next button to go to the next page of the table
        }
    }
});


test("Verify Pagination Table with Filter Funtion and set a value of 25", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown: Locator = page.locator("#dt-length-0");
    await dropdown.selectOption({label: "25"}); // this will select the option with the label "25" from the dropdown to set the number of rows displayed in the table to 25
    const tablerows: Locator[] = await page.locator("#example tbody tr").all();
    expect(tablerows).toHaveLength(25); // this will verify that there are 25 rows displayed in the table after selecting the option with the label "25" from the dropdown

});

test.only("verif a data using Search box in the pagination table", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    await page.locator("#dt-search-0").fill("Bruno Nash"); // this will fill the search box with the value "Airi Satou" to filter the table data
    await page.waitForTimeout(5000);
    const filteredRows: Locator[] = await page.locator("#example tbody tr").all();
    expect(filteredRows).toHaveLength(1);
    

    if (filteredRows.length > 0) {
        let matchFound = false;
        for (let row of filteredRows) {
            const rowText = await row.innerText();
            if (rowText.includes("Bruno Nash")) {
                matchFound = true;
                console.log("Data found in the table: ", rowText);  
                break; // this will exit the loop once we find the matching data in the table
            }   
        }
        expect(matchFound).toBe(true); // this will verify that the matching data is found in the table after filtering with the search box
    }
    else{
        console.log("Data not found in the table after filtering with the search box"); // this will verify that no data is found in the table after filtering with the search box
    }
});