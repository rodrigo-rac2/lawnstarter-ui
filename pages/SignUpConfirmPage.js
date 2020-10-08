var actions = {
    clickConfirmandAgree: function () {
        return this
            .click('@btnConfirmAndAgree')
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
        form: '.column.is-8',
        btnConfirmAndAgree: '.is-size-5.has-text-weight-bold.is-uppercase.has-text-white'
    }
}