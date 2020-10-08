var actions = {
    clickDatePicker: function () {
        return this
            .useXpath()
            .waitForElementVisible("//div[@class='vdp-datepicker ls-datepicker']", 2000)
            .click("//div[@class='vdp-datepicker ls-datepicker']")
            .useCss()
    },
    clickTermsOfService: function (browser) {
        this
            .useXpath()
            .waitForElementVisible("//div//label[@for='terms-of-service']", 2000)
            .moveToElement("//div//label[@for='terms-of-service']", 0, 0)

        browser.mouseButtonClick('left')
        return this.useCss()
    },
    clickReserveBooking: function () {
        return this
            .waitForElementVisible('@btnReserveBooking', 2000)
            .click('@btnReserveBooking')
    },
    selectNextMonth: function () {
        return this
            .waitForElementVisible("@btnNextMonthCal", 2000)
            .click("@btnNextMonthCal")
    },
    setEmail: function (text) {
        return this
            .waitForElementVisible("@txtEmail", 2000)
            .setValue('@txtEmail', text)
    },
    setCreditCardNumber: function (text) {
        return this
            .waitForElementVisible("@txtCreditCard", 2000)
            .setValue('@txtCreditCard', text)
    },
    setCCCVC: function (text) {
        return this
            .waitForElementVisible("@txtCVC", 2000)
            .setValue('@txtCVC', text)
    },
    selectValidCCMonth: function (client) {
        this
            .waitForElementVisible("@cmbCCMonth", 2000)
            .click('@cmbCCMonth')
        client.keys(client.Keys.DOWN_ARROW) //january
        return this
    },
    selectValidCCYear: function (client) {
        this
            .waitForElementVisible("@cmbCCYear", 2000)
            .click('@cmbCCYear')
        client.keys(client.Keys.DOWN_ARROW) //three strokes to ensure a valid year
            .keys(client.Keys.DOWN_ARROW)
            .keys(client.Keys.DOWN_ARROW)
        return this
    },
    selectValidLeadSource: function (client) {
        this
            .waitForElementVisible("@cmbLead", 2000)
            .click('@cmbLead')
        client.keys(client.Keys.DOWN_ARROW) //three strokes to ensure a valid year
            .keys(client.Keys.DOWN_ARROW)
            .keys(client.Keys.DOWN_ARROW)
        return this
    },
    selectValidDay: function () {
        //attempts to click 5 consecutive days - when the test finds the first valid date, aborts the callback loop (assumption: not going to get 5 consecutive holidays in a new month)
        //yeah we need to improve this /o/
        this
            .useXpath()
            .waitForElementVisible(`//div//span[@class='cell day' and text()='1']`, 2000, false, result1 => {
                if (result1.value) {
                    this.click(`//div//span[@class='cell day' and text()='1']`)
                }
                else {
                    return this.waitForElementVisible(`//div//span[@class='cell day' and text()='2']`, 2000, false, (result2) => {
                        if (result2.value) {
                            this.click(`//div//span[@class='cell day' and text()='2']`)
                        }
                        else {
                            this.waitForElementVisible(`//div//span[@class='cell day' and text()='3']`, 2000, false, (result3) => {
                                if (result3.value) {
                                    this.click(`//div//span[@class='cell day' and text()='3']`)
                                }
                                else {
                                    this.waitForElementVisible(`//div//span[@class='cell day' and text()='4']`, 2000, false, (result4) => {
                                        if (result4.value) {
                                            this.click(`//div//span[@class='cell day' and text()='4']`)
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
            .useCss()

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
        btnNextMonthCal: '.next',
        txtEmail: '#email',
        txtCreditCard: '#ccnumber',
        txtCVC: '#cvv2',
        cmbCCMonth: '#exp_month',
        cmbCCYear: '#exp_year',
        cmbLead: '#leadSource',
        btnReserveBooking: '.ls-button.ls-button--block.ls-button--lg.ls-button--yellow.ls-reserve-booking__button',
        chkBoxTermsofService: '#terms-of-service'

    }
}