import { test, expect } from "@playwright/test";

test.describe("Open page and log in", () => {
  test.beforeEach("Open page", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
        // 👉 затваряме cookie popup
     const acceptBtn = page.getByRole("button", { name:  "Consent" });
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }
  });
  //test("Navigate to login Page", async ({ page }) => {

   
    //    await page.route('**/*', route => {
    //   const url = route.request().url();

    //   if (url.includes('criteo') || url.includes('doubleclick')) {
    //     route.abort();
    //   } else {
    //     route.continue();
    //   }
    // });
    //   const iframe = page.locator('#aswift_3');
    //  await iframe.locator('#close_button_svg').click();
    ////////

  //   const signUp = page.getByRole("link", { name: "Signup / Login" });
  //   await expect(signUp).toBeVisible();
  //   await signUp.click();
  //   //   //await page.getByRole('link', {name: "Signup / Login"}).click();
  //   //  //  await page.locator('a[href="/login"]').click();
  //   expect(page).toHaveURL("https://automationexercise.com/login");

  //   const username = page.getByRole("textbox", { name: "Name" });
  //   const email = page.getByRole("textbox", { name: "Email Address" });

  //   await expect(username).toBeVisible();
  //   await expect(email).toBeVisible();

  //   await username.fill("Emma Popova");
  //   await email.fill("emma_tes@ex.com");

  //   const submitButton = page.getByRole("button", { name: "Signup" });
  //   await expect(submitButton).toBeVisible();
  //   await submitButton.click();
  // });
});
