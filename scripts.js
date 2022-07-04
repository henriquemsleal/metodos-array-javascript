// array de dados
const data = [
  { name: 'Matheus', age: 31, sallary: 2000, driverLicense: true },
  { name: 'João', age: 18, sallary: 1500, driverLicense: false },
  { name: 'Mariana', age: 22, sallary: 4000, driverLicense: true },
  { name: 'Pedro', age: 50, sallary: 7200, driverLicense: true },
  { name: 'Erica', age: 16, sallary: 0, driverLicense: false },
];

const divMetodos = document.getElementById('metodos');
const idsDivsMetodos = [];

function toCreateDiv(id, classe, divPai) {
  const id1 = id.toLowerCase();
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', id1);
  newDiv.classList.add(classe);
  idsDivsMetodos.push(id1);
  divPai.appendChild(newDiv);
  newDiv.innerHTML = `<h3>${id}:</h3>`;
}

function toCreateP(div, array) {
  function crP(obj) {
    obj.forEach(item => {
      const newP = document.createElement('p');
      div.appendChild(newP);
      newP.innerText = JSON.stringify(item);
    });
  }
  if (!Array.isArray(array)) {
    objToArray = [array];
    crP(objToArray);
  } else {
    objToArray = array;
    crP(objToArray);
  }
}

function toCreateInHtml(nomeMetodo, array) {
  const metodo = nomeMetodo.toLowerCase();
  if (metodo !== idsDivsMetodos[idsDivsMetodos.length - 1]) {
    toCreateDiv(nomeMetodo, 'metodos', divMetodos);
  }
  const div = document.getElementById(metodo);
  toCreateP(div, array);
}

// 0- Dados na tela
toCreateInHtml('Dados', data);

// 1- reverse
data.reverse();
toCreateInHtml('Reverse', data);

// 2- find
const highSallary = 5000;
const highestSallary = data.find(pessoa => pessoa.sallary > highSallary);
toCreateInHtml('Find', highestSallary);

// 3- findIndex
const lowestSallary = data.findIndex(pessoa => pessoa.sallary > 0 && pessoa.sallary < 2000);
toCreateInHtml('FindIndex', lowestSallary);

data[lowestSallary].sallary += 200;
toCreateInHtml('FindIndex', data);
