var actions = {
    clickNoHedgesChkBox: function () {
        return this
            .waitForElementVisible('@chkBoxNoHedged', 3000)
            .click('@chkBoxNoHedged')
    },
    clickSubmitandContinue: function () {
        return this
            .click('@btnSubmitandContinue')
    },
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
        form: '.ls-onboarding-bush-count-view--shrubs-wrapper',
        chkBoxNoHedged: '.b-checkbox.checkbox',
        btnSubmitandContinue: '.is-size-5.has-text-weight-bold.is-uppercase.has-text-white'
    }
}