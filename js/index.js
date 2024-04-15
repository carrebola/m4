

fetch("bd.xml")
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");
    // En xml tenemos un elemento DOM con los nodos xml para poder acceder a ellos desde javascript    
    console.log(xml);
    // Seleccionamos todos los nodos con nombre <usuario></usuario>
    const usuarios = xml.querySelectorAll('usuario')
    // Accedemos al primer elemento del array de usuarios
    const usuario0 = usuarios[0]
    // Para acceder al texto del hijo <nonbre></nonbre> del primer nodo usuario
        const texto = usuario0.querySelector('nombre').textContent
        console.log(texto);
    // Para acceder al atributo del segundo nodo
    console.log(usuarios[1].getAttribute('dni'));
  })
  .catch(console.error);

