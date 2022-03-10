
/* Vamos a hacerlo bien y pongamos un versionado. hay un txt con explicacion.
   
    Alumno: Leando Blesio
    Proyecto: Arrays
    Version: v1.0.0

*/

console.log('Desafio Arrays - Blesio Leandro')

class Producto{
     constructor(nombre, cantXbulto, material, stock, stockBotellas){
         this.nombre = nombre;
         this.cantXbulto = cantXbulto;
         this.material = material;
         this.stock = stock;
         this.stockBotellas = stockBotellas;
     }

     TotalEnvases(){
         this.stockBotellas = this.stock * this.cantXbulto;
     }
}
 //sumamos loop en retorno 
function Validation(userInput, type)
{ debugger
    //nuestra variable interna es equivalente al input. Si esta mal la vamos a resignificar. Sino la retornamos como viene
    let newRequest = userInput; 

    if(userInput === '' && type == 'string'){
        alert('Nombre ingresado invalido')
        //va a entrar a la misma funcion el dato que pedimos y pasa las validaciones hechas.
        //(lo hago un cacho verboso para que se pueda seguir paso a paso)
        newRequest = prompt("reingrese Nombre") // ahora el userInput es el nuevo prompt
        Validation(newRequest, 'string')
    }
    //Agregamos el caso NaN
    if(userInput === '' || userInput === NaN &&  type == 'number'){
        alert('Numero ingresado invalido')
        newRequest = prompt(" reingrese Cantidad x bulto")
        Validation(newRequest, 'number')
    }
    //OJO!! el usuario como sabe que tiene que poner esas opciones?
    //2do: "&& type" no esta entrando para general solo en conbinacion con pet. 
    //3ro: tu if siempre se va a ejecutar ya que si escribis pead va a entrar a != pet y al reves tambien
    //podes anidarlo o hacer una variable bool para material 
    // let boolMaterial =  'pead' || 'pet' <-- ahi seria true siempre que cumpla alguno de esos 2
    if((userInput != 'pead' && type == 'material') || (userInput != 'pet' && type == 'material')){
        alert('Material ingresado invalido. Ingrese "pead" o pet"')
        newRequest = prompt(" reingrese Material")
        Validation(newRequest, 'material')
    }

    return newRequest;
}

function AgregarProducto(entrada){      //Ya de uno invalido?
    entrada.nombre = Validation(prompt('Nombre invalido: '), "string")
    entrada.cantXbulto = Validation(parseInt(prompt('Cantidad x bulto: '), 'number'))
    entrada.material = Validation(prompt('Material: '), 'material')
    entrada.stock = Validation(parseInt(prompt('Stock: '), 'number'))
    }

 

//Incorporar arreglos.
let entrada = ''
const productos = [];
let prod;

alert('INGRESO DE PRODUCTOS')

while(entrada != '*'){


    //Crear nuevo objeto con sus prop. 
    //Guardar obj en array

    const prod = new Producto()
 
    AgregarProducto(prod);
   
    
    console.log(prod)
    console.log(prod.nombre)
    productos.push(prod)
   

    entrada = prompt('Si desea finalizar con el ingreso presione *, de lo contrario cualquier otra tecla.')

}



 productos.forEach(element => {
    console.log(productos)
   
  
 });





