function unionObjects<O, O2>(obj: O, obj2: O2): O & O2 {
  return { ...obj, ...obj2 };
}

const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };
const newObject = unionObjects(obj1, obj2);
