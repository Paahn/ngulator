import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1')).getText() as Promise<string>;
  }
  getPlusOperator() {
    return element(by.cssContainingText('button', '+')).getText() as Promise<string>;
  }
  getMinusOperator() {
    return element(by.cssContainingText('button', '-')).getText() as Promise<string>;
  }
  getMultiplyOperator() {
    return element(by.cssContainingText('button', '*')).getText() as Promise<string>;
  }
  getDivideOperator() {
    return element(by.cssContainingText('button', '/')).getText() as Promise<string>;
  }
}
