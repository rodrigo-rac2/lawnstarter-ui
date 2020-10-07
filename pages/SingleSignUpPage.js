var actions = {
    clickGetQuote: function () {
        return this
            .click('@btnGetQuote')
    }
}

var asserts = {
    verifyIfPageLoads: function () {
        return this
            .waitForElementVisible('@form', 3000, false, result => {
                if(result.value) {
                    return this.clickGetQuote()
                }
            })
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