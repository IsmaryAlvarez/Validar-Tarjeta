function isValidCard() {
  do {
    // Pedirle al usuario que ingrese su número de tarjeta
    var numberCar = prompt('Ingresa tu número de tarjeta');
    if (numberCar === null) {
      alert('Ingresa una opción válida');
    } else {
      var arr = [];
      for (var i = 0; i < numberCar.length; i++) {
        arr.push(numberCar[i]);
      } for (var elem = 0; elem < arr.length; elem++) {
        var item = arr.pop();
        arr.splice(elem, 0, item);
        var num = [];
      } for (var x = 0; x < arr.length; x++) {
        num.push(parseInt(arr[x]));
        var pairPosition = [];
        var impairPosition = 0;
        var result;
      // Separar los números en posiciones pares
      } for (var p = 0; p < num.length; p ++) {
        if ([ p + 1] % 2 === 0) {
          pairPosition.push((num[p]) * 2);
        } else if ([p + 1] % 2 !== 0)
          impairPosition += (num[p]);
        var pairPositionLess = 0;
        var pairPositionHigth = [];
      } for (var s = 0; s < pairPosition.length; s++) {
        if (pairPosition[s] < 10) {
          pairPositionLess += (pairPosition[s]);
        } else {
          pairPositionHigth.push(pairPosition[s]);
          var pairString = pairPositionHigth.join('');
          var sum = 0;
          for (var y = 0; y < pairString.length; y++) {
            sum += parseInt(pairString[y]);
          }
        }
      }
    } result = sum + impairPosition + pairPositionLess;
    if (result % 10 === 0) { 
      alert('Tarjeta Válida');
    } else {
      alert('Tarjeta Inválida');
    }
  } while (numberCar === null);
}
isValidCard();