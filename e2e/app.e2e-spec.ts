import { ProductCatalogPage } from './app.po';

describe('product-catalog App', () => {
  let page: ProductCatalogPage;

  beforeEach(() => {
    page = new ProductCatalogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
