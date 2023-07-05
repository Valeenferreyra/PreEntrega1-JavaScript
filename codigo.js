// ecommerce

let gastoTotal = 0;

let producto = prompt('1-Remera Oversize Roja ... $4500\n 2-Rmera Oversize Negra ... $5000\n3-Remera Oversize Blanca $4800\n4-Pantalon Cargo Jean ... $8100\n5-Pantalon Cargo Negro ... $8000\nPantalon Cargo Marron ... $7850\n0-Para finalizar compra');

while(producto != '0'){
    switch(producto){
        case '1':
            alert('agregaste Remera Oversize Roja ... $4500');
            incrementoGastoTotal (4500);
            break;
        case '2':
            alert('agregaste Remera Oversize Negra ... $5000');
            incrementoGastoTotal (5000);
            break;
        case '3':
            alert('agregaste Remera Oversize Blanca ... $4800');
            incrementoGastoTotal (4800);
            break;
        case '4':
            alert('agregaste Pantalon Cargo Jean ... $8100');
            incrementoGastoTotal (8100);
            break;
        case '5':
            alert('agregaste Pantalon Cargo Negro ... $8000');
            incrementoGastoTotal (8000);
            break;
        case '6':
            alert('agregaste Pantalon Cargo Marron ... $7850');
            incrementoGastoTotal (7850);
            break;
            default:
                alert('codigo erroneo');
                break;
    }
    producto = prompt('1-Remera Oversize Roja ... $4500\n 2-Rmera Oversize Negra ... $5000\n3-Remera Oversize Blanca $4800\n4-Pantalon Cargo Jean ... $8100\n5-Pantalon Cargo Negro ... $8000\nPantalon Cargo Marron ... $7850\n0-Para finalizar compra');
}

alert('monto total de tu compra $ '+gastoTotal);

function incrementoGastoTotal(precioRemera){
    gastoTotal = gastoTotal + precioRemera;
    console.log('subtotal hasta el momento $'+gastoTotal);
}

let num1 = 1;
let num2 = 2;

let ropa = prompt ('elegir metodo de pago: 1-Mercado Pago o 2-Tarjeta de Débito');

if(ropa == num1){
    alert('elegiste pagar con Mercado Pago');
} else if (ropa == num2){
    alert('elegiste pagar con Tarjeta de Débito');
}else{
    alert('no elegiste ninguna opcion');
}

if(gastoTotal > 20000){
    alert('Felicitaciones! Tiene un descuento del %5');
}else{
    alert('Gracias por comprar!');
}