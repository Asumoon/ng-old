import { PubicparkPage } from './app.po';

describe('pubicpark App', () => {
  let page: PubicparkPage;

  beforeEach(() => {
    page = new PubicparkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
