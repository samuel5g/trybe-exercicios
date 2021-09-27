const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNightShift = (modifiedObject, key, value) => {
  modifiedObject[key] = value;
}

addNightShift(lesson2, 'turno', 'noite');

// console.log(lesson2);

const listObjectKeys = (object) => {
  return Object.keys(object);
}

// console.log(listObjectKeys(lesson2));

const listObjectValues = (object) => {
  return Object.values(object);
}

// console.log(listObjectValues(lesson2));

const showObjectLength = (object) => {
  return Object.entries(object).length;
}

// console.log(showObjectLength(lesson1));