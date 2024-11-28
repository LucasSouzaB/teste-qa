import { test, expect } from "@playwright/test";
import { loginStandardUser } from "../helpers/loginStandardUser.js";
test.describe("fluxo de login e compra", () => {
    test("fluxo de compora", async ({ page }) => {
        await loginStandardUser(page)
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('Lucas');
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('Souza');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('81015897');
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
        await page.locator('[data-test="back-to-products"]').click();
    })
})