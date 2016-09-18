import { ImagineIfPage } from './app.po';

describe('imagine-if App', function() {
  let page: ImagineIfPage;

  beforeEach(() => {
    page = new ImagineIfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
