let link = prompt ('Введите ссылку');
let newLink = link.substr(0,7);
if (newLink == 'http://'){
     let a = 'true';
     alert (a);
    }
else {
    let a = 'false';
    alert (a);
     }

let link1 = 'index.html';
let newLink1 = link1.substr(5);
if (newLink1 == '.html'){
    let a = 'true';
    alert (a);
     }
 else {
    let a = 'false';
    alert (a);
     }