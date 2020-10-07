var actions = {
    clickDatePicker: function () {
        // this.useXpath()
        //     .waitForElementVisible("//div[@class='vdp-datepicker ls-datepicker']", 2000)
        //     .moveToElement("//div[@class='vdp-datepicker ls-datepicker']", 0, 0)
        //     .useCss()

        // client.mouseButtonClick('left')
        return this
            .useXpath()
            .waitForElementVisible("//div[@class='vdp-datepicker ls-datepicker']", 2000)
            .click("//div[@class='vdp-datepicker ls-datepicker']")
            .useCss()
    },
    selectNextMonth: function () {
        return this
            .waitForElementVisible("@btnNextMonthCal", 2000)
            .click("@btnNextMonthCal")
            .useCss()
    },
    selectValidDay: function () { //attempts to click in 5 consecutive days - assumption is at least one of them is not a holiday and click will be successful
        return this
            .useXpath()
            .waitForElementVisible(`//div//span[@class='cell day' and text()='1']`, 2000, false, (result) => {
                if (result.value) {
                    return this.click(`//div//span[@class='cell day' and text()='1']`)
                }
                else {
                    return this.waitForElementVisible(`//div//span[@class='cell day' and text()='2']`, 2000, false, (result) => {
                        if (result.value) {
                            return this.click(`//div//span[@class='cell day' and text()='2']`)
                        }
                        else {
                            return this.waitForElementVisible(`//div//span[@class='cell day' and text()='3']`, 2000, false, (result) => {
                                if (result.value) {
                                    return this.click(`//div//span[@class='cell day' and text()='3']`)
                                }
                                else {
                                    return this.waitForElementVisible(`//div//span[@class='cell day' and text()='4']`, 2000, false, (result) => {
                                        if (result.value) {
                                            return this.click(`//div//span[@class='cell day' and text()='4']`)
                                        }
                                        else
                                            return result.value //failed test
                                    })
                                }
                            })
                        }
                    })
                }
            })
            .useCss()
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
        btnNextMonthCal: '.next'
        // addressInput: 'input[name=address]',
        // btnSeePrice: '.js-submitButton',
        // txtName: 'input[name=name]',
        // txtPhone:'input[name=phone]'
    }
}