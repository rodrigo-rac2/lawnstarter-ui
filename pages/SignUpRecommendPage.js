var actions = {
    clickDone: function (browser) {
        this
             .waitForElementVisible(`@btnDone`)
             .moveToElement('@btnDone', null, null)

        browser.mouseButtonClick(`left`)
        return this
        //    .clickDone('@btnDone')
    }
}

var asserts = {
    verifyIfPageLoads: function (browser) {
        return this
            .waitForElementVisible('@form', 3000, false, result => {
                if (result.value) {
                    return this.clickDone(browser)
                }
            })
    }
}


module.exports = {
    commands: [actions, asserts],
    elements: {
        form: '.column.is-11.nextdoor-modal--info-wrapper',
        //        btnDone: '.is-size-5.has-text-weight-bold.is-uppercase.has-text-white'
        btnDone: '.button.is-rounded.is-large.is-tertiary.is-fullwidth-on-mobile.min-width'
    }
}