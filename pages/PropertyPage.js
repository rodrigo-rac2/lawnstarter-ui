var actions = {
    setGate: function (value, browser) {
        if (value) {
            browser.execute(function setGate() {
                let element = document.querySelector(`input[type="radio"][name="gate.has_gate"][value="true"]`);
                let parentElement = element.parentElement;
                //                parentElement.setAttribute("class", "b-radio radio button is-primary is-medium")
                parentElement.click()
            })
        }
        else {
            browser.execute(function setGate() {
                let element = document.querySelector(`input[type="radio"][name="gate.has_gate"][value="false"]`);
                let parentElement = element.parentElement;
                parentElement.click()
            })
        }

        return this
    },
    setGateProperties: function (lockType, wide, gateCode, browser) { //to be improved
        browser.execute(function setGateProp() {
            document.querySelector(`input[type="radio"][value="code"]`).click();

            let codes = document.querySelectorAll(`input[type="text"][name="lock_gate_input-code"]`)
            codes.forEach(element => {
                element.click()
                element.value = "1213"
            })

            document.querySelector(`.under-48`).click();
        })

        return this
    },
    setMultiTenant: function (value, browser) {
        if (value) {
            browser.execute(function setTenant() {
                let element = document.querySelector(`input[type="radio"][name="multitenant.is_multitenant"][value="true"]`);
                let parentElement = element.parentElement;
                parentElement.click();
            })
        }
        else {
            browser.execute(function setTenant() {
                let element = document.querySelector(`input[type="radio"][name="multitenant.is_multitenant"][value="false"]`);
                let parentElement = element.parentElement;
                parentElement.click();
            })
        }

        return this
    },
    setCommunityRestricted: function (value, browser) {
        if (value) {
            browser.execute(function setCommunity() {
                let element = document.querySelector(`input[type="radio"][name="community.restricted"][value="true"]`);
                let parentElement = element.parentElement;
                parentElement.click();
            })
        }
        else {
            browser.execute(function setCommunity() {
                let element = document.querySelector(`input[type="radio"][name="community.restricted"][value="false"]`);
                let parentElement = element.parentElement;
                parentElement.click();
            })
        }

        return this
    },
    setLawnMaintenanceType: function (type, browser) {
        browser.execute(function setMaintenance() {
            document.querySelector(`input[type="radio"][name="mowing_preferences.scope"][value="frontonly"]`).click();
        })

        return this
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