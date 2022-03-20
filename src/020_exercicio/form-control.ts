import isEmailValid from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = form.querySelector('.username') as HTMLInputElement;
const email = form.querySelector('.email') as HTMLInputElement;
const password = form.querySelector('.password') as HTMLInputElement;
const password2 = form.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(this)) console.log('Formulário Enviado');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Esse campo não foi preenchido');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmailValid(input.value))
    showErrorMessage(input, 'Esse email não é valido');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'As senhas não são iguais');
    showErrorMessage(password2, 'As senhas não são iguais');
  }
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerHTML = msg;
  formFields.classList.add('show-error-message');
}

function hideErrorMessages(form: HTMLFormElement): void {
  const errorMessages = form.querySelectorAll('.' + SHOW_ERROR_MESSAGE);
  errorMessages.forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  const errorMessages = form.querySelectorAll('.' + SHOW_ERROR_MESSAGE);
  errorMessages.forEach(() => (send = false));
  return send;
}
