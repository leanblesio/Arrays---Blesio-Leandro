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

function Validation(userInput, type)
{
    if(userInput === '' && type === 'string'){
        alert('Nombre ingresado invalido')
    }
    if(userInput === '' && type === 'number'){
        alert('Numero ingresado invalido')

    }
    if((userInput != 'pead' || userInput != 'pet') && type === 'material'){
        alert('Material ingresado invalido. Ingrese "pead" o pet"')
    }

}

function AgregarProducto(entrada){
    entrada.nombre = Validation(prompt('Nombre invalido: '))
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





