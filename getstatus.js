const xhr = new XMLHttpRequest();//new
xhr.open('GET', 'http://ender-bot.onichanet.repl.co/');
xhr.responseType = 'json';
xhr.send();
const response1 = xhr.response;
const response = JSON.parse(response1);
document.open();
document.write(response)
document.close();
