var actions = {
    clickDone: function () {
        return this
            .waitForElementVisible(`@btnDone`)
            .click('@btnDone')
    }
}

var asserts = {
    verifyIfPageLoads: function () {
        return this
            .waitForElementVisible('@form', 3000, false, result => {
                if(result.value) {
                    return this.clickDone()
                }
            })
    }
}


module.exports = {
    commands: [actions, asserts],
    elements: {
        form: '.column.is-11.nextdoor-modal--info-wrapper',
        btnDone: '.is-size-5.has-text-weight-bold.is-uppercase.has-text-white'
    }
}