
import Header from '../../pages/Header';
import searchResults from '../../pages/searchResults';
import ProductPage from '../../pages/ProductPage';
const input = require('../../data/inputs.json');
const expected = require('../../data/expected/expected.json')

describe('SearCH RESULT', function() {
  before('Before',() => {
    Header.openUrl('/')

  })

  it('Search input iphone ', function() {
    Header.searchInput(input.TSC1.searchKeyWord);
    expect(searchResults.searchKeyWord.getText()).contains(expected.TSC1.searchKeyWord);
  });
  it('search Input lapTop', function() {
    Header.searchInput(input.TSC2.searchKeyWord);
    expect(searchResults.searchKeyWord.getText()).contains(expected.TSC2.searchKeyWord);
    searchResults.firstItem.click();
  });


});
describe('PRODUCT PAGE', function() {
  it('buy now btn is visible', function() {
    expect(ProductPage.elemIsDisplayed(ProductPage.buyNowBtn)).true;
    browser.pause(1000)
  });
 });