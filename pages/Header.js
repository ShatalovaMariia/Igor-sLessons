import BasePage from './basePage';


class Header extends BasePage{

  get logo() {return  '#nav-logo'}
  get hamburger() {return '#nav-hamburger-menu'}
  get searchScope() {return '.nav-search-scope'}
  get inputSearch() {return '#twotabsearchtextbox'}
  get loupe() {return'#nav-search-submit-text'}
  get languageButton() {return '#icp-nav-flyout'}
  get searchInputField(){return "#twotabsearchtextbox"}
openUrl(url) {
  super.openUrl('/');
}

  searchInput(text){
   $(this.searchInputField).setValue(text)
    browser.keys('Enter')

  }
  // elemIsDisplayed(locator) {
  //   super.elemIsDisplayed(locator);
  // }
}

export default new Header();