// Utilize o tipo `any` apenas em último caso
function showMessage(msg: any) {
  return msg;
}

const message = showMessage('teste');
const arrayQualquer = showMessage([1, 2, 4]);
const verdadeiro = showMessage(true);

console.log(message, arrayQualquer, verdadeiro);
