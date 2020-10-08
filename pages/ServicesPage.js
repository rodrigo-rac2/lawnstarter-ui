var actions = {
    clickUserName: function () {
        return this
            .waitForElementVisible('@menuItemUserName')
            .click('@menuItemUserName')
    },
    signOut: function () {
        return this
            .clickUserName()
            .waitForElementVisible('@menuItemSignOut')
            .click('@menuItemSignOut')
    }
}

var asserts = {
    assertPageLoaded: function () {
        return this
            .waitForElementVisible('@form', 3000)
    }
}


module.exports = {
    commands: [actions, asserts],
    elements: {
        form: '.ls-navbar',
        menuItemUserName: '.user-name',
        menuItemSignOut: '.user-link.sign-out'
    }
}