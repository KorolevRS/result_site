const pass1 = document.querySelector('#password1');
const pass2 = document.querySelector('#password2');
const submitEl = document.querySelector('.btn_signUp');
submitEl.addEventListener('click', () => {
    if ((pass2.value == '') & (pass1.value == '')) {
        alert('введите пароль');
    }
    else if (pass2.value !== pass1.value) {
        pass1.style.border = '0.1rem solid red';
        pass2.style.border = '0.1rem solid red';
    } else {
        pass1.style.border = '0.1rem solid green'
        pass2.style.border = '0.1rem solid green';
    }

});
/**
 * Ловим все элементы с name="rating", потом при клике получаем 
 * оценку в числовом виде и дальше куда угодно ее можно передать
 */

const rating1 = document.querySelectorAll('[name="rating"]');
rating1.forEach(item => {
    item.addEventListener('click', (e) => {
        const ratingValue = e.target.value;
        console.log(e.target.value);
        alert(`Вы оценили наш сайт на ${ratingValue} баллов`);
    })
});

