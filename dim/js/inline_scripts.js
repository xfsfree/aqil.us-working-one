if (!window.BX) window.BX = {};
        if (!window.BX.message) window.BX.message = function (mess) {
            if (typeof mess == 'object') for (var i in mess) BX.message[i] = mess[i];
            return true;
        };

(window.BX || top.BX).message({
            'JS_CORE_LOADING': 'Loading...',
            'JS_CORE_WINDOW_CLOSE': 'Close',
            'JS_CORE_WINDOW_EXPAND': 'Expand',
            'JS_CORE_WINDOW_NARROW': 'Restore',
            'JS_CORE_WINDOW_SAVE': 'Save',
            'JS_CORE_WINDOW_CANCEL': 'Cancel',
            'JS_CORE_H': 'h',
            'JS_CORE_M': 'm',
            'JS_CORE_S': 's',
            'JS_CORE_NO_DATA': '- No data -',
            'JSADM_AI_HIDE_EXTRA': 'Hide extra items',
            'JSADM_AI_ALL_NOTIF': 'All notifications',
            'JSADM_AUTH_REQ': 'Authentication is required!',
            'JS_CORE_WINDOW_AUTH': 'Log In',
            'JS_CORE_IMAGE_FULL': 'Full size',
            'JS_CORE_WINDOW_CONTINUE': 'Continue'
        });

(window.BX || top.BX).message({
            'LANGUAGE_ID': 'az',
            'FORMAT_DATE': 'DD.MM.YYYY',
            'FORMAT_DATETIME': 'DD.MM.YYYY HH:MI:SS',
            'COOKIE_PREFIX': 'BITRIX_SM',
            'SERVER_TZ_OFFSET': '14400',
            'SITE_ID': 's1',
            'SITE_DIR': '/',
            'USER_ID': '',
            'SERVER_TIME': '1711197682',
            'USER_TZ_OFFSET': '0',
            'USER_TZ_AUTO': 'Y',
            'bitrix_sessid': '79ec94ec924689498f6b683b69bddbfa'
        });

BX.setJSList(['/bitrix/js/main/core/core.js', 'bitrix/js/main/core/core_promise.js', 'bitrix/js/main/core/core_ajax.js', 'bitrix/js/main/core/core_fx.js', 'bitrix/js/main/core/core_popup.js', 'bitrix/js/main/json/json2.min.js', 'bitrix/js/main/core/core_ls.js', 'bitrix/js/main/session.js', 'bitrix/js/main/core/core_window.js', 'bitrix/js/main/date/main.date.js', 'bitrix/js/main/core/core_date.js', 'bitrix/js/main/utils.js', 'bitrix/js/main/polyfill/promise/js/promise.js', 'bitrix/templates/DIM/js/jquery.actual.min.js', 'bitrix/templates/DIM/js/jquery.fancybox.js', 'bitrix/templates/DIM/vendor/jquery.easing.js', 'bitrix/templates/DIM/vendor/jquery.appear.js', 'bitrix/templates/DIM/vendor/jquery.cookie.js', 'bitrix/templates/DIM/vendor/bootstrap.js', 'bitrix/templates/DIM/vendor/flexslider/jquery.flexslider.min.js', 'bitrix/templates/DIM/vendor/jquery.validate.min.js', 'bitrix/templates/DIM/js/jquery.uniform.min.js', 'bitrix/templates/DIM/js/jqModal.js', 'bitrix/templates/DIM/js/detectmobilebrowser.js', 'bitrix/templates/DIM/js/matchMedia.js', 'bitrix/templates/DIM/js/jquery.wasypoints.min.js', 'bitrix/templates/DIM/js/jquery.counterup.js', 'bitrix/templates/DIM/js/jquery.alphanumeric.js', 'bitrix/templates/DIM/js/jquery.mobile.custom.touch.min.js', 'bitrix/templates/DIM/js/general.js', 'bitrix/templates/DIM/js/custom.js', 'bitrix/templates/DIM/components/bitrix/news.list/front-catalog-slider/script.js', 'bitrix/templates/DIM/components/bitrix/news.list/news-blog3/script.js', 'bitrix/components/bitrix/search.title/script.js', 'bitrix/templates/DIM/components/bitrix/search.title/fixed/script.js', '/bitrix/templates/DIM/js/jquery.inputmask.bundle.min.js']); 

