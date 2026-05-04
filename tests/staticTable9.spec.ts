import {test, expect, Locator} from "@playwright/test";


test("Verify Static Table",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table: Locator = page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible(); // this will verify that the table with name "BookTable" is visible on the page

    // 1. validate the number of rows in the table
    const rows: Locator = table.locator("tr"); // table chaining 
    await expect(rows).toHaveCount(7); // assuming there are 5 rows in the table

    // 2. validate the numbers of rows using  second method
    const totalRows : number = await rows.count();
    expect(totalRows).toBe(7); // this will verify that there are 7 rows in the table


    // 3. validate the number of columns in the table
    // a. first approach
    const columns: Locator = rows.locator("th"); // chaining of locators to find the columns in the table
    await expect(columns).toHaveCount(4); // this will verify that there are 4 columns in the table

    // b. second approach
    const columnsCount: number = await columns.count();// this will find the first row in the table
    expect(columnsCount).toBe(4); // this will verify that there are 4 columns in the table

    // 4. validate the second cell value in the table
    const secondRow: Locator = rows.nth(2).locator("td");
    const dataOfSecondRow: String[] = await secondRow.allInnerTexts();
    expect(dataOfSecondRow).toStrictEqual([ 'Learn Java', 'Mukesh', 'Java', '500' ]); // this will verify that the second cell value in the table is "Amit"
    console.log("Data of second row --->",dataOfSecondRow);


    // 5. validate the cell value of the table using row and column index
    console.log("Tables Data")
    const allRowData = await rows.all(); // this will find all the rows in the table
    for (const row of allRowData.slice(1)) { // this will iterate through all the rows in the table except the first row
        const rowData: string[] = await row.locator("td").allInnerTexts(); // this will find all the cells in the current row
        console.log("Row Data --->",rowData); // this will print the data of each row in the table
    }
});