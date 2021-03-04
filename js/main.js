---
  layout: null
sitemap:
exclude: 'yes'
---

$(document).ready(function () {
    function togglePanel(buttonID, panelID) {
        $(buttonID).toggleClass('panel-button-pressed')
        if ($('.content-wrapper').hasClass('showing')){
            $('.content-wrapper').removeClass('animated slideInRight')
            $('.panel-cover').removeClass('panel-cover--collapsed')
            $('.panel-cover').css('max-width', '100%')
            $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
            $('.content-wrapper').removeClass('showing')
            window.location.hash = '';
            parent.location.hash = ''
            return;
        }
        currentWidth = $('.panel-cover').width()
        if (currentWidth < 960) {
            $('.panel-cover').addClass('panel-cover--collapsed')
            $('.content-wrapper').addClass('animated slideInRight')
        } else {
            $('.panel-cover').css('max-width', currentWidth)
            $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
        }
        $('.content-wrapper').addClass('showing');
    }

    // document.getElementById('projects-panel').style.display = 'none'
    $('#projects-button').click(function(e) {
        togglePanel('#projects-button', '#projects-panel')
    })

    $('#btn-mobile-menu').click(function () {
        $('.navigation-wrapper').toggleClass('visible')
        $('#btn-mobile-menu').toggleClass('hidden')
        $('#btn-mobile-close').toggleClass('hidden')
    })

    $('#btn-mobile-close').click(function () {
        $('.navigation-wrapper').toggleClass('visible')
        $('#btn-mobile-close').toggleClass('hidden')
        $('#btn-mobile-menu').toggleClass('hidden')
    })


    // $('.navigation-wrapper .projects-button').click(function () {
    //     $('.navigation-wrapper').toggleClass('visible animated fadeOut')
    //     $('.btn-mobile-menu').toggleClass('icon-list icon-x-circle animated fadeIn')
    // })

    // $('a.panel-button').click(function (e) {
    //     //if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    //     var url = window.location.href;
    //     var lastPart = url.substr(url.lastIndexOf('/') + 1);
    //
    //     if (lastPart == "#projects") {
    //         document.getElementById("projects").classList.add('panel-button-pressed')
    //     } else {
    //         document.getElementById("projects").classList.re('panel-button-pressed')
    //     }
    //     $('a.panel-button').toggleClass('panel-button-pressed')
    //     if ($('.content-wrapper').hasClass('showing')){
    //         $('.content-wrapper').removeClass('animated slideInRight')
    //         $('.panel-cover').removeClass('panel-cover--collapsed')
    //         $('.panel-cover').css('max-width', '100%')
    //         $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
    //         $('.content-wrapper').removeClass('showing')
    //         window.location.hash = '';
    //         parent.location.hash = ''
    //         return;
    //     }
    //     currentWidth = $('.panel-cover').width()
    //     if (currentWidth < 960) {
    //         $('.panel-cover').addClass('panel-cover--collapsed')
    //         $('.content-wrapper').addClass('animated slideInRight')
    //     } else {
    //         $('.panel-cover').css('max-width', currentWidth)
    //         $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    //     }
    //     $('.content-wrapper').addClass('showing');
    // })
    //
    // if (window.location.hash && window.location.hash == '#projects') {
    //     $('.panel-cover').addClass('panel-cover--collapsed')
    // }
    //
    // if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    //     $('.panel-cover').addClass('panel-cover--collapsed')
    // }
    //
    // $('.btn-mobile-menu').click(function () {
    //     $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    //     $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    // })
    //
    // $('.navigation-wrapper .projects-button').click(function () {
    //     $('.navigation-wrapper').toggleClass('visible')
    //     $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    // })
})