const webdriverio = require('webdriverio');

const chrome = webdriverio.remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
});

const firefox = webdriverio.remote({
    desiredCapabilities: {
        browserName: 'firefox'
    }
});

test('search in chrome', () => {
    return chrome
        .init()
        .url('http://localhost:9010')
        .setValue('input', 'Moscow')
        .click('button')
        .waitForExist('li')
        .elements('li').then(flights => {
            const count = flights.value.length;

            expect(count).toBe(2);
        })
        .end();
});

test('search in firefox', () => {
    return firefox
        .init()
        .url('http://localhost:9010')
        .setValue('input', 'Moscow')
        .click('button')
        .waitForExist('li')
        .elements('li').then(flights => {
            const count = flights.value.length;

            expect(count).toBe(2);
        })
        .end();
});
