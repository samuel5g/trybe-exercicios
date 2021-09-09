function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDays = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const liDay = document.createElement('li')
    liDay.classList.add('day'); //Adiciona a classe day. classList é somente leitura, por isso precisa do método
    switch (days) { //switch para adicionar classe holiday nos dias 24, 25 e 31 e a classe friday nos dias 4, 11, 18 e 25
      case 4:
        liDay.classList.add('friday');
        break;
      
      case 11:
        liDay.classList.add('friday');
        break;

      case 18:
        liDay.classList.add('friday');
        break;

      case 24:
        liDay.classList.add('holiday');
        break;
    
      case 25:
        liDay.classList.add('holiday');
        liDay.classList.add('friday');

      case 31:
        liDay.classList.add('holiday');
        break;

      default:
        break;
    }
    liDay.innerHTML = days; //Muda o html para um dia que está no vetor
    
    ulDays.appendChild(liDay); //Coloca o dia dentro da ul com id #days
  }
}

createDays();