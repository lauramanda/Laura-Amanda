// menambahkan teks di salah 1 class
let text = document.getElementsByClassName('type');
let addText = document.createTextNode('extremely ');

text[1].prepend(addText)

// menambahkan element di id
let un = document.getElementById('define');
let unText = document.createElement('un');
unText.textContent = ' means not extreme'

un.appendChild(unText);

