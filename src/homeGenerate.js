function homeGenerate() {
  let header = document.createElement('h1');
  let text = document.createElement('p');

  header.textContent = 'Restaurant';
  text.textContent = 'It is very good restaurant with very tasty food';


  let content = document.getElementById('content');
  content.append(header, text);
}

export { homeGenerate };