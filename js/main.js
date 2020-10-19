var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];

var userSurname = prompt('Qual\'è il tuo cognome?');

while (userSurname.length == 0) {
    userSurname = prompt('Non hai inserito alcun cognome, inseriscilo per continuare')
}

surnameList.push(userSurname);

surnameList.sort();


var surnames = '';

for (var i = 0; i < surnameList.length; i++) {
    surnames += '<li>' + surnameList[i] + '</li>';
}

document.getElementById('surnames').innerHTML = surnames;
