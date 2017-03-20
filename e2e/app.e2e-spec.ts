import { AngularWorkshopPage } from './app.po';

describe('angular-workshop App', () => {
  let page: AngularWorkshopPage;

  beforeEach(() => {
    page = new AngularWorkshopPage();
  });

  it('should display message saying Todo app', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo app');
  });
});
