/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';

/* Não Recomendado */
// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.backgroundColor = 'red';
