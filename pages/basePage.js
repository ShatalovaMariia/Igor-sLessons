

 export default class BasePage {  
  openUrl(url){ 
    browser.url(url) 
  } 
  elemIsDisplayed(locator){
    const res = $(locator).isDisplayed();
    return res;

  }
} 