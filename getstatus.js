const xhr = new XMLHttpRequest();//newする
xhr.open('GET', 'http://ender-bot.onichanet.repl.co/');
xhr.responseType = 'json';
xhr.send();
const response1 = xhr.response;
const response = JSON.parse(response1);
const ping = String(response.ping);
document.open();
document.write(ping)
document.close();