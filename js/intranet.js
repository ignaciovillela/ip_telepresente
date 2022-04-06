(function() {
    const form = document.querySelector('#form');
    const email = document.querySelector('#email');
    const success = document.querySelector('#success');
    const formDiv = document.querySelector('#form-div');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        success.classList.remove('d-none');
        const user = email.value.replace('@telepresente.cl', '').replace('.', ' ');
        success.innerHTML += `<strong>${user}</strong>`;
        formDiv.classList.add('d-none');
    });
})();
