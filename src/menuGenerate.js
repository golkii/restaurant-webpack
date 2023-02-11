function menuGenerate() {
  let header = document.createElement('h1');
  header.textContent = 'Menu';

  let menuPosition1 = document.createElement('div');
  let headPosition1 = document.createElement('h3');
  let pPosition1 = document.createElement('p');
  headPosition1.textContent = 'Pasta';
  pPosition1.textContent = 'spaghetti, egg, bacon';
  menuPosition1.append(headPosition1, pPosition1);

  let menuPosition2 = document.createElement('div');
  let headPosition2 = document.createElement('h3');
  let pPosition2 = document.createElement('p');
  headPosition2.textContent = 'Salad';
  pPosition2.textContent = 'cucumber, tomato';
  menuPosition2.append(headPosition2, pPosition2);

  let menuPosition3 = document.createElement('div');
  let headPosition3 = document.createElement('h3');
  let pPosition3 = document.createElement('p');
  headPosition3.textContent = 'Latte';
  pPosition3.textContent = 'coffe, milk';
  menuPosition3.append(headPosition3, pPosition3);

  menuPosition1.classList.add('block');
  menuPosition2.classList.add('block');
  menuPosition3.classList.add('block');

  let content = document.getElementById('content');
  content.append(header, menuPosition1, menuPosition2, menuPosition3);
}

export { menuGenerate };