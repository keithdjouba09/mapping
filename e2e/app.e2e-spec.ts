import { MappingPage } from './app.po';

describe('mapping App', function() {
  let page: MappingPage;

  beforeEach(() => {
    page = new MappingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
