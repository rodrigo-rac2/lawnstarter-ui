module.exports = {
    //before each file
    beforeEach: (browser, done) => {
        browser.resizeWindow(1366, 768)
        done()
    },

    //after each file
    afterEach: (browser, done) => {
        browser.end()
        done()
    }
}