var productos = [];
var agregarFruta = document.getElementById('fruta');

function Producto(fruta) {
  this.fruta = fruta.toLowerCase(); 
  this.productID = (productos.length + 1);
} 

Producto.prototype.toHTML = function () {
  var html = '';
  html += this.productID + " : " + this.fruta + '<br>';
  return html;
}

function mergeHTML (){ 
  var html = '';
  for (i=0; i<productos.length; i++){
    html += productos[i].toHTML(); 
  }
  return html;
}

function printHTML (html){
  agregarFruta.innerHTML = '';
  agregarFruta.innerHTML = html; 
}

var addAgrega = document.getElementById('agregar');
addAgrega.onclick = function(){
  var _fruta = document.getElementById('frutas').value;
  var product  = new Producto(_fruta); 
  productos.push(product);
  printHTML(product.toHTML());
  printHTML(mergeHTML());
};

function limpiar()
{
  var _fruta = document.getElementById('frutas').value = " ";
}
