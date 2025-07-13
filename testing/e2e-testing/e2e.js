const puppeteer = require("puppeteer");

async function main() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("http://127.0.0.1:5500/testing/e2e-testing/mysite.html");
    await page.type("input[id=email]", "test@email.com");
    await page.type("input[id=password]", "1234");
    await new Promise(res => setTimeout(res, 3000));
    await page.click("input[id=submit]");
    await new Promise(res => setTimeout(res, 3000));
    await browser.close();
}
main().catch(console.error);


