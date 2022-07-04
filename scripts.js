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

// 4- includes
const numbers = [[1, 2, 3, 4, 5]];
const hasFour = numbers.includes(4);
toCreateInHtml('Includes', numbers);
toCreateInHtml('Includes', ['const hasFour = numbers.includes(4);']);
toCreateInHtml('Includes', hasFour);

// 5- map
data.map(user => (user.newsletter = false));
toCreateInHtml('Map', data);

// 6- filter
const drivers = data.filter(user => user.driverLicense);
toCreateInHtml('Filter', drivers);

// 7- reduce
const sallariesSum = data.reduce((totalSallary, user) => (totalSallary += user.sallary), 0);
toCreateInHtml('Reduce', sallariesSum);

// 8- forEach
const results = [];
const showUserNames = users => {
  users.forEach(user => {
    results.push(`Olá ${user.name}`);
  });
};
showUserNames(data);
toCreateInHtml('ForEach', results);

// 9- some
let someOneWithNewsletter = data => data.some(user => user.newsletter);
toCreateInHtml('Some', someOneWithNewsletter(data));
data[0].newsletter = true;
toCreateInHtml('Some', ['data[0].newsletter = true']);
toCreateInHtml('Some', someOneWithNewsletter(data));

// 10- every
const everyUserHasName = data.every(user => user.name);
toCreateInHtml('Every', ['data.every(user => user.name)']);
toCreateInHtml('Every', everyUserHasName);
const everyUserHasGoodSallary = data.every(user => user.sallary > 2000);
toCreateInHtml('Every', ['data.every(user => user.sallary > 2000)']);
toCreateInHtml('Every', everyUserHasGoodSallary);
