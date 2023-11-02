//Creamos la lista juegos
var juegos = [
    {
      nom: 'Lies of P',
      img: 'https://assetsio.reedpopcdn.com/co6lxr.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
      urlYT: 'https://youtu.be/kXZoKdr-xeo?si=IonLZgEZz59P2214'
    },
    {
      nom: 'The last of us part I',
      img: 'https://howlongtobeat.com/games/TheLastofUsRemastered.jpg',
      urlYT: 'https://youtu.be/W01L70IGBgE?si=oB1Mh4hw8mjhBI9O'
    },
    {
      nom: 'The last of us part II',
      img: 'https://w0.peakpx.com/wallpaper/532/860/HD-wallpaper-ellie-joel-the-last-of-us-the-last-of-us-2-the-last-of-us-part-2.jpg',
      urlYT: 'https://youtu.be/BO1HAm_XYS8?si=TtjPdab-Tzy_Bq7c'
    },
    {
      nom: 'Spider-Man PS4',
      img: 'https://w0.peakpx.com/wallpaper/370/580/HD-wallpaper-spiderman-ps4-spiderman-ps4-tom-holland-peter-parker-spider-game-games-man-marvel.jpg',
      urlYT: 'https://youtu.be/dNYaEmIr_gs?si=qltML3iFszxb0ZbA'
    }
  ];
  
  //Hacemos un push a la lista
  juegos.push(
    {
      nom: 'Spider-Man 2',
      img: 'https://pbs.twimg.com/media/Fy084NIWYAApAPS?format=jpg&name=4096x4096',
      urlYT: 'https://youtu.be/cXSpEmPmbfc?si=tdDDiBhdoZNYwD8w'
    },
    {
      nom: 'Party Animals',
      img: 'https://media.vandal.net/i/1080x1080/9-2023/202392817241193_1.jpg',
      urlYT: 'https://youtu.be/Cunvu8b7rj0?si=lId4FFT4Xpvs3wHv'
    },
    {
      nom: 'Starfield',
      img: 'https://picfiles.alphacoders.com/478/thumb-478214.jpg',
      urlYT: 'https://youtu.be/mlZDWlk1t6k?si=HOsH_cgHdl9uM_hH'
    },
    {
      nom: 'The legend of Zelda: TOTK',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg/220px-The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg',
      urlYT: 'https://youtu.be/sjxLF4IYnJc?si=LOCEjyURAV78XZmJ'
    },
    {
      nom: 'Hollow Knight',
      img: 'https://www.enjpg.com/img/2020/hollow-knight-48-e1659983486802.jpg',
      urlYT: 'https://youtu.be/UAO2urG23S4?si=3dDz5SZXsEL-OhDb'
    }
  );
  
  //Funcion para agregar elementos desde la pagina web
  function agregarJuego(){
    var urlJuego = document.getElementById('url').value;
    var nomJuego = document.getElementById('nombre').value;
    var vidJuego = document.getElementById('vid').value;
    
    if(urlJuego.endsWith('.jpg') || urlJuego.endsWith('.jpeg') || urlJuego.endsWith('png'))
      {
        var containerJuego = document.createElement('div');
        containerJuego.className = 'containerJuego';
        
        var imagen = document.createElement('img');
        imagen.src = urlJuego;
        
        var nombre = document.createElement('p');
        nombre.textContent = nomJuego;
        
        var enlace = document.createElement('a')
        enlace.href = vidJuego;
        
        var btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.addEventListener('click', function () {
        containerJuego.remove();
      });
        
        enlace.appendChild(imagen);
        containerJuego.appendChild(enlace);
        containerJuego.appendChild(nombre);
        containerJuego.appendChild(btnEliminar);
        containerCatalogo.appendChild(containerJuego);
        
        var catalogoJuegos = document.getElementById('catalogoJuegos');
        catalogoJuegos.appendChild(containerCatalogo);
        
        document.getElementById('url').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('vid').value = "";
      }
      else
        {
          alert ('Error... Url no compatible.....')
        }
    };
  
  //Creamos un div llamado catalogo y le asignamos una clase para darle estilo en CSS
  var containerCatalogo = document.createElement('div');
  containerCatalogo.className = 'containerCatalogo';
  
  juegos.forEach(function (mostrar){
    //Crear un div para cada juego dentro del array y su clase para darle estilo en CSS
    var containerJuego = document.createElement('div');
    containerJuego.className = 'containerJuego';
    
    //Crear una variable enlace y un elemento en html de tipo a y almacenar la url del array en la variable enlace
    var enlace = document.createElement('a')
    enlace.href = mostrar.urlYT;
    
    //Crear una variable imagen y un elemento en html de tipo img y almacenar la url del array en la variable imagen
    var imagen = document.createElement('img');
    imagen.src = mostrar.img;
    imagen.alt = mostrar.nom;
    
    //Crear una variable nombre y un elemento en html de tipo p(parrafo), y almacenar el nombre del array en la variable nombre
    var nombre = document.createElement('p');
    nombre.textContent = mostrar.nom;
    
    //Agregar una clase para usarla en el CSS
    enlace.classList.add('enlace-imagen')
    
    //Agregar un boton con la funcion eliminar
    var btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.addEventListener('click', function () {
        containerJuego.remove();
      });
    
    //Hacer nodos hijo de a las variables imagen y nombre
    enlace.appendChild(imagen);
    containerJuego.appendChild(enlace);
    containerJuego.appendChild(nombre);
    containerJuego.appendChild(btnEliminar);
    //Hacer nodo hijo a containerJuego
    containerCatalogo.appendChild(containerJuego);
  });
  
  var catalogoJuegos = document.getElementById('catalogoJuegos');
  catalogoJuegos.appendChild(containerCatalogo);
  
  //Utilizando un ciclo for para imprimir las imagenes
  /*for (var i = 0; i < listaPelis.length; i++)
    {
      document.write ("<img src = " + listaPelis[i] + ">")
      document.write("<br>")
      document.write(nomPelis[i])
      document.write("<br>")
    }*/
  
  //Utilizando un ciclo while para imprimir las imagenes
  /*var i = 0;
  
  while (i < listaPelis.length)
    {
      document.write ("<img src = " + listaPelis[i] + ">")
      
      i++;
    }*/
  