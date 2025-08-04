import { test } from "@playwright/test";
import  percySnapshot  from "@percy/playwright";

test('Captura visual del formulario', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await percySnapshot(page,'Form');
})