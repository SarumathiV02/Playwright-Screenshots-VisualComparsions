
import { test, expect } from '@playwright/test';
test('page screenshot',async({page})=>{
    await page.goto("https://ai-interview-admin.seaswap.co/dashboard")

    // Wait for 15 seconds to ensure the page is fully loaded
    await page.waitForTimeout(15000);

    //screenshot and stores into testsscreenshots(defaultlycreated) with the name given below
    await page.screenshot({path:'dashboard.png'})

    //same png name for differntly wants to store then give an Date.now()
    // await page.screenshot({ path: `dashboard_${Date.now()}.png` });

})

test('FullScreen Screenshots', async ({ page }) => {
    await page.goto("https://ai-interview-admin.seaswap.co/dashboard");

    // Corrected the filename to ensure it ends with ".png"
    await page.screenshot({ path: `dashboard_${Date.now()}.png`, fullPage: true });
});


test('Login button and Post a job button screenshot', async ({ page }) => {
    // Navigate to the login page
    await page.goto("https://ai-interview-admin.seaswap.co/login");

    // Take a screenshot of the login button
    await page.locator('button[type="submit"]').screenshot({ path: `login_button_${Date.now()}.png` });

    // After login, navigate to the dashboard (you should add login steps here)
    await page.fill('input[name="email"]', 'sarumathitvm02@gmail.com');
    await page.fill('input[name="password"]', 'V_saru2002');
    await page.locator('button[type="submit"]').click();
    await page.waitForNavigation({ url: 'https://ai-interview-admin.seaswap.co/dashboard' });

    // Screenshot of the "Post a job" button after login
    await page.locator('a.apply-btn[href="/post-job"]').screenshot({ path: `post_a_job_${Date.now()}.png` });
});


test('Visual Comparisons', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    await page.goto("https://ai-interview-frontend.seaswap.co/signUp");

    // Adding a delay to ensure that any visual changes are rendered
    await page.waitForTimeout(3000); // 3 seconds

    // Step 2: Capture and compare the initial state of the page
    await expect(page).toHaveScreenshot('initial-signup-page.png');

    // Step 3: Interact with the page (e.g., fill the first name field)
    await page.locator("//input[@id='firstName']").click();
    await page.locator("//input[@id='firstName']").fill('sarumathivasu');

    // Adding a delay to ensure that any visual changes are rendered
    await page.waitForTimeout(3000); // 3 seconds

    // Step 4: Capture and compare the state after filling the first name
    await expect(page).toHaveScreenshot('filled-firstname.png');
});






