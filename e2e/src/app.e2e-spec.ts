import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a plus button', () => {
    page.navigateTo();
    expect(page.getPlusOperator()).toEqual('+');
  });

  it('should have a minus button', () => {
    page.navigateTo();
    expect(page.getMinusOperator()).toEqual('-');
  });

  it('should have a multiple button', () => {
    page.navigateTo();
    expect(page.getMultiplyOperator()).toEqual('*');
  });

  it('should have a divide button', () => {
    page.navigateTo();
    expect(page.getDivideOperator()).toEqual('/');
  });

  it('should display webapp title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('My Calculator, the ngulator!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
