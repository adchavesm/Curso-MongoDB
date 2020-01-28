//Estructura general para almacenar toda la informacion requerida
db.Productos.insert({
    "id" : "2",
    "Stock" : 0,
    "Nombre" : "",
    "Categoria": "",
    "Caracteristica1" :"",
    "Caracteristica2" :"",
    "PrecioVenta":0,
    "PrecioCompra":0,
    "Clientes":[
        {
            "id_Cliente":"200",
            "Nombre_Cliente":"",
            "Ciudad_Cliente":"",
            "Ventas": [
                {
                    "id_venta": "",
                    "cantidad_Venta": 0,
                    "monto_Venta":0,
                    "fecha_Venta": "date"
                }
            ]
        }
    ],
    "Proveedor": 
        {
            "id_Proveedor":"",
            "Nombre":"",
            "Ciudad":"",
            "Compras":[
                {
                    "Cantidad_Compra":0,
                    "Monto_Compra":0,
                    "fecha_Compra": "date"
                }
            ]
        }
})

db.Productos.find().pretty()

//funcion para comprar a proveedores
db.system.js.save({
    _id:"Comprar",
    value: function(id_producto,id_compra,cantidad,monto){
        db.Productos.update({"id":id_producto},{$push:{"Proveedor.Compras": {
    "id_compra":id_compra,
    "Cantidad_compra":cantidad,
    "monto":monto,
    "fecha": Date()
        }}})
    }
})

Comprar("2","2555",15,100500)


//FUNCION PARA AGREGAR UN CLIENTE
db.system.js.save({
    _id:"AgregarCliente",
    value: function(id_producto,id_cliente,nombre_cliente,ciudad_cliente){
    db.Productos.update({"id":id_producto},{$push:{Clientes: {
            "id_Cliente":id_cliente,
            "Nombre_Cliente":nombre_cliente,
            "Ciudad_Cliente":ciudad_cliente,
            "Ventas": []
        }}})
    }
})

AgregarCliente("1","1030685412","regelio","valledupar")



//FUNCION PARA VENDER
db.system.js.save({
    _id:"Venta",
    value: function(id_producto,id_Cliente,id_venta,cantidad,monto){        
    db.Productos.update({"id":id_producto},{$push:{"Clientes.$[cli].Ventas":{"id_venta":id_venta,"cantidad_venta":cantidad,"monto_venta":monto,"fecha":Date()}}},{arrayFilters:[{"cli.id_Cliente":id_Cliente}]})
    }
})


Venta("1","1030685412","1035",15,650000)

//CONSULTAS
//c
db.Productos.find({},{"Clientes":0,"Proveedor":0}).pretty()
//d
db.Productos.find({'Cantidad':{$gt:0}}).pretty()
//e
db.Productos.find({'Cantidad':0}).pretty()
//f
db.Productos.find({"Categoria":"Audio"}).pretty();
db.Productos.find({"id":"6"}).pretty();
//G
db.Productos.find({},{"Clientes.Ventas":0,"_id":0,"id":0,
 "Stock":0,"Nombre":0,"Categoria":0,"Caracteristica1":0,"Caracteristica2":0,"Proveedor":0,"PrecioCompra":0
 ,"PrecioVenta":0}).pretty();
//H
db.Productos.find({"Clientes.id_Cliente":"1030685411"},{"Clientes.Ventas":0,"_id":0,"id":0,
 "Stock":0,"Nombre":0,"Categoria":0,"Caracteristica1":0,"Caracteristica2":0,"Proveedor":0,"PrecioCompra":0
 ,"PrecioVenta":0}).pretty();
//I

//J
db.Productos.find({},{"Proveedor.Compras":1,"_id":0});
//K
db.Productos.find({"Proveedor.id_Proveedor":"125212"},{"_id":0,"id":0,
 "Cantidad":0,"Nombre":0,"Categoria":0,"CaracteristicaN1":0,"CaracteristicaN2":0,"Clientes":0});
//L

//M
//N
//O
//P






