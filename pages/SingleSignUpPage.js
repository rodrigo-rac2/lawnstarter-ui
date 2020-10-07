var actions = {
    clickGetQuote: function () {
        return this
            .click('@btnGetQuote')
    }
}

var asserts = {
    assertPageLoaded: function () {
        return this.waitForElementVisible('@form', 30000)
    }
}


module.exports = {
    commands: [actions, asserts],
    elements: {
        form: '.ls-panel.ls-get-quote-form__panel',
        btnGetQuote: '.ls-button'

        // addressInput: 'input[name=address]',
        // btnSeePrice: '.js-submitButton',
        // txtName: 'input[name=name]',
        // txtPhone:'input[name=phone]'
    }
}