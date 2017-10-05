function isValidCard(option){

	 var tener = prompt('Ingrese Numero de Tarjeta');

       if((tener !== "") && (/^([0-9])*$/.test(tener))){ // Comprobando que no contenga numeros vacíos o caracteres distintos a números.
       
          var arry = [];
          
	      for (i=0; i<tener.length; i++){
	        
	       var newArry= tener[i];
	         
	        arry.push(newArry);

		//return invertido;
var invertido = arry.reverse();
	var pares = [];

	var impares = []; //no llamar luego!!

			for(var i=0; i<invertido.length; i++){ //cambiar el i+=2, por i++

				if([i]%2 === 0){

					pares.push();

						//dividir el número par

					parcito=pares(i).toString();

					cifra=pares(i).split(num1,num2);

						//transformar el string a número.

						var num1= parseInt[uno];

						var num2= parseInt[dos];

							sumita=[uno+dos];

						//suma=(sumita+[arreglo[i])

						suma= (sumita[i]);

						//módulo de 10. Dos opciones --> usar IF/Else

				}

			}		
					if(suma%10===0){

						return "Su tarjeta es válida";

					}else{

						return "Su tarjeta es inválida";
					}

	      }
        }else {
                alert("Ingrese un numero");
            }
       }
 
isValidCard();