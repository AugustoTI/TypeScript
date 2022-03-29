// Encadeamento Opcional
type Documento = {
  title: string;
  text: string;
  data?: Date;
};

const documento: Documento = {
  title: 'Titulo qualquer',
  text: 'O texto',
};

console.log(documento.data?.toDateString());

// Operador de coalescencia nula
const result = undefined ?? 'Teste';
console.log(result);
