
import Header from '../../pages/Header';
import searchResults from '../../pages/searchResults';
const input = require('../../data/inputs.json').TSC1;
const expected = require('../../data/expected/expected.json').TSC1

describe('MAIN PAGE ELEMENTS OF HEADER IS DISPLAYED', function() {
  before('Before',() => {
    Header.openUrl('/')

  })

  it('Search input iphone ', function() {
    Header.searchInput(input.searchKeyWord);
    expect(searchResults.searchKeyWord.getText()).contains(expected.searchKeyWord);
  });
  });
