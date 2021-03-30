class questions {
    constructor($questions) {
        this.$questions = $questions;
        this.$question = this.$questions.find('.question');
        this.$popupOverlay = this.$questions.siblings('.popup-overlay');
        this.$popupQuestion = this.$popupOverlay.find('.popup-question');
        this.$popupClose = this.$popupOverlay.find('.popup-close');
        this.$popupContent = this.$popupOverlay.find('.popup-content');
        this.listener();
    }

    listener() {
        const _this = this,
            question = this.$question;

        question.each(function() {
            const currentQuestion = $(this),
                questionText = currentQuestion.text();
            currentQuestion.click(function () {
                _this.popupFunction(questionText);
            })
        })
    }

    popupFunction(questionText) {
        const popupOverlay = this.$popupOverlay,
            popupQuestion = this.$popupQuestion,
            popupClose = this.$popupClose,
            popupContent = this.$popupContent;

        popupOverlay.css('display', 'flex');
        popupQuestion.text(questionText);

        popupClose.click(function () {
            popupOverlay.hide();
        } )
    }
}

export default(() => {
    $('.questions').each(function() {
        new questions($(this));
    })
})
