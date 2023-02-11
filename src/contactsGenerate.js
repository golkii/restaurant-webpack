function contactsGenerate() {
  let header = document.createElement('h1');
  header.textContent = 'Contacts';

  let director = card('John Green', 'Director', '+7 (912) 433-43-23', 'green@email.com');
  let manager = card('Walter White', 'Manager', '+7 (356) 236-00-35', 'white@email.com');

  director.classList.add('block');
  manager.classList.add('block');

  let content = document.getElementById('content');
  content.append(header, director, manager);
}

function card(name, place, phoneNumber, email) {
  let nameDiv = document.createElement('h3');
  let placeDiv = document.createElement('p');
  let phoneNumberDiv = document.createElement('p');
  let emailDiv = document.createElement('p');

  nameDiv.textContent = name;
  placeDiv.textContent = place;
  phoneNumberDiv.textContent = phoneNumber;
  emailDiv.textContent = email;

  let block = document.createElement('div');
  block.append(nameDiv, placeDiv, phoneNumberDiv, emailDiv);

  return block;
}

export { contactsGenerate };