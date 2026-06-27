import { test, expect } from "@playwright/test";

test.describe("Test_00_Exersize",()=>{
    test.beforeEach("Navigate to url_00", async({page})=>{
        await page.goto("https://automationexercise.com/");

        await expect(page).toHaveURL("https://automationexercise.com/");
    })
    test("Register New User with valid credentials", async({page})=>{

        await page.getByRole('link', {name: " Signup / Login"}).click();
        await expect(page).toHaveURL("https://automationexercise.com/login");
        await expect(page.locator('.signup-form')).toBeVisible();

        await page.locator('[data-qa="signup-name"]').fill("Didi");

        const email = `didi${Date.now()}@example.com`;
        await page.locator('[data-qa="signup-email"]').fill(email);
        //await page.locator('[data-qa="signup-email"]').fill("didi.00_test@example.com");
        
        await page.getByRole("button", {name: "Signup"}).click();

        await expect(page).toHaveURL("https://automationexercise.com/signup");
        await expect (page.getByText('Enter Account Information')).toBeVisible();
        await expect (page.locator('.login-form')).toBeVisible();

        await page.getByRole('radio', {name: "Mrs. "}).check();
        await page.getByLabel('Password').fill("Didi123");
        await page.locator('#days').selectOption("7");
        await page.locator('#months').selectOption("2");
        await page.locator('#years').selectOption("2000");
        await page.getByRole('checkbox', {name: "Sign up for our newsletter!"}).check();
        await page.getByRole('checkbox', {name: "Receive special offers from our partners!"}).check();

        await page.getByRole('textbox', {name: "First name "}).fill("Didi");
        await page.getByRole('textbox', {name: "Last name "}).fill("Didi");






    })
})