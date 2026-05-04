import {test, expect, Locator} from '@playwright/test';


// text box input actions in Playwright
test("Verify Text Input Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const nameFiledTextBox: Locator = page.locator('#name'); // this will fill the input field with id "name" with the text "John Doe"
    await expect(nameFiledTextBox).toBeVisible();
    await expect(nameFiledTextBox).toBeEnabled();
    // to find the value of max lenth of the name text field
    const maxLength: any = await nameFiledTextBox.getAttribute("maxlength"); // this will get the value of the maxlength attribute of the input field with id "name"
    expect(maxLength).toBe("15"); // this will verify that the maxlength attribute of the input field with id "name" is 50
    await nameFiledTextBox.fill("John Doe"); 
    const expectedValue: String = await nameFiledTextBox.inputValue();// this will fill the input field with id "name" with the text "John Doe"
    expect(expectedValue).toBe("John Doe"); // this will verify that the value of the input field with id "name" is "John Doe"
    await page.waitForTimeout(3000);
});


// Radio button actions in Playwright
test("Verify Radio Button Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadioButton: Locator = page.locator("#male");
    await expect(maleRadioButton).toBeVisible();
    await expect(maleRadioButton).toBeEnabled();
    expect(await maleRadioButton.isChecked()).toBe(false) // this will select the radio
    await maleRadioButton.check(); // this will select the radio button with id "male"
    expect(await maleRadioButton.isChecked()).toBe(true) // this will verify that the radio button
    await expect(maleRadioButton).toBeChecked(); // Prefferable Method to verify that the radio button
    await page.waitForTimeout(3000);
});

test.only("Verify Check Box Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // to find the checkbox with label "Sunday" and select it
    const sundayCheckBox: Locator = page.getByLabel("Sunday");
    await sundayCheckBox.check(); // this will select the checkbox with id "Sunday"
    await expect(sundayCheckBox).toBeChecked()

    // select the checkbox and assert each is check
    const daysOfWeek: string[] = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const checkboxes:Locator[] = daysOfWeek.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7); // this will verify that there are 7 checkboxes with the labels "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"

    await page.waitForTimeout(3000);
    // select each checkbox and assert each is check
    for (const checkbox of checkboxes) {
        await checkbox.check(); // this will select each checkbox
        await expect(checkbox).toBeChecked();  // this will verify that each checkbox is selected
    }

    // uncheck the last 3 checkboxes and assert each is unchecked
    for (const checkbox of checkboxes.slice(-3)) {
        await checkbox.uncheck(); 
        // this will unselect the last 3 checkboxes
        await expect(checkbox).not.toBeChecked();  // this will verify that the last 3 checkboxes are unselected
    }

    await page.waitForTimeout(3000);


    // toggle the first 4 checkboxes and assert each is toggled
    for (const checkbox of checkboxes){
        if (await checkbox.isChecked()) {
            await checkbox.uncheck();   
            await expect(checkbox).not.toBeChecked();  // this will verify that the checkbox is unselected
        } else {
            await checkbox.check(); 
            await expect(checkbox).toBeChecked();  // this will verify that the checkbox is selected
        } 

    
    }
    

    // select random checkboxes and assert each is check
    const indexesOf: number[] = [1, 2, 4]; // this will select the checkboxes with the labels "Monday", "Wednesday", "Friday"
    for (const i of indexesOf) {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();  // this will verify that the checkboxes with the labels "Monday", "Wednesday", "Friday" are selected
    }

    await page.waitForTimeout(3000);


    // select the checkbox with label "Friday" and assert it is check
    const fridayCheckBox: Locator = page.getByLabel("Friday");
    for (const day of daysOfWeek) {
        if (day === "Friday") {
            await fridayCheckBox.check(); // this will select the checkbox with label "Friday"
            await expect(fridayCheckBox).toBeChecked();  // this will verify that the checkbox with label "Friday" is selected
        }
    }

});






