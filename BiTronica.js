///////// BITRONICA ///////
// ANDRES DUVAN CHAVES MOSQUERA


//Nombre de la base de datos
use BiTronica

//Estructura del documento, para guardar los productos
db.productos.insert(
    {
     "id_producto" : "",
    "stock" : 0,
    "nombre" : "",
    "categoria": "",
    "caracteristica1" :"",
    "caracteristica2" :"",
    "precio_venta":0,
    "precio_compra":0
    }
)

//Estructura del documento, para guardar los clientes
db.clientes.insert(
    {
        "id_cliente":"200",
            "nombre_cliente":"",
            "ciudad_cliente":""
    }
)

//Estructura del documento, para guardar los proveedores
db.proveedores.insert(
    {
        "id_proveedor":"",
        "id_producto":"",
            "nombre":"",
            "ciudad":""
    }
)

//Estructura del documento, para guardar las compras
db.compras.insert(
    {
        "id_producto":"",
        "id_proveedor":"",
        "cantidad_compra":0,
        "monto_compra":0,
        "fecha_Compra": "date"
    }
)




//PRODUCTOS
db.productos.insert(
    {
     "id_producto" : "1",
    "stock" : 75,
    "nombre" : "Buzzer 5v",
    "categoria": "Audio",
    "caracteristica1" :"3,5v a 5v",
    "caracteristica2" :"6.5mm",
    "precio_venta":2000,
    "precio_compra":1350
    }
)


db.productos.insert(
    {
     "id_producto" : "2",
    "stock" : 50,
    "nombre" : "Arduino Pro Mini AtMega328",
    "categoria": "Tarjetas De Desarrollo",
    "caracteristica1" :"5v",
    "caracteristica2" :"16 Mhz",
    "precio_venta":9000,
    "precio_compra":6250
    }
)

db.productos.insert(
    {
     "id_producto" : "3",
    "stock" : 60,
    "nombre" : "Display 7 Segmentos",
    "categoria": "LCD Y LED",
    "caracteristica1" :"anodo comun",
    "caracteristica2" :"7 segmentos",
    "precio_venta":1200,
    "precio_compra":720
    }
)


//clientes



db.clientes.insert(
    {
        "id_cliente":"1030685412",
            "nombre_cliente":"Julian Piñeros",
            "ciudad_cliente":"Villa Nueva"
    }
)

db.clientes.insert(
    {
        "id_cliente":"1030685413",
            "nombre_cliente":"Bryan Caro",
            "ciudad_cliente":"Tolima"
    }
)

db.clientes.insert(
    {
        "id_cliente":"1030685414",
            "nombre_cliente":"Andres Chaves",
            "ciudad_cliente":"Bogota"
    }
)


// proveedores

db.proveedores.insert(
    {
        "id_proveedor":"1040685411",
        "id_producto":"1",
            "nombre":"Sandra Mazuera",
            "ciudad":"Bogota"
    }
)

db.proveedores.insert(
    {
        "id_proveedor":"1040685413",
        "id_producto":"2",
            "nombre":"Danna Andrade",
            "ciudad":"Bogota"
    }
)

db.proveedores.insert(
    {
        "id_proveedor":"1040685412",
        "id_producto":"3",
            "nombre":"Robert Salgado",
            "ciudad":"Bogota"
    }
)

//compras


db.compras.insert(
    {
        "id_compra":"11",
        "id_producto":"1",
        "id_proveedor":"1040685411",
        "cantidad_compra":75,
        "monto_compra":101250,
        "fecha_Compra": Date()
    }
)

db.compras.insert(
    {
        "id_compra":"12",
        "id_producto":"2",
        "id_proveedor":"1040685413",
        "cantidad_compra":50,
        "monto_compra":312500,
        "fecha_Compra": Date()
    }
)

db.compras.insert(
    {
        "id_compra":"13",
        "id_producto":"3",
        "id_proveedor":"1040685412",
        "cantidad_compra":60,
        "monto_compra":43200,
        "fecha_Compra": Date()
    }
)

//ventas

db.ventas.insert(
    {
        "id_venta": "101",
        "id_producto":"1",
        "id_comprador":"1030685412",
       
        "cantidad_venta": 2,
        "monto_venta":4000,
        "fecha_venta": Date()
    }
)

db.ventas.insert(
    {
        "id_venta": "102",
        "id_producto":"2",
        "id_comprador":"1030685413",
        "cantidad_venta": 1,
        "monto_venta":9000,
        "fecha_venta": Date()
    }
)

db.ventas.insert(
    {
        "id_venta": "103",
        "id_producto":"3",
        "id_comprador":"1030685414",
        "cantidad_venta": 4,
        "monto_venta":4800,
        "fecha_venta": Date()
    }
)

//FUNCION PARA COMPRAR

