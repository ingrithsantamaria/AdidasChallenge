import { Home } from "../components/homeAdidas";
import { test, chromium } from "@playwright/test";
test("User navigate home Adidas", async ({ browser }) => {
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  const home = new Home(page);
  await home.navigateHome();
  await home.selectWomanCategory();
  await home.clickOnSubCategoryShoes();
  await home.selectShoes();
  await home.closeModal();
  await home.selectSize("US H 7 / M 8");
  await home.closeModal();
  await home.addShoesToCar();
  await home.closeModal();
});
