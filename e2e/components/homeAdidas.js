export class Home {
  constructor(page) {
    this.page = page;
    this.womanCategory = 'ul li a[href="/mujer"]';
    this.selectShoesCard = 'a[href="/tenis-courtblock/IF4029.html"]';
    // this.selectShoesCard = 'a[href="/tenis-racer-tr23/IF6510.html"]'
    this.closeModalBtn = 'button[name="account-portal-close"]';
    this.addCarBtn = 'button span[data-testid="arrow-right-long"]';
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
    await this.page.click(this.selectShoesCard, { timeout: 10000 });
  }
  async closeModal() {
    if (await this.page.isVisible(this.closeModalBtn)) {
      await this.page.click(this.closeModalBtn);
    }
  }
  async addShoesToCar() {
    await this.page.click(this.addCarBtn, { timeout: 20000 });
    await this.closeModal()
  }

  async selectSize(text) {
    const spanWithText = this.page.locator("span").filter({
      hasText: text,
    });
    if (await spanWithText.isVisible()) {
      await spanWithText.first().click();
    }
  }
}
