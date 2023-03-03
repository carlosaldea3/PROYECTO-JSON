const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = './ticket.json';

const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const ticket = request.response;
  populateHeader(ticket);
  showContent(ticket);
}

function populateHeader(jsonObj) {
  //Datos Ticket



  const div = document.createElement('div');
  div.classList.add('cacatua');

  const myH1 = document.createElement('div');
  myH1.textContent = 'ID: ' + jsonObj.ticket.transaccion['ID_trans'];
  div.appendChild(myH1);
  myH1.classList.add('encabezado');


  const myH11 = document.createElement('div');
  myH11.textContent = ' Fecha: ' + jsonObj.ticket.transaccion['fecha'];
  div.appendChild(myH11);
  myH11.classList.add('encabezado');
  header.appendChild(div);

  //Separador
  const asterisco = document.createElement('h4');
  asterisco.textContent = '**************************************************';
  header.appendChild(asterisco);

  //Datos Usuario
  const myH2 = document.createElement('h2');
  myH2.textContent = 'ID: ' + jsonObj.ticket.usuario['ID'] + ' Nombre: ' + jsonObj.ticket.usuario['nombre'] + ' Email: ' + jsonObj.ticket.usuario['email'] + ' Teléfono: ' + jsonObj.ticket.usuario['telefono'];
  header.appendChild(myH2);

  //Detalles del libro
  const myH4 = document.createElement('h4');
  myH4.textContent = 'ISBN: ' + jsonObj.ticket.libro['ISBN'] + ' Titulo: ' + jsonObj.ticket.libro['titulo'] + ' Editorial: ' + jsonObj.ticket.libro['editorial'] + ' Tipo: ' + jsonObj.ticket.libro['tipo'];
  header.appendChild(myH4);

  //Separador
  const asterisco2 = document.createElement('h4');
  asterisco2.textContent = '**************************************************';
  header.appendChild(asterisco2);

  //Dirección usuario
  const myH3 = document.createElement('h3');
  myH3.textContent = 'Dirección: ' + jsonObj.ticket.usuario['domicilio'];
  header.appendChild(myH3);

}

request.responseType = 'json';

request.open('GET', requestURL);
request.responseType = 'text'; // recibimos una cadena de tipo "string"
request.send();

request.onload = function() {
  const ticketText = request.response; // cogemos la cadena de response
  const ticket = JSON.parse(ticketText); // la convertimos a objeto
  populateHeader(ticket);
  showContent(ticket);
}
