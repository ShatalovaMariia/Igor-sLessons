import BasePage from './basePage';


class MainPageHeader extends BasePage{

  get logo() {return  '#nav-logo'}
  get hamburger() { return '#nav-hamburger-menu'}
  get searchScope() {return '.nav-search-scope'}
  get inputSearch() {return '#twotabsearchtextbox'}
  get loupe() {return'#nav-search-submit-text'}
  get languageButton() {return '#icp-nav-flyout'}
  openUrl(url) {
    super.openUrl('/');
  }
  // elemIsDisplayed(locator) {
  //   super.elemIsDisplayed(locator);
  // }
}

export default new MainPageHeader();