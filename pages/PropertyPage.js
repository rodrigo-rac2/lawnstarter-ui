var actions = {
    setGate: function (value) {
        return this
            .useXpath()
            .waitForElementVisible(`//div//label[contains(text(),"${value}")]//input[@name="gate.has_gate"]`, 2000)
            .click(`//div//label[contains(text(),"${value}")]//input[@name="gate.has_gate"]`)
            .useCss()
    },
    setMultiTenant: function (value) {
        return this
            .useXpath()
            .waitForElementVisible(`//div//label[contains(text(),"${value}")]//input[@name="multitenant.is_multitenant"]`, 2000)
            .click(`//div//label[contains(text(),"${value}")]//input[@name="multitenant.is_multitenant"]`)
            .useCss()
    },
    setLawnMaintenanceType: function (type) {
        return this
            .waitForElementVisible(`@rdBtn_${value}`, 2000)
            .click(`@rdBtn_${value}`)
    }
}

var asserts = {
    verifyIfPageLoads: function () {
        return this
            .waitForElementVisible('@form', 3000, false, result => {
                if (result.value) {
                    return this.clickGetQuote()
                }
            })
    }
}


module.exports = {
    commands: [actions, asserts],
    elements: {
        form: '.ls-panel.ls-get-quote-form__panel',
        rdBtn_all: 'input[type=radio][name=mowing_preferences.scope][value=all]',
        rdBtn_frontonly: 'input[type=radio][name=mowing_preferences.scope][value=frontonly]',
        rdBtn_backonly: 'input[type=radio][name=mowing_preferences.scope][value=backonly]'
        // addressInput: 'input[name=address]',
        // btnSeePrice: '.js-submitButton',
        // txtName: 'input[name=name]',
        // txtPhone:'input[name=phone]'
    }
}