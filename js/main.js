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
            $('#navbar').animate({'width': '100%'}, 400, swing = 'swing', function () {})
            $('.content-wrapper').removeClass('showing')
            window.location.hash = '';
            parent.location.hash = ''
        } else {
            currentWidth = $('.panel-cover').width()
            if (currentWidth < 960) {
                $('.panel-cover').addClass('panel-cover--collapsed')
                $('.content-wrapper').addClass('animated slideInRight')
            } else {
                $('.panel-cover').css('max-width', currentWidth)
                $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
                $('#navbar').animate({'width': $('#projects-toggle').width()}, 400, swing = 'swing', function () {})
            }
            $('.content-wrapper').addClass('showing');
        }
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

    const powerUps = [56,56,50,50,52,54,52,54,98,97];
    var powerUpProgression = [...powerUps];
    $(document).keypress(function(event){
        if (powerUpProgression.length > 0) {
            if (powerUpProgression[0] == event.which) {
                powerUpProgression.splice(0,1)
                if (powerUpProgression.length == 0) {
                    document.getElementById('profile-image').src = "{{ site.baseurl }}/images/profile_pixelated.jpg";
                    document.getElementById('background-image').style.backgroundImage = "url({{ site.baseurl }}/images/cover_pixelated.jpg)"
                }
            } else {
                powerUpProgression = [...powerUps];
            }
        }         
    })
})