import BasePage from './basePage';


class Header extends BasePage{

  get logo() {return  '#nav-logo'}
  get hamburger() {return '#nav-hamburger-menu'}
  get searchScope() {return '.nav-search-scope'}
  get inputSearch() {return '#twotabsearchtextbox'}
  get loupe() {return'#nav-search-submit-text'}
  get languageButton() {return '#icp-nav-flyout'}
  get searchInputField(){return "#twotabsearchtextbox"}
  get searchBtn(){return'[value="Go"]'}
openUrl(url) {
  super.openUrl('/');
}

  // searchInput(text){
  //  $(this.searchInputField).setValue(text)
  //   browser.keys('Enter')
  //
  // }
  // elemIsDisplayed(locator) {
  //   super.elemIsDisplayed(locator);
  // }
  searchInput(text){
    $(this.searchInputField).setValue(text)
    $(this.searchBtn).click();
  }
  // clickOnBtn(locator){
  //   $(locator).click()
  //
  // }
}

export default new Header();

