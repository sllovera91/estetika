function validar(){
  var todo_correcto = true;
  
// Valida que por lo menos tenga tres caracteres
if(document.getElementById('name').value.length < 3 ){
    todo_correcto = false;
}
//Valida que por lo menos tenga 8 caracteres
if(document.getElementById('phone').value.length < 8 ) {
    todo_correcto = false;
}
//En caso de que algo no cumpla la condicion lanza este mensaje
if(!todo_correcto){
alert('Algunos campos no estan completos');
}

if(todo_correcto){
  alert('En Construccion');
  }
//De estar todo correcto, se envia.
return todo_correcto;
};