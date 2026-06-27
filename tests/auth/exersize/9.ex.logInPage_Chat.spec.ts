import { test, expect } from "@playwright/test";

test.describe("Open page and log In", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    // 1. махаме potential overlays директно
    await page.evaluate(() => {
      document.querySelector('.fc-consent-root')?.remove();
      document.querySelector('.fc-dialog-overlay')?.remove();
    });

    // 2. затваряме евентуални popups (ако съществуват)
    const closeBtn = page.locator(
      '.close, .close-button-outer, button:has-text("Close"), [aria-label="close"]'
    );

    if (await closeBtn.count() > 0) {
      await closeBtn.first().click({ force: true }).catch(() => {});
    }
  });

});