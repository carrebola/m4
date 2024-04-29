
// Con fetch cargamos los datos del archivo xml
fetch("bd.xml")
  .then(response => response.text())
  .then(data => { //En la variable data tenemos el contenido del archivo xml
    
    const parser = new DOMParser(); 
    const xml = parser.parseFromString(data, "application/xml");
    // En xml tenemos un elemento del documento (DOM) con los nodos xml para poder acceder a ellos desde javascript    
    console.log(xml);
    // Seleccionamos todos los nodos con nombre <usuario></usuario>
    const usuarios = xml.querySelectorAll('usuario') // Creamos un array con todos los elementos 'usuario
    const usuario0 = usuarios[0] // Accedemos al primer elemento del array de usuarios

    // Para acceder al texto del hijo <nonbre></nonbre> del primer nodo usuario
        const texto = usuario0.querySelector('nombre').textContent
        console.log(texto);
    // Para acceder al atributo del segundo nodo
    console.log(usuarios[1].getAttribute('dni'));

    // Vamos a crear una variable donde guardaremos el texto correspondiente al encabezado de una tabla
    let tablaHtml = `
      <table>
        <thead>
          <tr><th>Nombre</th><th>Apellidos</th><th>DNI</th></tr>
        </thead>
    `

    // Creamos una variable con el cuerpo de la tabla y usamos un for para recorrer el array de datos y generar los tr del cuerpo
    let tbody = '<tbody>'
    for(let i=0;i<usuarios.length;i++){
      tbody = tbody + `
      <tr>
        <td class="border">${usuarios[i].querySelector('nombre').textContent}</td>
        <td class="border">${usuarios[i].querySelector('apellido').textContent}</td>
        <td class="border">${usuarios[i].getAttribute('dni')}</td>
      </tr>`
    }
    tbody = tbody + '</tbody>'
    // completamos la tabla
    tablaHtml = tablaHtml + tbody + '</table>'
    console.log(tablaHtml)

    // Inyectamos la tabla en el documento
    document.querySelector('#tablaDatos').innerHTML = tablaHtml
  })
  .catch(console.error);

