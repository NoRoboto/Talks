const { takeScreenshot } = require('./helper');

describe('Example matchers', () => {

  afterEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('view-home'))).toBeVisible();
  });

  it('2- should render la vida', async()=> {
    await expect(element(by.text('Awesome Button!'))).toExist();
  });

  it('3- should click button be clicked', async () => {
    const button = element(by.text('Awesome Button!'));
    const inputText = element(by.id('home-primary-text-input'));
    await button.tap();
    await expect(inputText).toHaveText("hola bebe");
  });

  it('4 --->', async () => {
    const button = element(by.text('Awesome Button!'));
    const inputText = element(by.id('home-primary-text-input'));
    const errorText = element(by.id('home-hiden-text'));
    await inputText.typeText("a");
    takeScreenshot();
    await expect(errorText).toNotExist();
    await inputText.typeText("aaa");
    await expect(errorText).toExist();
  });
 
});
