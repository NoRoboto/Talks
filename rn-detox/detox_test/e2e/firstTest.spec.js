const { takeScreenshot } = require('./helper');

describe('Example matchers', () => {

  it('should have welcome screen', async () => {
    await expect(element(by.id('view-home'))).toBeVisible();
  });

  it('should select dummy_btn ui element using text matcher', async () => {
    await expect(element(by.text('Detox TEST'))).toBeVisible();
  });

  it('should select dummy_btn ui element using label matcher', async () => {
    await expect(element(by.label('dummy_btn'))).toBeVisible();
  });
});


describe('Example actions', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the hidden ui element only if user type 3 or more string length on text input', async () => {
    await element(by.id('home-primary-text-input')).typeText('passcode');
    takeScreenshot();
    await expect(element(by.id('home-hiden-text'))).toExist();
  });

  it('should remove the ui element if the text input is empty', async () => {
    await element(by.id('home-primary-text-input')).clearText();
    await expect(element(by.id('home-hiden-text'))).toNotExist();
  });
});