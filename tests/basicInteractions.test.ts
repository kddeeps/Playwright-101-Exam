import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  /*await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
  const messageInput = page.locator("input#user-message");
  console.log(await messageInput.getAttribute("placeholder"));
  expect (messageInput). toHaveAttribute("placeholder", "Please enter your Message")
  console. log('Before entering data: ' + await messageInput. inputValue());
  await messageInput.type("Hi Deepa");
  console.log('After entering data: ' + await messageInput. inputValue());*/


 /* await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
    let num1 = 345;
    let num2 = 786;

  const sum1input = page.locator ('//input[@id="sum1"]');
  //const sum1input = page.locator ("#sum1");
  const sum2input = page.locator ('//input[@id="sum2"]');
  //const sum2input = page.locator ("#sum2");

  await sum1input.fill(""+ num1);
  await sum2input.fill(""+ num2);

  const getsum = page.locator("//button[text()='Get Sum']");

  await getsum.click();

  const resultText = page.locator("//p[@id='addmessage']");

  console.log(await resultText.textContent());

  let expectResult = num1 +num2;

  await expect(resultText).toHaveText(""+expectResult);*/

 /* await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
 // const singlecheckbox = page.locator("id=isAgeSelected");
 //expect(singlecheckbox).not.toBeChecked();
  //await singlecheckbox.check();
  //expect(singlecheckbox).toBeChecked();

  const checkbutton = page.locator("id=box");
  checkbutton.click();
  await page.waitForTimeout(5000);
  const check1 = page.locator("id=ex1-check1");
  const check2 = page.locator("id=ex1-check2");
  //const check3 = page.locator("id=ex1-check3");
  expect(check1).toBeChecked();
  expect(check2).toBeChecked();
  //expect(check3).toBeChecked();
  checkbutton.click();
  expect(check1).not.toBeChecked();
  expect(check2).not.toBeChecked();
  //expect(check3).not.toBeChecked();*/

  await page.goto('https://www.lambdatest.com/selenium-playground/radiobutton-demo');
  await page.waitForTimeout(5000);
  const buttongetValue = page.locator("id=buttoncheck");

  const radioButton2 = page.locator("input[name='optradio'][value='Female']");
  radioButton2.click();
  buttongetValue.click();
  await page.waitForTimeout(3000);
  const paragraph2 = page.locator("//p[contains(text(), 'Radio button')]");
  console.log(await paragraph2.textContent());
  //await page.waitForTimeout(5000);

  const radioButton1 = page.locator("input[name='optradio'][value='Male']");
  radioButton1.click();
  buttongetValue.click();
  await page.waitForTimeout(3000);
  const paragraph = page.locator("//p[contains(text(), 'Radio button')]");
  console.log(await paragraph.textContent());
  //await page.waitForTimeout(5000);

});