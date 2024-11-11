const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zip + span');
const password1 = document.querySelector('#password1');
const password1Error = document.querySelector('#password1 + span');
const password2 = document.querySelector('#password2');
const password2Error = document.querySelector('#password2 + span');

const constraints = {
  us: [
    '^[0-9]{5}$',
    'US postal codes must have exactly 5 digits: e.g. 85154',
  ],
  uk: [
    '^[0-9]{4}$',
    'UK postal codes must have exactly 4 digits: e.g. 1231',
  ],
  de: [
    '^[0-9]{5}$',
    'German postal codes must have exactly 5 digits: e.g. 68321',
  ],
  au: [
    '^[0-9]{4}$',
    'Australian postal codes must have exactly 4 digits: e.g. 3241',
  ],
};

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
    email.className = 'valid';
  } else {
    showEmailError ();
  }
});

zip.addEventListener('input', () => {
  if (zipIsValid()) {
    zipError.textContent = '';
    zipError.className = 'error';
    zip.className = 'valid';
  } else {
    showZipError ();
  }
});

password1.addEventListener('input', () => {
  if (passwordIsValid()) {
    password1Error.textContent = '';
    password1Error.className = 'error';
    password1.className = 'valid';
  } else {
    showPassword1Error ();  
  }

  if (passwordsMatch()) {
    password2Error.textContent = '';
    password2Error.className = 'error';
  } else {
    showPassword2Error ();
  }
});

password2.addEventListener('input', () => {
  if (passwordsMatch()) {
    password2Error.textContent = '';
    password2Error.className = 'error';
    password2.className = 'valid';
  } else {
    showPassword2Error ();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showEmailError ();
    event.preventDefault();
  } else if (!zipIsValid()) {
    showZipError ();
    event.preventDefault();
  } else if (!passwordIsValid()) {
    showPassword1Error ();
    event.preventDefault();
  } else if (!passwordsMatch()) {
    showPassword2Error();
    event.preventDefault();
  }
});

function showEmailError () {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an email address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an email address.';
  }
  
  emailError.className = 'error active';
  email.className = 'invalid';
}

function zipIsValid () {
  const constraint = new RegExp(constraints[country.value][0], '');

  return constraint.test(zip.value);
}

function showZipError () {
  zipError.textContent = constraints[country.value][1];
  zipError.className = 'error active';
  zip.className = 'invalid';
}

function passwordIsValid () {
  const constraint = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#^()$!%*?&])[A-Za-z\\d@#^()$!%*?&]{8,}$');
  
  return constraint.test(password1.value)
}

function showPassword1Error () {
  password1Error.textContent = 'Password must contain 8 or more characters, including at least one lowercase letter, one uppercase letter, one number, and one special character.';
  password1Error.className = 'error active';
  password1.className = 'invalid';
}

function passwordsMatch () {
  return password1.value === password2.value;
}

function showPassword2Error () {
  password2Error.textContent = 'Passwords do not match';
  password2Error.className = 'error active';
  password2.className = 'invalid';
}