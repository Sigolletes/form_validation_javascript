const $email = document.querySelector('#email');
const $country = document.querySelector('#country');
const $zip = document.querySelector('#zip');
const $password = document.querySelector('#password');
const $confirmation = document.querySelector('#confirmation');
const $submit = document.querySelector('#submit');
const $alert = document.querySelector('#alert');

$email.addEventListener('focusout', () => {

  if (!$email.checkValidity()) {
    $email.classList.add('errorInput');
  }

})
