var actions = {
    clickConfirmEarlyStart: function () {
        return this
            .click('@btnConfirmEarlyStart')
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
        form: '.onboarding-distribute-early-view--buttons',
        btnConfirmEarlyStart: '.button.is-rounded.is-large.onboarding-distribute-early-view--button.is-tertiary.is-fullwidth-on-mobile.min-width'
    }
}