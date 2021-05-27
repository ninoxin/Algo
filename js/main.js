/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("benefit__item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    // пропадает при нажатии на Esc
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            modal.removeClass('modal--visible');
        }
    });
    // Скрывает модальное окно при нажатии вне него
    $(document).click(function (event) {
        if ($(event.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });
})
// валидация форма
var modal = $('.modal');
$('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
        // строчное правило
        userName: {
            required: true,
            minlength: 3,
            maxlength: 15
        },
        userPhone: "required",
        // правило-объект (блок)
        userEmail: {
            required: true,
            email: true
        }
    }, 
    // сообщения
    messages: {
        userName: {
            required: "Заполните поле",
            minlength: "Имя не короче 3 букв",
            maxlength: "Имя не больше 15 букв"
        },
        userPhone: "Заполните поле",
        userEmail: {
            required: "Введите корректный email",
            email: "Введите в формате: name@domain.com"
        }
    }
})
$('.bid__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
        // строчное правило
        userName: {
            required: true,
            minlength: 3,
            maxlength: 15
        },
        userPhone: "required",
        // правило-объект (блок)
        userEmail: {
            required: true,
            email: true
        }
    }, 
    // сообщения
    messages: {
        userName: {
            required: "Заполните поле",
            minlength: "Имя не короче 3 букв",
            maxlength: "Имя не больше 15 букв"
        },
        userPhone: "Заполните поле",
        userEmail: {
            required: "Введите корректный email",
            email: "Введите в формате: name@domain.com"
        }
    }
})
$('.quetion__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
        // строчное правило
        userName: {
            required: true,
            minlength: 3,
            maxlength: 15
        },
        userPhone: "required",
        // правило-объект (блок)
        userEmail: {
            required: true,
            email: true
        }
    }, 
    // сообщения
    messages: {
        userName: {
            required: "Заполните поле",
            minlength: "Имя не короче 3 букв",
            maxlength: "Имя не больше 15 букв"
        },
        userPhone: "Заполните поле",
        userEmail: {
            required: "Введите корректный email",
            email: "Введите в формате: name@domain.com"
        }
    }
})

// Настройка модального окна калькулятора
var modalCalc = $('.modal__calc'), 
        modalBtnCalc = $('[data-toggle=modalCalc]'),
        closeBtnCalc = $('.modal__calc__close'),
        switchModal = () => {
        modalCalc.toggleClass('modal__calc--visible');
        } ;
    modalBtnCalc.on('click', switchModal );
    closeBtnCalc.on('click', switchModal);
    
    // пропадает (и почему то появляется) при нажатии на Esc
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
        modalCalc.removeClass('modal__calc--visible');
        }
    });
    // Скрывает модально окно при нажатии вне него
    $(document).click(function (event) {
        if ($(event.target).is('.modal__calc')) {
        modalCalc.toggleClass('modal__calc--visible');
        }
});
function plus(){
var num1, num2, num3, num4, result;
num1 = document.getElementById('n1').value;
num1 = parseInt(num1);
num2 = document.getElementById('n2').value;
num2 = parseInt(num2);
num3 = document.getElementById('n3').value;
num3 = parseInt(num3);
num4 = document.getElementById('n4').value;
num4 = parseInt(num4);
result = num1 * 123 + num2 * 321 + num3 * 1000 + num4 * 1500 + ' Рублей';
document.getElementById('out').innerHTML = result;
}

$(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.scroll_top').show();
        } else {
            $('.scroll_top').hide();
        }
    });

    $('.scroll_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
});


new Swiper('.reviews__container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1000,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        stopOnLast: true
    }
});