//валидатор формы модального окна
const validator = new JustValidate('.modal__form', {
    errorLabelCssClass: '.modal__input-error',
    errorLabelStyle: {
        color: '#FFC700',
    },
});

validator.addField('#name',[
        {
            rule: 'required',
            errorMessage: 'Как вас зовут?'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Не менее 3-х символов'
        }
    ]);

validator.addField('#phone',[
        {
            rule: 'required',
            errorMessage: 'Укажите ваш телефон'
        }
    ]);

validator.onSuccess((event) => {
    const form = event.currentTarget

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: form.name.value,
            phone: form.phone.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            form.reset();
            alert(`Спасибо мы с вами свяжемся в ближайшее время: ${data.id}`)
        });
})