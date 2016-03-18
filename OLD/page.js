$.getScript("slideout.min.js", function(){});

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 350,
    'tolerance': 70
});

slideout.enableTouch();

$('#page_content').load('page1.html');

// Toggle button
document.querySelector('#toggle-button').addEventListener('click', function() {
    slideout.toggle();
});

var getLink = function() {
        return function(event) {
            /** REMOVE ACTIVE */
            $('li.active').removeClass('active');

            /** SET VARS */
            var target = event ? event.target : window.event.srcElement;
           

            var whichTag = $(target).data('link');
           // alert(whichTag);
            slideout.toggle();

            /** MAKE TARGET ACTIVE */
            $(target).addClass('active');


            //iframe.style.width = document.width();
           // iframe.style.height = "100%";
            //container.innerHTML = iframe;
            //remove the default page content
            $('#default_page').remove();
            //add the clicked page's content
            $('#page_content').load(whichTag);
        }
    };

    $(function() {
        /** BIND LINKS */
        $('li.link').on('click', getLink());

        /** SEARCH BOX **/
        $('input#search').on('keyup', function() {
            var value = new RegExp($(this).val(), 'i');
            $.each($('li.link'), function() {
                var li = $(this);
                var text = li.text() + ' ' + li.data('id');
                if (text.match(value)) {
                    li.show();
                } else {
                    li.hide();
                }
            })
        });

        /** RESIZE CONTAINER ON WINDOW RESIZE*/
        var container = document.getElementById('preview');
        $(window).on('resize', function() {
            //container.style.width = $(window).width() - 350 + 'px';
        });
    });
