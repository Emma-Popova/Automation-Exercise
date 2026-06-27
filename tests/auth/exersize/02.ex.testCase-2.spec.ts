import {test, expect } from "@playwright/test";

test.describe("Test Case 2: Login functionality", ()=>{
    test.beforeEach("Open page", async({page})=> {
        await page.goto("http://automationexercise.com");
       

        const acceptBtn = page.getByRole('button', {name: "Consent"});
        if (await acceptBtn.isVisible()){
            acceptBtn.click();
        }
         await expect(page).toHaveURL("https://automationexercise.com/");
    })

    test("Login with valid credentials and delete account", async({page})=>{
        await page.getByRole('link', {name: "Signup / Login"}).click();
        await expect(page).toHaveURL("https://automationexercise.com/login");
        await expect(page.getByText("Login to your account")).toBeVisible();

    // await expect(
    //   page.getByRole("heading", { name: "Login to your account" }),
    // ).toBeVisible();

        const emailInput = page.locator('[data-qa="login-email"]');
        const passwordInput = page.locator('[data-qa="login-password"]');
        const loginButton = page.locator('[data-qa="login-button"]');
        const uniqueEmail = `emma${Date.now()}@test.com`;

        await (emailInput).fill(uniqueEmail);
        await (passwordInput).fill("Secret123");
        await (loginButton).click();

        // await page.getByText("Delete Account").click();
        await page.getByRole("link", { name: /delete account/i }).click();
        await expect(page.locator('[data-qa="account-deleted"]')).toBeVisible();

    })
})

// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
// 9. Click 'Delete Account' button
// 10. Verify that 'ACCOUNT DELETED!' is visible
//--------------------------------
// // Arrange
// fill data

// // Act
// click login

// // Assert
// verify logged in


