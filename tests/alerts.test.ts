/*import { test, expect } from '@playwright/test';

test('alerts test', async ({ page }) => {



});*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('paragraph').filter({ hasText: 'JavaScript AlertsClick Me' }).getByRole('button').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('paragraph').filter({ hasText: 'Confirm box:Click Me' }).getByRole('button').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('paragraph').filter({ hasText: 'Prompt box:Click Me' }).getByRole('button').click();
});