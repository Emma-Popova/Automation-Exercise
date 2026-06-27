import { test, expect } from "@playwright/test";

test.describe("Open page and log In", () => {

  test.beforeEach("Open Page", async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    
    const acceptBtn = page.getByRole("button", { name: "Consent" });
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }
  });

  test("Test Case 1- Navigate to login Page and log In", async ({page,}) => {

     const banner = page.locator('#card');

    if (await banner.isVisible()) {
         await banner.locator(".close-button-outer").click();
    };

    const signUp = page.getByRole('link', {name: " Signup / Login"});
    await expect(signUp).toBeVisible();
    await signUp.click();
    await expect(page).toHaveURL('https://automationexercise.com/login')

   

   
    const username = page.locator('[data-qa="signup-name"]')
    const email = page.locator('[data-qa="signup-email"]');
     // const username = page.getByRole("textbox", { name: "Name" });ТОЗИ РАБОТИ НО Е ПРОБЛЕМЕН АКО ИМА ОШЕ ЕДИН
    // const email = page.getByPlaceholder('Email Address'); ТОЗИ НЕ РАБОТИ

    await username.fill("Emma Popova");
    await email.fill('emma@test.com');

    const submitButton = page.getByRole("button", { name: "Signup" });
    await submitButton.click();

    await signUp.click();
    await expect(page).toHaveURL("https://automationexercise.com/login");
   
  })

});
