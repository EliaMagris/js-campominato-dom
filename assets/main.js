function startGame() {
  const Number = document.getElementById('gameMod').value;

  const griglia = document.getElementById('griglia');

  griglia.innerHTML = '';

  function GridElement() {
    let item = document.createElement('div');

    if (Number == 100) {
      item.classList.add('quadrati', 'quadratobase');
    } else if (Number == 81) {
      item.classList.add('quadrati2', 'quadratobase');
    } else {
      item.classList.add('quadrati3', 'quadratobase');
    }

    return item;
  }

  let arrayRandom = [];

  arrayRandom.innerHTML = '';

  for (let x = 1; x <= 16; x++) {
    let randomNumber = Math.floor(Math.random(1) * Number);

    if (arrayRandom.includes(randomNumber) == true) {
      x = x - 1;
    } else if (randomNumber > Number == false) {
      arrayRandom.push(randomNumber);
    }
  }

  console.log(arrayRandom);

  for (let i = 0; i < Number; i++) {
    let quadrato = GridElement();

    quadrato.addEventListener('click', function () {
      console.log(this);
      this.classList.toggle('active');
    });

    quadrato.innerText = i + 1;
    console.log(quadrato);

    griglia.append(quadrato);
  }
}