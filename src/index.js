import DomFactory from './script/dom_factory';

const Typed = require('typed.js');

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/devicon/devicon.min.css';

import './index.scss';

import './files/Vlad Duma CV - 2019.pdf';
import './img/snake.png';
import './img/clock.png';
import './img/avatar.jpg';
import './img/google_analytics.png';
import './img/react-weather-app.png';

const projectsModel = require('./script/project_data');
const skillsModel = require('./script/skills_data');

const projectTemplate = require('./script/project_template');
const skillsTemplate = require('./script/skills_template');

const skillsConfig = {
    rootEl: '#skills-grid',
    wrapperClass: 'stack',
    filterVal: 'level',
    extraFilters: ['all'],
    defaultFilter: 'advanced',
    defSort: 'a-z'
}
const projectsConfig = {
    rootEl: '#project-grid',
    wrapperClass: 'grid',
    filterVal: 'type',
    extraFilters: ['all'],
    defaultFilter: 'all',
    defSort: 'a-z'
}


// (function () {
//     emailjs.init("user_kDwItUNyBePiSnravvA9I");
// })();

$(document).ready(function () {

    const skillstDom = new DomFactory([skillsModel, skillsTemplate, skillsConfig])
    const projectDom = new DomFactory([projectsModel, projectTemplate, projectsConfig])
    
    skillstDom.render();
    projectDom.render();

    new Typed('#typed', {
        strings: ['web developer', 'front-end developer', 'software engineer', 'full-stack developer.'],
        smartBackspace: true, // Default value
        startDelay: 200,
        typeSpeed: 22,
        backDelay: 777
    });

    $('.more-button-container').click(function () {
        var txt = $('.more-skills').is(':visible') ? 'Show more' : 'Show less';

        $('.show-more-skills').text(txt);
        $('.more-skills').slideToggle();

        $('.more-skills').toggleClass('hidden', 'slow');
    })
    
    var progressBars = $('.progress .progress-bar');

    for (var i = 0; i < progressBars.length; i++) {
        $(progressBars[i]).width($(progressBars[i]).data('percent') + '%');
    }
    $('body').on('mouseenter mouseleave', '.skill i', function(){
        $(this).toggleClass('colored', 'slow');
    });

    $('[name="send-button"]').click(function (e) {
        const name = $('[name="name"]').val(),
            email = $('[name="email"]').val(),
            message = $('[name="message"]').val(),
            data = {
                    "replyToEmails": [email],
                    "subject" : `Message from ${name}`,
                    "message" : message
                };
                
        $('.form-required-message').hide();
        $('.form-error-message').hide();
            
        if (name && email && message) {
            fetch('https://j9oargvlkl.execute-api.us-east-1.amazonaws.com/prod', {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
    
                if(res && res.statusCode === 204) {
                    $('.form-success-message').show();
                    $('form').hide();
                } else {
                    formError(res.errorMessage);
                }
            }).catch(err => {
                formError(res.errorMessage);
            })
        } else {
            e.preventDefault();
            $('.form-required-message').show();
        }
    });

    $('a').on('click', function (event) {
        if (this.hash !== "" && this.hash.includes('#')) {
            event.preventDefault();

            var hash = this.hash;
            scrollTo(hash);
        }
    });
});
function formError(error) {
    $('.form-error-message').show();
    console.log('FAILED...', error);
}
function scrollTo(el) {
    if ($(el).length) {
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 800, function () {
            window.location.hash = el;
        });
    }
}

