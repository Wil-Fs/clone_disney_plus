document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const heroHight = heroSection.clientHeight;
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');    

    window.addEventListener('scroll', function(){
        const scrollPosition = window.scrollY;
        
        if(scrollPosition < heroHight) {
            addClassHidden();
        } else {
            removeClassHidden();
        }
    })

    //Section of atractions, and tabs;
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const tabTarget = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButtons();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }


    //Section FAQ and accordion;
    for(var i=0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrClose);
    }

});

function addClassHidden() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function removeClassHidden() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrClose(element) {
    const classElement = 'faq__questions__item--is-open';
    const elementFather = element.target.parentNode;

    elementFather.classList.toggle(classElement);
}

function removeActiveButtons() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (var i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}