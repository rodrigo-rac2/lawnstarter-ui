

module.exports = {
    'Happy Path': (browser) => {
        let mainPage = browser.page.MainPage()

        mainPage
            .loadPage()
            .setAddress(`1234 South Lamar Blvd`)
            .selectAutoCompleteSuggestion(1, browser) //select the first suggestion from autocomplete
            .setName("Test User 1")
            .setPhoneNumber("5555555555")
            .clickSeePriceButton()

        let singleSignUpPage = browser.page.SingleSignUpPage()
        singleSignUpPage.verifyIfPageLoads()

        let signUpPage = browser.page.SignUpPage()
        signUpPage
            .assertPageLoaded()
            .clickDatePicker()
            .selectNextMonth()
            .selectValidDay()
            .setEmail('test8@test.com')
            .setCreditCardNumber('4111 1111 1111 1111')
            .selectValidCCMonth(browser)
            .selectValidCCYear(browser)
            .setCCCVC('111')
            .clickTermsOfService(browser)
            .selectValidLeadSource(browser)
            .clickReserveBooking()        

        let propertyPage = browser.page.PropertyPage()
        propertyPage
            .assertPageLoaded()
            .setGateTrue(browser)
            .pause(10000)
    }
}