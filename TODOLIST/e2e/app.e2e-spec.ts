import { TODOLISTPage } from './app.po';

describe('todolist App', () => {
  let page: TODOLISTPage;

  beforeEach(() => {
    page = new TODOLISTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
