

module.exports = {
    'Happy Path': (browser) => {
        let mainPage = browser.page.MainPage()

        mainPage
            .loadPage()
            .setAddress(`1234 South Lamar Blvd`)
            .selectAutoCompleteSuggestion(1, browser) //select the first suggestion from autocomplete
            .setName("Test User #21")
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
            .setEmail('test21@test.com')
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
            .setGate(true, browser)
            .setGateProperties('code', 'u48', '1234', browser)
            .setMultiTenant(false, browser)
            .setCommunityRestricted(false, browser)
            .setLawnMaintenanceType(`frontonly`, browser)
            .clickSaveandContinue()

        let confirmPage = browser.page.SignUpConfirmPage()
        confirmPage
            .assertPageLoaded()
            .clickConfirmandAgree()

        let confirmEarlyPage = browser.page.SignUpConfirmEarlyPage()
        confirmEarlyPage
            .assertPageLoaded()
            .clickConfirmEarlyStart()
            .pause(30000)

        let confirmBushesHedges = browser.page.SignUpConfirmHedges()
        confirmBushesHedges
            .assertPageLoaded()
            .clickNoHedgesChkBox()
            .clickSubmitandContinue()

        browser.maximizeWindow()
        let welcomePage = browser.page.WelcomePage()
        welcomePage
            .assertPageLoaded()
            .clickContinuetoServices()

        let servicePage = browser.page.ServicesPage()
        servicePage
            .assertPageLoaded()
            .signOut()
            .pause(30000)
    }
}