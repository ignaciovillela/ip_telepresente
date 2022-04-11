(function() {
    const form = document.querySelector('#form');
    const submitButton = document.querySelector('#enviar');
    const email = document.querySelector('#email');
    const success = document.querySelector('#success');
    const formDiv = document.querySelector('#form-div');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitButton.classList.add('disabled');
        submitButton.setAttribute('disabled', 'disabled');
        setTimeout(() => {
            success.classList.remove('d-none');
            const user = email.value.split('@')[0].replace('.', ' ');
            success.innerHTML += `<strong>${user}</strong>`;
            formDiv.classList.add('d-none');
        }, 1000);
    });
})();