BX.setCSSList(['/bitrix/js/main/core/css/core.css', 'bitrix/js/main/core/css/core_popup.css', 'bitrix/js/main/core/css/core_date.css', 'bitrix/templates/DIM/css/bootstrap.css', 'bitrix/templates/DIM/css/fonts/font-awesome/css/font-awesome.min.css', 'bitrix/templates/DIM/vendor/flexslider/flexslider.css', 'bitrix/templates/DIM/css/jquery.fancybox.css', 'bitrix/templates/DIM/css/theme-elements.css', 'bitrix/templates/DIM/css/theme-responsive.css', 'bitrix/templates/DIM/css/print.css', 'bitrix/templates/DIM/css/animation/animation_ext.css', 'bitrix/templates/.default/ajax/ajax.html', 'bitrix/templates/DIM/styles.css', 'bitrix/templates/DIM/template_styles.css', 'bitrix/templates/DIM/css/responsive.css', 'bitrix/templates/DIM/themes/9/colors.css', 'bitrix/templates/DIM/css/width-3.css', 'bitrix/templates/DIM/css/font-1.css', '/bitrix/templates/DIM/css/custom.css']); 




    var arBasketItems = {};
    var arDigitalOptions = ({
        'SITE_DIR': '/',
        'SITE_ID': 's1',
        'SITE_TEMPLATE_PATH': '/bitrix/templates/DIM',
        'THEME': ({
            'THEME_SWITCHER': 'N',
            'BASE_COLOR': '9',
            'BASE_COLOR_CUSTOM': '',
            'TOP_MENU': '',
            'TOP_MENU_FIXED': 'Y',
            'COLORED_LOGO': 'N',
            'SIDE_MENU': 'LEFT',
            'SCROLLTOTOP_TYPE': 'RECT_GREY',
            'SCROLLTOTOP_POSITION': 'PADDING',
            'CAPTCHA_FORM_TYPE': 'HIDE',
            'PHONE_MASK': '',
            'VALIDATE_PHONE_MASK': '',
            'DATE_MASK': 'd.m.y',
            'DATE_PLACEHOLDER': 'дд.мм.гггг',
            'VALIDATE_DATE_MASK': '^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$',
            'DATETIME_MASK': 'd.m.y h:s',
            'DATETIME_PLACEHOLDER': 'дд.мм.гггг чч:мм',
            'VALIDATE_DATETIME_MASK': '^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4} [0-9]{1,2}\:[0-9]{1,2}$',
            'VALIDATE_FILE_EXT': 'png|jpg|jpeg|gif|doc|docx|xls|xlsx|txt|pdf|odt|rtf',
            'SOCIAL_VK': 'https://www.linkedin.com/company/stateexamcenter',
            'SOCIAL_FACEBOOK': 'http://www.facebook.com/stateexamcenter',
            'SOCIAL_TWITTER': 'http://twitter.com/stateexamcenter',
            'SOCIAL_YOUTUBE': 'http://youtube.com/stateexamcenter',
            'SOCIAL_ODNOKLASSNIKI': '',
            'SOCIAL_GOOGLEPLUS': '',
            'BANNER_WIDTH': 'NARROW',
            'TEASERS_INDEX': '',
            'CATALOG_INDEX': '',
            'PORTFOLIO_INDEX': '',
            'INSTAGRAMM_INDEX': 'Y',
            'BIGBANNER_ANIMATIONTYPE': 'SLIDE_HORIZONTAL',
            'BIGBANNER_SLIDESSHOWSPEED': '5000',
            'BIGBANNER_ANIMATIONSPEED': '600',
            'PARTNERSBANNER_SLIDESSHOWSPEED': '5000',
            'PARTNERSBANNER_ANIMATIONSPEED': '600',
            'ORDER_VIEW': 'N',
            'ORDER_BASKET_VIEW': 'FLY',
            'URL_BASKET_SECTION': '/cart/',
            'URL_ORDER_SECTION': '/cart/order/',
            'PAGE_WIDTH': '3',
            'PAGE_CONTACTS': '4',
            'HEADER_TYPE': '2',
            'HEADER_TOP_LINE': '',
            'HEADER_FIXED': '2',
            'HEADER_MOBILE': '1',
            'HEADER_MOBILE_MENU': '1',
            'HEADER_MOBILE_MENU_SHOW_TYPE': '',
            'TYPE_SEARCH': 'fixed',
            'PAGE_TITLE': '2',
            'INDEX_TYPE': 'index1',
            'FOOTER_TYPE': '2',
            'FOOTER_TYPE': '2',
            'PRINT_BUTTON': 'Y',
            'SHOW_SMARTFILTER': 'N',
            'FILTER_VIEW': 'VERTICAL',
            'YA_GOLAS': 'N',
            'YA_COUNTER_ID': '',
            'USE_FORMS_GOALS': 'COMMON',
            'USE_SALE_GOALS': 'Y',
            'USE_DEBUG_GOALS': 'N',
            'IS_BASKET_PAGE': '',
            'IS_ORDER_PAGE': '',
        })
    });



    var arBasketItems = [];



    var jsControl = new JCTitleSearch2({
        //'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
        'AJAX_PAGE': '/',
        'CONTAINER_ID': 'title-search',
        'INPUT_ID': 'title-search-input',
        'MIN_QUERY_LEN': 2
    });



    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-L8C60T0WEG');



        
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });



        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            // autoplay:true,
            // autoplayTimeout:2500,
            // autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
        const tabs = document.querySelectorAll(".tab-container button");
        const panels = document.getElementsByClassName("panel");
        tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));

        function handleTabClick(e) {
            const targetKey = e.target.getAttribute("key");
            for (const panel of panels) {
                const key = panel.getAttribute("key");
                if (key === targetKey) {
                    panel.classList.remove("hidden");
                } else {
                    panel.classList.add("hidden");
                }
            }
        }

        let count = 1;

        $('.more-btn').on('click', function () {
            if (count == 1) {
                $('.second-cat').removeClass('d-none');
                count = 2;
            } else if (count == 2) {
                $('.third-cat').removeClass('d-none');
                count = 3;
            } else {
                $('.last-cat').removeClass('d-none');
            }
        })
    