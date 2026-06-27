import { test, expect } from "@playwright/test";
import { users } from "../data/users";

test.describe("Automation Exercise Authentication", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await expect(page).toHaveURL("https://automationexercise.com/");

    const acceptBtn = page.getByRole("button", { name: "Consent" });
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }
  });
  test("Test Case 1: Register user", async ({ page }) => {

    await page.getByRole("link", { name: "Signup / Login" }).click();
  
    await expect(page).toHaveURL(/\/login$/); 
    await expect(page.locator(".signup-form")).toBeVisible();


    await page.locator('[data-qa="signup-name"]').fill("Didi");

    await page.locator('[data-qa="signup-email"]').fill(users.newUser.email);

    await page.getByRole("button", { name: "Signup" }).click();

    await expect(page).toHaveURL(/\/signup$/);

    await page.locator("#id_gender2").check();
    await page.locator('[data-qa="password"]').fill(users.newUser.password);
    await page.locator('[data-qa="days"]').selectOption("1");
    await page.locator('[data-qa="months"]').selectOption("1");
    await page.locator('[data-qa="years"]').selectOption("2000");
    await page.getByRole("checkbox", { name: "Sign up for our newsletter!" }).check();
    await page.getByRole("checkbox", {name: "Receive special offers from our partners!"}).check();

    await page.locator('[data-qa="first_name"]').fill("Didi");
    await page.locator('[data-qa="last_name"]').fill("Midi");
    await page.locator('[data-qa="company"]').fill("BlaBla");
    await page.locator('[data-qa="address"]').fill("Bla- bla str., Sof.1000, ap. 3");
    await page.locator('[data-qa="address2"]').fill("Bla = str. Varna. 3000, #3");
    await page.locator('[data-qa="country"]').selectOption("Australia");
    await page.locator('[data-qa="state"]').fill("Alabala");
    await page.locator('[data-qa="city"]').fill("Sofia");
    await page.locator('[data-qa="zipcode"]').fill("3000");
    await page.locator('[data-qa="mobile_number"]').fill("035911334422");
    await page.locator('[data-qa="create-account"]').click();

    await expect(page).toHaveURL("https://automationexercise.com/account_created");
    await expect(page.locator('[data-qa="account-created"]')).toBeVisible();

    await page.locator('[data-qa="continue-button"]').click();
    await expect(page).toHaveURL("https://automationexercise.com/");

    await expect(page.getByRole("link", {name: /Logged in as/i})).toBeVisible();

    
  });

  test("Test Case 2: Login with valid credentials", async({page})=> {
   
  })

  test("Test Case 3: Login with invalid credentials", async ({ page }) => {
    
  });
});
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
// 9. Click 'Delete Account' button
// 10. Verify that 'ACCOUNT DELETED!' is visible
