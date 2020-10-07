var actions = {
    clickDatePicker: function (client) {
        this.useXpath()
            .waitForElementVisible("//div[@class='vdp-datepicker ls-datepicker']", 2000)
            .moveToElement("//div[@class='vdp-datepicker ls-datepicker']", 0, 0)
            .useCss()

        client.mouseButtonClick('left')
        return this
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
        form: '.ls-single-step-signup-form',
        // addressInput: 'input[name=address]',
        // btnSeePrice: '.js-submitButton',
        // txtName: 'input[name=name]',
        // txtPhone:'input[name=phone]'
    }
}