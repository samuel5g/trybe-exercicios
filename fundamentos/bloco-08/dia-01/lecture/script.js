const wakingUp = () => {
  return 'Acordando!!'
}

const breakfast = () => {
  return 'Bora tomar café!!'
}

const goingSleep = () => {
  return 'Partiu dormir!!'
}

const doingThings = (callback) => {
  console.log(callback());
}

doingThings(goingSleep);