db.system.js.save({
    _id:"comprar",
    value: function(id_producto,cantidad,id_comprador,id_venta){     
        var res=""
        var producto=db.productos.find({"id_producto":id_producto})
        var productoArray=producto.toArray()
        if((productoArray[0].stock - cantidad)<0){
              res="Lo sentimos, quedan: "+productoArray[0].stock+" solo podremos vender esa cantidad, o la proxima semana, podria comprar la cantidad desceada."
            
            var proveedor=db.proveedores.find({"id_producto":id_producto})
            var proveedorArray=proveedor.toArray()
            db.compras.insert({
                "id_producto" : id_producto, 
                "id_proveedor" : proveedorArray[0].id_proveedor, 
                "cantidad_compra" : 50, 
                "monto_compra" : productoArray[0].precio_compra*50, 
                "fecha_Compra" : Date()
            })
            
            db.productos.update({"id_producto":id_producto},{$inc:{"stock":50}})
        }else{
            res="Transaccion exitosa"
            
            var preciou=productoArray[0].precio_venta
        db.ventas.insert(
        {
        "id_venta": id_venta,
        "id_producto":id_producto,
        "id_comprador":id_comprador,
        "cantidad_venta": cantidad,
        "monto_venta": preciou*cantidad,
        "fecha_venta": Date()
        }
        )
        
        db.productos.update({"id_producto":id_producto},{$inc:{"stock":-cantidad}})
        }
        return res;
    }
})

db.loadServerScripts()

comprar("2",5,"1030685412","106")


//CONSULTAS
//c
db.productos.find({},{"nombre":1,"_id":0}).pretty()
//d
db.productos.find({'stock':{$gt:0}},{"nombre":1,"stock":1,"_id":0}).pretty()
//e
db.productos.find({'stock':0}).pretty()
//f
db.productos.find({"categoria":"Audio"}).pretty();
db.productos.find({"id_producto":"2"}).pretty();
//G



//H



//i
db.clientes.find({}).pretty();
//j
db.Productos.find({"Clientes.id_cliente":"1030685411"},{"Clientes.Ventas":0,"_id":0,"id":0,
 "stock":0,"nombre":0,"categoria":0,"caracteristica1":0,"caracteristica2":0,"Proveedor":0,"precio_compra":0
 ,"precio_venta":0}).pretty();
//k

var id="1030685412";
var items = db.ventas.find({"id_comprador":id})
var itemsArray=items.toArray()
var valor=0

for(var i=0; i<items.length();i=i+1){
        valor=valor+itemsArray[i].monto_venta
}

valor

//l
db.Productos.find({},{"Proveedor.Compras":1,"_id":0});

//m

db.Productos.find({"proveedor.id_proveedor":"125212"},{"_id":0,"id":0,
 "cantidad":0,"nombre":0,"categoria":0,"CaracteristicaN1":0,"CaracteristicaN2":0,"Clientes":0});
 
 
//n

var id="1040685412";
var items = db.compras.find({"id_proveedor":id})
var itemsArray=items.toArray()
var valor=0

for(var i=0; i<items.length();i=i+1){
        valor=valor+itemsArray[i].monto_compra
}

valor

//o

var items = db.ventas.find()
var itemsArray=items.toArray()
var mayor=0
var id="";
for(var i=0; i<items.length();i=i+1){
    var aux=0
    var idaux=itemsArray[i].id_comprador
    for(var j=0; j<items.length();j=j+1){
        if(idaux==itemsArray[j].id_comprador){
        aux=aux+itemsArray[j].monto_venta
        }
    }
    if(aux>mayor){
        id=itemsArray[i].id_comprador
        mayor=aux
        }
}

db.clientes.find({"id_cliente":id})


//p

var items = db.compras.find()
var itemsArray=items.toArray()
var mayor=0
var id="";
for(var i=0; i<items.length();i=i+1){
    var aux=0
    var idaux=itemsArray[i].id_proveedor
    for(var j=0; j<items.length();j=j+1){
        if(idaux==itemsArray[j].id_proveedor){
        aux=aux+itemsArray[j].monto_compra
        }
    }
    if(aux>mayor){
        id=itemsArray[i].id_proveedor
        mayor=aux
        }
}

db.proveedores.find({"id_proveedor":id})

//q
var items = db.ventas.find()
var itemsArray=items.toArray()
var mayor=0;
for(var i=0; i<items.length();i=i+1){
    if(itemsArray[i].monto_venta>mayor){
        mayor=itemsArray[i].monto_venta;
    }
}
db.ventas.find({"monto_venta":mayor})


// r
var items = db.ventas.find();
var itemsArray=items.toArray()
var mayor=0;
for(var i=0; i<items.length();i=i+1){
    if(itemsArray[i].cantidad_venta>mayor){
        mayor=itemsArray[i].cantidad_venta;
    }
}

db.ventas.find({"cantidad_venta":mayor})


/////////////////////////////////////// SENTENCIAS AUXILIARES //////////////////////////////////

db.ventas.remove({})

db.compras.remove({"id_proveedor":"1040685413"});

db.clientes.find().pretty()
db.compras.find().pretty()
db.productos.find().pretty()
db.proveedores.find().pretty()
db.ventas.find().pretty()
show dbs;
use biTronica
db.productos.remove({"_id" : ObjectId("5da92a532f89442648e3db2c")})
db.proveedores.remove({"id_proveedor":"1040685412"})

db.dropDatabase()