import BasePage from './basePage';

class SearchResults extends BasePage{
  get searchKeyWord(){return $('.a-color-state')}
}
export default new SearchResults();