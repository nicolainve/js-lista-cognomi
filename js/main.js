var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];

var userSurname = prompt('Qual\'è il tuo cognome?');

while (userSurname.length == 0) {
    userSurname = prompt('Non hai inserito alcun cognome, inseriscilo per continuare')
}

surnameList.push(userSurname);

console.log(surnameList.sort());

console.log(surnameList.indexOf(userSurname) + 1);