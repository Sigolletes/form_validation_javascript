const $email = document.querySelector('#email');
const $country = document.querySelector('#country');
const $zip = document.querySelector('#zip');
const $password = document.querySelector('#password');
const $confirmation = document.querySelector('#confirmation');
const $submit = document.querySelector('#submit');
const $alert = document.querySelector('#alert');

const hover = () => {
  new Audio('./sounds/hover.mp3').play();
}

$email.onclick = () => hover();
$country.onclick = () => hover();
$zip.onclick = () => hover();
$password.onclick = () => hover();
$confirmation.onclick = () => hover();

$email.addEventListener('focusout', () => {
  if (!$email.checkValidity()) {
    $email.classList.add('errorInput');
  } else {
    $email.classList.add('correctInput');
  }
})

$country.addEventListener('focusout', () => {
  if (!$country.checkValidity()) {
    $country.classList.add('errorInput');
  } else {
    $country.classList.add('correctInput');
  }
})

$zip.addEventListener('focusout', () => {
  if (!$zip.checkValidity()) {
    $zip.classList.add('errorInput');
  } else {
    $zip.classList.add('correctInput');
  }
})

$password.addEventListener('focusout', () => {
  if (!$password.checkValidity()) {
    $password.classList.add('errorInput');
  } else {
    $password.classList.add('correctInput');
  }
})

$confirmation.addEventListener('focusout', () => {
  if ($password.value !== $confirmation.value || $confirmation.value === '') {
    $confirmation.classList.add('errorInput');
  } else {
    $confirmation.classList.add('correctInput');
  }
})

$submit.addEventListener('click', (e) => {
  e.preventDefault();
  if ($email.checkValidity() && $country.checkValidity() && $zip.checkValidity() && $password.checkValidity() && $password.value === $confirmation.value) {
    new Audio('./sounds/success.mp3').play();
    $alert.innerText = 'SUCCESS';
    $alert.classList.remove('error');
    $alert.classList.add('success');
    setTimeout(() => {
      $alert.classList.remove('success');
      $alert.innerText = '';
      $email.value = '';
      $country.value = '';
      $zip.value = '';
      $password.value = '';
      $confirmation.value = '';
      $email.classList.remove('correctInput', 'errorInput');
      $country.classList.remove('correctInput', 'errorInput');
      $zip.classList.remove('correctInput', 'errorInput');
      $password.classList.remove('correctInput', 'errorInput');
      $confirmation.classList.remove('correctInput', 'errorInput');
    }, 5000);
  } else if ($email.checkValidity() &&  $country.checkValidity() &&  $zip.checkValidity() &&  $password.checkValidity() && $password.value !== $confirmation.value) {
    new Audio('./sounds/error.mp3').play();
    $alert.innerText = "Password doesn't match";
    $alert.classList.remove('success');
    $alert.classList.add('error');
  } else {
    new Audio('./sounds/error.mp3').play();
    $alert.innerText = "You have to fill in all the gaps";
    $alert.classList.remove('success');
    $alert.classList.add('error');
  }
})
