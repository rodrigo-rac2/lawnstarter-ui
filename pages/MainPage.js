var actions = {
    loadPage() {
        return this
            .navigate()
            .assertPageLoaded()
    },
    setAddress: function (text) {
        return this
            .waitForElementVisible('@addressInput', 3000)
            .setValue('@addressInput', text)
    },
    clickSeePriceButton: function () {
        return this
            .waitForElementVisible('@btnSeePrice', 3000)
            .click('@btnSeePrice')
    },
    selectAutoCompleteSuggestion: function (order, client) {
        //waits for two seconds for google's modal -- need to improve this
        client.pause(2000) 
        
        while (order > 0) {
            client.keys(client.Keys.DOWN_ARROW)
            order--;
        }
        client.keys(client.Keys.TAB)
        return this
    },
    setName: function (text) {
        return this
            .waitForElementVisible('@txtName', 3000)
            .setValue('@txtName',text)
    },
    setPhoneNumber: function (number) {
        return this
            .waitForElementVisible('@txtPhone', 3000)
            .setValue('@txtPhone',number)
    }
}

var asserts = {
    assertPageLoaded: function () {
        return this.waitForElementVisible('@form', 3000)
    }
}


module.exports = {
    url: 'https://dev-www.lawnstarter.com',
    commands: [actions, asserts],
    elements: {
        form: 'form[name=signup-form]',
        addressInput: 'input[name=address]',
        btnSeePrice: '.js-submitButton',
        txtName: 'input[name=name]',
        txtPhone:'input[name=phone]'
    }
}