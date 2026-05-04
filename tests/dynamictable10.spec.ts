import {test, expect, Locator} from "@playwright/test";
import { pathToFileURL } from "node:url";

test("Verify Dynamic Table",async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table: Locator = page.locator("table.table tbody");
    await expect(table).toBeVisible(); // this will verify that the table with name "BookTable" is visible on the page

    const rows: Locator[] = await table.locator("tr").all(); // table chaining
    console.log("Number of rows:", rows.length);
    expect(rows).toHaveLength(4); // assuming there are 5 rows in the table


    let cpuLoad = "";
    // step 1. For Chrome Process get Valuve of CPU and Memory
    for(const row of rows) {
        const processName: String = await row.locator("td").nth(0).innerText();
        if ( processName.trim() === "Chrome") {
            cpuLoad = await row.locator("td", {hasText:'%'}).innerText();
            console.log("CPU Load of Chrome Process is --->", cpuLoad);
            break; // this will exit the loop once we find the Chrome process
        }
    }

    let yellowPText: String = await page.locator("#chrome-cpu").innerText();
    console.log("Yellow P Text is --->", yellowPText);
    expect(yellowPText).toContain(cpuLoad); // this will verify that the CPU load of Chrome process is displayed in the yellow P element
});