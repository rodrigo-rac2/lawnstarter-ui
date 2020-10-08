

module.exports = {
    'Happy Path': (browser) => {
        let mainPage = browser.page.MainPage()

        mainPage
            .loadPage()
            .setAddress(`1234 South Lamar Blvd`)
            .selectAutoCompleteSuggestion(1, browser) //select the first suggestion from autocomplete
            .setName("Test User 23")
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
            .setEmail('test23@test.com')
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
            .setGate(true,browser)
            .setGateProperties('code','u48','1234', browser)
            .setMultiTenant(false,browser)
            .setCommunityRestricted(false,browser)
            .setLawnMaintenanceType(`frontonly`,browser)
            .clickSaveandContinue()
            .pause(30000)

    }
}