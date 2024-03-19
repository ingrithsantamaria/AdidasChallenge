export class Home {
  constructor(page) {
    this.page = page;
    this.womanCategory = 'ul li a[href="/mujer"]';
    this.selectShoesCard = 'a[href="/tenis-courtblock/IF4029.html"]';
    this.closeModalBtn = 'button[name="account-portal-close"]';
    this.addCarBtn = 'button[data-auto-id="add-to-bag"]';
    this.notSizeAvailability = 'button[data-auto-id="reload-availability"]';
  }
  async navigateHome() {
    await this.page.goto("https://www.adidas.com", {
      waitUntil: "domcontentloaded",
    });
  }
  async selectWomanCategory() {
    await this.page.click(this.womanCategory, { timeout: 10000 });
  }
  async clickOnSubCategoryShoes() {
    await this.page.locator('a[href="/calzado-mujer"] div').nth(0).click();
  }
  async selectShoes() {
    await this.page.click(this.selectShoesCard, {
      waitUntil: "domcontentloaded",
    });
  }
  async closeModal() {
    if (await this.page.isVisible(this.closeModalBtn)) {
      await this.page.click(this.closeModalBtn);
    }
  }
  async reloadSizes() {
    if (await this.page.isVisible(this.notSizeAvailability)) {
      await this.page.click(this.notSizeAvailability);
    }
  }
  async addShoesToCar() {
    await this.page.click(this.addCarBtn, { timeout: 20000 });
    await this.closeModal();
  }

  async selectSize() {
    if (await this.page.isVisible(this.closeModalBtn)) {
      await this.page.click(this.closeModalBtn);
    }
    // await page.waitForFunction(() => document.querySelector('button.gl-label').nth(0) !== null);
    await this.page.waitForSelector('button.gl-label', { state: 'visible'})
    await this.page.locator('button.gl-label', {
        waitUntil: "domcontentloaded",
      }).nth(0).click() 
  }
}
