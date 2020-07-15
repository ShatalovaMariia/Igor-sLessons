import BasePage from './basePage';

class SearchResults extends BasePage {
  get searchKeyWord() {
    return $('.a-color-state')}
  get firstItem() {
    return $('//div[@class="a-section aok-relative s-image-fixed-height"]')
  }
  clickSearchItem(n){
    $(`[data-cel-widget="search_result_${n}"]`).waitForClickable();
    $(`[data-cel-widget="search_result_${n}"]`).click();
  }
}
export default new SearchResults();