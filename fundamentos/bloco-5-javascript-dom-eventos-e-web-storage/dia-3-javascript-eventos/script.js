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

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let days = document.querySelector("#days");

  function calendario() {
      for (let index = 0; index < dezDaysList.length; index += 1) {
          let contagem = dezDaysList[index];
          let days2 = document.createElement("li");
          days2.innerText = contagem;
          days.appendChild(days2);
          if (contagem === 24 || contagem === 31) {
            days2.classList= "holiday";
          } else if (contagem === 4 || contagem === 11 || contagem === 18) {
            days2.classList = "friday";
          } else if (contagem === 25) {
            days2.classList = "friday", "holiday";
          }
      }
  }    
  calendario();
  console.log(document.querySelector("body"));


  

  // Escreva seu código abaixo.