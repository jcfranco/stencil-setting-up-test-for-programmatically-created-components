import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  const internalSelector = 'my-component >>> .internal';

  it(`this fails because my-component wiring isn't loaded before the browser script is evaluated`, async () => {
    const page = await newE2EPage();

    await page.evaluate(() => {
      const comp = document.createElement('my-component');
      comp.date = new Date();
      document.body.append(comp);
    });
    await page.waitForChanges();

    const element = await page.find(internalSelector);
    expect(element).toBeTruthy();
  });

  it('this fails because required props are not passed before rendering', async () => {
    const page = await newE2EPage({
      html: '<my-component></my-component>'
    });
    await page.waitForChanges();

    const element = await page.find(internalSelector);
    expect(element).toBeTruthy();
  });

  it(`this works, but is there a better way?`, async () => {
    const page = await newE2EPage({
      // loading unrelated component to do boostrapping
      html: "<my-unrelated-component></my-unrelated-component>"
    });

    await page.evaluate(() => {
      const comp = document.createElement('my-component');
      comp.date = new Date();
      document.body.append(comp);
    });
    await page.waitForChanges();

    const element = await page.find(internalSelector);
    expect(element).toBeTruthy();
  });
});
