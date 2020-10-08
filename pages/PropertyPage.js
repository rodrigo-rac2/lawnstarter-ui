var actions = {
    setGate: function (value) {
        return this
            // .waitForElementVisible(`@rdBtnGate_${value}`, 2000)
            // .click(`@rdBtnGate_${value}`)

            .useXpath()
            .waitForElementVisible(`//input[@name="gate.has_gate" and @value="${value}"]`, 2000)
            .click(`//input[@name="gate.has_gate" and @value=${value}]`)
            .useCss()
    },
    setGateTrue: function (browser) {
        this
            .useXpath()
            .waitForElementVisible(`//div//label[contains(text(),"Do you have a gate?")]`, 2000)
            .moveToElement(`//div//label[contains(text(),"Do you have a gate?")]`, 250, 0)
            .useCss()

        browser.mouseButtonClick('left')
        return this
    },
    setMultiTenant: function (value) {
        //        return this
        // .waitForElementVisible(`@rdBtnMultiT_${value}`, 2000)
        // .click(`@rdBtnMultiT_${value}`)

        return this
            .useXpath()
            .waitForElementVisible(`//input[@name="multitenant.is_multitenant" and @value="${value}"]`, 2000)
            .click(`//input[@name="multitenant.is_multitenant" and @value=${value}]`)
            .useCss()
    },
    setCommunityRestricted: function (value) {
        return this
            .useXpath()
            .waitForElementVisible(`//input[@name="community.restricted" and @value="${value}"]`, 2000)
            .click(`//input[@name="community.restricted" and @value="${value}"]`)
            .useCss()
    },
    setLawnMaintenanceType: function (type) {
        return this
            .useXpath()
            .waitForElementVisible(`//input[@name="mowing_preferences.scope" and @value="${type}"]`, 2000)
            .click(`//input[@name="mowing_preferences.scope" and @value="${type}"]`)
            .useCss()
        // .waitForElementVisible(`@rdBtn_${type}`, 2000)
        // .click(`@rdBtn_${type}`)
    },
    clickSaveandContinue() {
        return this
            .waitForElementVisible(`@btnSave`, 2000)
            .click(`@btnSave`)
    }
}

var asserts = {
    assertPageLoaded: function () {
        return this
            .waitForElementVisible('@form', 30000)
    }
}


module.exports = {
    commands: [actions, asserts],
    elements: {
        form: '.column.is-6',
        rdBtnGate_No: 'input[type="radio"][name="gate.has_gate"][value="false"]',
        rdBtnGate_Yes: 'input[type="radio"][name="gate.has_gate"][value="true"]',
        rdBtnMultiT_No: 'input[type="radio"][name="multitenant.is_multitenant"][value="false"]',
        rdBtnMultiT_Yes: 'input[type="radio"][name="multitenant.is_multitenant"][value="true"]',
        rdBtn_all: 'input[type="radio"][name="mowing_preferences.scope"][value="all"]',
        rdBtn_frontonly: 'input[type="radio"][name="mowing_preferences.scope"][value="frontonly"]',
        rdBtn_backonly: 'input[type="radio"][name="mowing_preferences.scope"][value="backonly"]',
        btnSave: '.button.is-rounded.is-large.is-tertiary.is-fullwidth-on-mobile.min-width'
    }
}