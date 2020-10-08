var actions = {
    clickContinuetoServices: function () {
        // this.moveToElement('@btnContinuetoServices', null, null)
        // browser.mouseButtonClick('left')

        return this
            .useXpath()
            .waitForElementVisible(`//button//span[contains(text(),'continue to my services')]`)
            .click(`//button//span[contains(text(),'continue to my services')]`)
            .useCss()
    }
}

var asserts = {
    assertPageLoaded: function () {
        return this
            .waitForElementVisible('@form', 3000)
    }
}


module.exports = {
    commands: [actions, asserts],
    elements: {
        form: '.column.is-7',
        btnContinuetoServices: '.is-size-5.has-text-weight-bold.is-uppercase.has-text-white'
    }
}