import { chromium, test, expect } from "@playwright/test";
//import test from "../lambdatest-setup";

// LambdaTest capabilities
const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build_2",
        name: "Playwright Test_2",
        user: 'kddeeps',
        accessKey: 'LT_opNgaK6DmFHhSlf8PxPk8QmYPsKYbKYdkGVDzHtd9nZlxX5',
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    },
};

const capabilitiesEdge = {
    browserName: "MicrosoftEdge", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build_2",
        name: "Playwright Test_2",
        user: 'kddeeps',
        accessKey: 'LT_opNgaK6DmFHhSlf8PxPk8QmYPsKYbKYdkGVDzHtd9nZlxX5',
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    },
};

test.describe.parallel("Group all tests", () => {
    // test.describe.configure({ mode: 'parallel' });

    test("Scenario 1", async () => {
        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
            ${encodeURIComponent(JSON.stringify(capabilities))}`);
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.lambdatest.com/selenium-playground");

        await page.getByText("Simple Form Demo").click();
        expect(await page.url()).toContain('simple-form-demo');
        console.log('url : ' + page.url());

        const msg = "Welcome to LambdaTest";

        await page.locator('input#user-message').fill(msg)
        await page.waitForTimeout(800);
        await page.locator('#showInput').click();

        await page.waitForTimeout(800);
        expect((await page.locator('#message').innerText()).toString()).toBe(msg);
        await page.close()
        await context.close()
        await browser.close()
    });

    test("Scenario 2", async () => {
        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
            ${encodeURIComponent(JSON.stringify(capabilities))}`);
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.lambdatest.com/selenium-playground");
        const element = "Drag & Drop Sliders";
        await page.getByText(element).scrollIntoViewIfNeeded();
        await page.getByText(element).click();
        //Locate the target value of the range
        const target = page.locator('#rangeSuccess');
        //Locate the slider
        const slider = page.locator('input.sp__range').nth(2);
        await page.waitForTimeout(800);
        // Get the bounding box of the slider to calculate the target position
        const sliderBox = await slider.boundingBox();
        if (!sliderBox) {
            throw new Error('Slider not found');
        }
        // Calculate the target position for the slider 
        const targetPosition = sliderBox.x + sliderBox.width * 0.93; // Adjust percentage as needed
        // Move the mouse to the starting position 
        await page.mouse.move(sliderBox.x + sliderBox.width / 2, sliderBox.y + sliderBox.height / 2);
        // Press the mouse button down to start dragging
        await page.mouse.down();
        // Move the mouse to the target position 
        await page.mouse.move(targetPosition, sliderBox.y + sliderBox.height / 2);
        await page.waitForTimeout(800);
        // Release the mouse button (drop the slider)
        await page.mouse.up();
        //Validate the range value shows 95
        expect((await target.innerText())).toBe('95');
        //await page.waitForTimeout(3000);
       await page.close()
        await context.close()
        await browser.close()
    });

    test("Scenario 3", async () => {
        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
            ${encodeURIComponent(JSON.stringify(capabilities))}`);
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://www.lambdatest.com/selenium-playground");
        const element = "Input Form Submit";
        await page.getByText(element).click();

        await page.getByRole('button', { name: 'Submit' }).click();
        const errorMsg: string = await page.evaluate("document.getElementById('inputEmail4').validationMessage");
        expect(errorMsg.includes('fill out this field.'));

        await page.locator('#name').fill('Deepa');
        await page.locator('#inputEmail4').fill('kddeeps@gmail.com');
        await page.getByPlaceholder('Password').fill('Password@123');
        await page.getByRole('textbox', { name: 'company' }).fill('Test');
        await page.locator('#websitename').fill('www.test.com');
        await page.selectOption('//select[@name="country"]', 'United States');
        await page.locator('#inputCity').fill('Plano');
        await page.locator('#inputAddress1').fill('Apt 123');
        await page.locator('#inputAddress2').fill('9600 Coit Rd');
        await page.getByPlaceholder('State').fill('Texas');
        await page.getByPlaceholder('Zip code').fill('75025');
        await page.getByRole('button', { name: 'Submit' }).click();
        const successMsg = await page.locator('p[class^="success-msg"]').innerText();
        expect(successMsg).toBe('Thanks for contacting us, we will get back to you shortly.');
       await page.close()
        await context.close()
        await browser.close()


    });

    test("Scenario 1 edge", async () => {
        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
            ${encodeURIComponent(JSON.stringify(capabilitiesEdge))}`);
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.lambdatest.com/selenium-playground");

        await page.getByText("Simple Form Demo").click();
        expect(await page.url()).toContain('simple-form-demo');
        console.log('url : ' + page.url());

        const msg = "Welcome to LambdaTest";

        await page.locator('input#user-message').fill(msg)
        await page.waitForTimeout(800);
        await page.locator('#showInput').click();

        await page.waitForTimeout(800);
        expect((await page.locator('#message').innerText()).toString()).toBe(msg);
       await page.close()
        await context.close()
        await browser.close()
    });

    test("Scenario 2 edge", async () => {
        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
            ${encodeURIComponent(JSON.stringify(capabilitiesEdge))}`);
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.lambdatest.com/selenium-playground");
        const element = "Drag & Drop Sliders";
        await page.getByText(element).scrollIntoViewIfNeeded();
        await page.getByText(element).click();
        //Locate the target value of the range
        const target = page.locator('#rangeSuccess');
        //Locate the slider
        const slider = page.locator('input.sp__range').nth(2);
        await page.waitForTimeout(800);
        // Get the bounding box of the slider to calculate the target position
        const sliderBox = await slider.boundingBox();
        if (!sliderBox) {
            throw new Error('Slider not found');
        }
        // Calculate the target position for the slider 
        const targetPosition = sliderBox.x + sliderBox.width * 0.93; // Adjust percentage as needed
        // Move the mouse to the starting position 
        await page.mouse.move(sliderBox.x + sliderBox.width / 2, sliderBox.y + sliderBox.height / 2);
        // Press the mouse button down to start dragging
        await page.mouse.down();
        // Move the mouse to the target position 
        await page.mouse.move(targetPosition, sliderBox.y + sliderBox.height / 2);
        await page.waitForTimeout(800);
        // Release the mouse button (drop the slider)
        await page.mouse.up();
        //Validate the range value shows 95
        expect((await target.innerText())).toBe('95');
        //await page.waitForTimeout(3000);
       await page.close()
        await context.close()
        await browser.close()
    });

    test("Scenario 3 edge", async () => {
        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
            ${encodeURIComponent(JSON.stringify(capabilitiesEdge))}`);
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://www.lambdatest.com/selenium-playground");
        const element = "Input Form Submit";
        await page.getByText(element).click();

        await page.getByRole('button', { name: 'Submit' }).click();
        const errorMsg: string = await page.evaluate("document.getElementById('inputEmail4').validationMessage");
        expect(errorMsg.includes('fill out this field.'));

        await page.locator('#name').fill('Deepa');
        await page.locator('#inputEmail4').fill('kddeeps@gmail.com');
        await page.getByPlaceholder('Password').fill('Password@123');
        await page.getByRole('textbox', { name: 'company' }).fill('Test');
        await page.locator('#websitename').fill('www.test.com');
        await page.selectOption('//select[@name="country"]', 'United States');
        await page.locator('#inputCity').fill('Plano');
        await page.locator('#inputAddress1').fill('Apt 123');
        await page.locator('#inputAddress2').fill('9600 Coit Rd');
        await page.getByPlaceholder('State').fill('Texas');
        await page.getByPlaceholder('Zip code').fill('75025');
        await page.getByRole('button', { name: 'Submit' }).click();
        const successMsg = await page.locator('p[class^="success-msg"]').innerText();
        expect(successMsg).toBe('Thanks for contacting us, we will get back to you shortly.');
       await page.close()
        await context.close()
        await browser.close()


    });

    // test.afterEach(async () => {
    //     page.close();

    // })
});