function calcularPrecio(){
    var cantDolar = document.getElementById('dolar').value;
    var opc = document.getElementById('opcion').value;
    
    var cotizacionEnPesos = 18.12;
    var cotizacionEnBitcoin = 0.000032;
  
    var valorEnPesos = cantDolar * cotizacionEnPesos;
    var valorEnBitcoin = cantDolar * cotizacionEnBitcoin;
  
    valorEnPesos = valorEnPesos.toFixed(2);
    
    switch (opc)
      {
        case 'pesos':
          document.getElementById('resultado').value = valorEnPesos;
        break;
        case 'bitcoin':
          document.getElementById('resultado').value = valorEnBitcoin;
        break;
      }
}
  