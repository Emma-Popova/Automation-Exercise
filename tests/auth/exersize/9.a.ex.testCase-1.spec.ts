import { test, expect } from "@playwright/test";

test.describe("Test Case 1: Register User", () => {
  test.beforeEach("Navigate to url", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveURL("https://automationexercise.com/");

    const acceptBtn = page.getByRole("button", { name: "Consent" });
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }
  });

  test("Signup / Login", async ({ page }) => {
    await page.getByRole("link", { name: " Signup / Login" }).click();
    await expect(page).toHaveURL("https://automationexercise.com/login");

    await expect(
      page.getByRole("heading", { name: "New User Signup!" }),
    ).toBeVisible();

    const username = page.locator('[data-qa="signup-name"]');
    const email = page.locator('[data-qa="signup-email"]');

    const uniqueEmail = `emma${Date.now()}@test.com`;
    await email.fill(uniqueEmail);
    await username.fill("Emma Popova");

    await expect(username).toHaveValue("Emma Popova");
    await expect(email).toHaveValue(uniqueEmail);

    const submitButton = page.locator('[data-qa="signup-button"]');
    await submitButton.click();

    await expect(page).toHaveURL("https://automationexercise.com/signup");

    const form = page.locator('form[action="/signup"]');
    await expect(form).toBeVisible();

    //problem:
    // await page.locator('#id_gender2').check();
    await form.getByRole("radio", { name: "Mrs." }).check();

    await form.locator('[data-qa="password"]').fill("Secret123");
    await form.locator('[data-qa="first_name"]').fill("Emma");
    await form.locator('[data-qa="city"]').fill("Sofia");

    await expect(page.locator('[data-qa="name"]')).toHaveValue("Emma Popova");
    await expect(page.locator('[data-qa="email"]')).toHaveValue(uniqueEmail);

    await form.locator('[data-qa="days"]').selectOption("7");
    await form.locator('[data-qa="months"]').selectOption("February");
    await form.locator('[data-qa="years"]').selectOption("1978");

    await form.getByLabel("Sign up for our newsletter!").check();
    await form.getByLabel("Receive special offers from our partners!").check();

    await form.locator('[data-qa="first_name"]').fill("Emma");
    await form.locator('[data-qa="last_name"]').fill("Popova");
    await form.locator('[data-qa="company"]').fill("BlaBla33");

    await form
      .locator('[data-qa="address"]')
      .fill("Sofia town, 1000, str. Lili 34, ap. 1");
    await form
      .locator('[data-qa="address2"]')
      .fill("Sofia town, 1000, str. Didi 3, ap. 3");
    await form.locator('[data-qa="country"]').selectOption("New Zealand");
    await form.locator('[data-qa="state"]').fill("State");
    await form.locator('[data-qa="city"]').fill("Sofia");
    await form.locator('[data-qa="zipcode"]').fill("1000");
    await form.locator('[data-qa="mobile_number"]').fill("0888063122");

    await form.locator('[data-qa="create-account"]').click();

    await expect(page).toHaveURL(
      "https://automationexercise.com/account_created",
    );

    await expect(page.locator('[data-qa="account-created"]')).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();

    await expect(page).toHaveURL("https://automationexercise.com/");

    // Изчакай началната страница да се зареди напълно
    await page.waitForLoadState("networkidle");
    
    // Ако се появи рекламен popup, затвори го (ако съществува)
    const adCloseButton = page.locator("#dismiss-button");
    if (await adCloseButton.isVisible().catch(() => false)) {
      await adCloseButton.click();
    }

     // Проверка, че потребителят е логнат
    // await expect(
    //   page.getByRole("link", { name: /Logged in as/i }),
    // ).toBeVisible();                                          //=> Този не работи май
    await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();


    await page.getByRole("link", {name: " Delete Account"}).click();
       await expect(
    page.locator('[data-qa="account-deleted"]')
    ).toBeVisible();

   // await page.locator('[data-qa="account-deleted"]').isVisible();
 

  });
});

// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

