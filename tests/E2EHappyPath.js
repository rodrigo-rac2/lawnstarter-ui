

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
        singleSignUpPage
            .assertPageLoaded()
            .clickGetQuote()

        let signUpPage = browser.page.SignUpPage()
        signUpPage
            .assertPageLoaded()
            .clickDatePicker()
            .pause(5000)
    }
}