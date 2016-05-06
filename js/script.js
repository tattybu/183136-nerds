ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.938667, 30.323073],
        controls: ['zoomControl'],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Nerds Design Studio'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker-map.png',
        iconImageSize: [194, 158],
        iconImageOffset: [-40, -155]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});



var link = document.querySelector('.feedback-btn');
var popup = document.querySelector('.write-us');
var close = popup.querySelector('.write-us-close ');
var close_icon = popup.querySelector('.form-close');
var form = popup.querySelector('form');
var login = form.querySelector('#login-field');
var email = form.querySelector('#email-field');
var storage = localStorage.getItem('login');
link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('write-us-show');
    if (storage) {
        login.value = storage;
        // email.focus();
    } else {
        // login.focus();
    }
}, false);

var closeForm = function(event) {
    event.preventDefault();
    popup.classList.remove('write-us-show');
};

close.addEventListener('click', closeForm, false);
close_icon.addEventListener('click', closeForm, false);

form.addEventListener('submit', function(event) {
    if (!login.value || !email.value) {
        event.preventDefault();
        popup.classList.add('login-popup-error');
    } else {
        localStorage.setItem('login', login.value);
    }
}, false);

window.addEventListener('keydown', function(event) {
    if (event.keyCode == 27 && popup.classList.contains('write-us-show')) {
        popup.classList.remove('write-us-show');
    }
}, false);