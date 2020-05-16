//Creación de las Colecciones para BitTronica
db.createCollection(<"Productos">)
db.createCollection(<"Clientes">)
db.createCollection(<"Proveedores">)
db.createCollection(<"Registro Ventas/Compras">)

//Creación de los productos dentro de la colección "Productos"
db.Productos.insert({ "_id" : 7518, "Nombre Producto" : "Logitech T-266", "Categoría" : "Teclado", "Stock" : true, "Cantidad" : 20, "Precio Compra" : 60000, "Precio Venta" : 90000, "Características" : "RGB, Membrana" })
db.Productos.insert({ "_id" : 1903, "Nombre Producto" : "Logitech T-022", "Categoría" : "Teclado", "Stock" : true, "Cantidad" : 10, "Precio Compra" : 50000, "Precio Venta" : 650000, "Características" : "USB, Membrana" })
db.Productos.insert({ "_id" : 3348, "Nombre Producto" : "Razer 960Ti", "Categoría" : "Teclado", "Stock" : true, "Cantidad" : 5, "Precio Compra" : 100000, "Precio Venta" : 140000, "Características" : "RGB, Mecánico" })
db.Productos.insert({ "_id" : 2082, "Nombre Producto" : "Intel Core i9", "Categoría" : "Procesador", "Stock" : true, "Cantidad" : 5, "Precio Compra" : 1200000, "Precio Venta" : 1500000, "Características" : "10 nucleos, 4.1 GHz" })
db.Productos.insert({ "_id" : 7984, "Nombre Producto" : "Intel Core i7", "Categoría" : "Procesador", "Stock" : true, "Cantidad" : 5, "Precio Compra" : 500000, "Precio Venta" : 650000, "Características" : "8 nucleos, 3.5 GHz" })
db.Productos.insert({ "_id" : 2923, "Nombre Producto" : "intel Core i5", "Categoría" : "Procesador", "Stock" : true, "Cantidad" : 8, "Precio Compra" : 180000, "Precio Venta" : 210000, "Características" : "4 nucleos, 3.1 GHz" })
db.Productos.insert({ "_id" : 7681, "Nombre Producto" : "Ryzen 5 3600X", "Categoría" : "Procesador", "Stock" : true, "Cantidad" : 2, "Precio Compra" : 600000, "Precio Venta" : 750000, "Características" : "8 nucleos, 3.9 GHz" })
db.Productos.insert({ "_id" : 8410, "Nombre Producto" : "Logitech MX Anywhere 2S", "Categoría" : "Mouse", "Stock" : true, "Cantidad" : 15, "Precio Compra" : 40000, "Precio Venta" : 55000, "Características" : "Inalambrico, 2 botones" })
db.Productos.insert({ "_id" : 5639, "Nombre Producto" : "Logitech Pebble M350", "Categoría" : "Mouse", "Stock" : true, "Cantidad" : 15, "Precio Compra" : 60000, "Precio Venta" : 80000, "Características" : "Inalambrico, 2 botones" })
db.Productos.insert({ "_id" : 6252, "Nombre Producto" : "Logitech MX Ergo", "Categoría" : "Mouse", "Stock" : true, "Cantidad" : 5, "Precio Compra" : 80000, "Precio Venta" : 100000, "Características" : "USB, Ergonomico" })
db.Productos.insert({ "_id" : 9436, "Nombre Producto" : "Logitech MX Vertical", "Categoría" : "Mouse", "Stock" : true, "Cantidad" : 2, "Precio Compra" : 120000, "Precio Venta" : 150000, "Características" : "Inalambrico, Vertical" })
db.Productos.insert({ "_id" : 6578, "Nombre Producto" : "Logitech M720 Triathlon", "Categoría" : "Teclado", "Stock" : true, "Cantidad" : 10, "Precio Compra" : 150000, "Precio Venta" : 165000, "Características" : "Multidevice, 5 botones" })
db.Productos.insert({ "_id" : 0200, "Nombre Producto" : "Razer Goliathus", "Categoría" : "MousePad", "Stock" : true, "Cantidad" : 30, "Precio Compra" : 40000, "Precio Venta" : 55000, "Características" : "Slim, Policarbonato" })
db.Productos.insert({ "_id" : 8916, "Nombre Producto" : "Razer SphexV2", "Categoría" : "MousePad", "Stock" : true, "Cantidad" : 40, "Precio Compra" : 70000, "Precio Venta" : 85000, "Características" : "RGB, Policarbonato" })
db.Productos.insert({ "_id" : 3895, "Nombre Producto" : "Razer Gigantus", "Categoría" : "MousePad", "Stock" : true, "Cantidad" : 10, "Precio Compra" : 90000, "Precio Venta" : 115000, "Características" : "Gigante, RGB" })
db.Productos.insert({ "_id" : 3967, "Nombre Producto" : "Genius SW-G2", "Categoría" : "Parlante", "Stock" : true, "Cantidad" : 5, "Precio Compra" : 250000, "Precio Venta" : 285000, "Características" : "RGB, 4 componentes" })
db.Productos.insert({ "_id" : 5455, "Nombre Producto" : "Bose HS500", "Categoría" : "Parlante", "Stock" : true, "Cantidad" : 3, "Precio Compra" : 500000, "Precio Venta" : 510000, "Características" : "Inalambrico, WI-FI" })
db.Productos.insert({ "_id" : 3070, "Nombre Producto" : "Sony XB22", "Categoría" : "Parlante", "Stock" : true, "Cantidad" : 10, "Precio Compra" : 120000, "Precio Venta" : 135000, "Características" : "Bluetooth, Extra Bass" })
db.Productos.insert({ "_id" : 2688, "Nombre Producto" : "Sony XB900N", "Categoría" : "Auricular", "Stock" : true, "Cantidad" : 8, "Precio Compra" : 500000, "Precio Venta" : 548000, "Características" : "Noise Canceling, Inalambrico" })
db.Productos.insert({ "_id" : 8658, "Nombre Producto" : "Sony XB550AP", "Categoría" : "Auricular", "Stock" : true, "Cantidad" : 10, "Precio Compra" : 100000, "Precio Venta" : 119000, "Características" : "jack 3.5mm, Extra Bass" })

db.Productos.update({"_id":2688},{"Nombre Producto" : "Sony XB900N","Categoría" : "Auricular","Stock" : false,"Cantidad" : 0,"Precio Compra" : 500000,"Precio Venta" : 548000,"Características" : "Noise Canceling, Inalambrico"})
db.Productos.find({},{}).pretty()

//Creación de los clientes dentro de la colección "Clientes"
db.Clientes.insert({ "_id" :4682540855 , "Nombre Cliente" : "AGUSTIN FAJARDO", "Compra Total":500000, "Productos Comprados":4})
db.Clientes.insert({ "_id" :7708797245 , "Nombre Cliente" : "ALBERT MACIA", "Compra Total":0, "Productos Comprados":0})
db.Clientes.insert({ "_id" :1497382574 , "Nombre Cliente" : "AGUSTIN FAJARDO", "Compra Total":0, "Productos Comprados":0})
db.Clientes.insert({ "_id" :3481784556 , "Nombre Cliente" : "ANGEL MONTALVO", "Compra Total":0, "Productos Comprados":0})
db.Clientes.insert({ "_id" :4562482091 , "Nombre Cliente" : "MANUEL GINER", "Compra Total":0, "Productos Comprados":0})
db.Clientes.insert({ "_id" :9871966525 , "Nombre Cliente" : "NICOLAS LLAMAS", "Compra Total":120000, "Productos Comprados":5})
db.Clientes.insert({ "_id" :3414781054 , "Nombre Cliente" : "GABRIEL DONAIRE", "Compra Total":0, "Productos Comprados":0})
db.Clientes.insert({ "_id" :9824328627 , "Nombre Cliente" : "FRANCISCO JUAREZ", "Compra Total":0, "Productos Comprados":0})
db.Clientes.insert({ "_id" :6791417464 , "Nombre Cliente" : "YOLANDA ARAMBURU", "Compra Total":0, "Productos Comprados":0})
db.Clientes.insert({ "_id" :1335183247 , "Nombre Cliente" : "JOSEFA SOTO", "Compra Total":600000, "Productos Comprados":10})
db.Clientes.insert({ "_id" :1614127984 , "Nombre Cliente" : "SANDRA BARRIENTOS", "Compra Total":0, "Productos Comprados":0})
db.Clientes.insert({ "_id" :4539213868 , "Nombre Cliente" : "ROSA QUINTANA", "Compra Total":800000, "Productos Comprados":4})
db.Clientes.insert({ "_id" :3712460127 , "Nombre Cliente" : "MARTA ANDREU", "Compra Total":950000, "Productos Comprados":9})
db.Clientes.insert({ "_id" :8602882276 , "Nombre Cliente" : "AGUSTIN GALLEGOS", "Compra Total":650000, "Productos Comprados":11})
db.Clientes.insert({ "_id" :6087459947 , "Nombre Cliente" : "ALBERT ZAMBRANA", "Compra Total":100000, "Productos Comprados":2})
db.Clientes.insert({ "_id" :4936345568 , "Nombre Cliente" : "SALVADOR CORRAL", "Compra Total":30000, "Productos Comprados":7})
db.Clientes.insert({ "_id" :5642553553 , "Nombre Cliente" : "OSCAR LILLO", "Compra Total":590000, "Productos Comprados":3})
db.Clientes.insert({ "_id" :9126757442 , "Nombre Cliente" : "MARIA ANGELES", "Compra Total":65000, "Productos Comprados":2})
db.Clientes.insert({ "_id" :8596940589 , "Nombre Cliente" : "ANA BELEN", "Compra Total":45000, "Productos Comprados":7})
db.Clientes.insert({ "_id" :4953348517 , "Nombre Cliente" : "PEDRO ADROVER", "Compra Total":1200000, "Productos Comprados":5})

//Creación de los proveedores dentro de la colección "Proveedores"
db.Proveedores.insert({ "_id" :74962 , "Nombre Proveedor" : "Sony Corp", "Ciudad":"Bogota", "Productos Ofrecidos":["Sony XB22", "Sony XB900N", "Sony XB550AP"], "Valor Compra":720000})
db.Proveedores.insert({ "_id" :72884 , "Nombre Proveedor" : "Razer Inc", "Ciudad":"Bogota", "Productos Ofrecidos":["Razer 960Ti", "Razer Goliathus", "Razer SphexV2", "Razer Gigantus"], "Valor Compra":200000})
db.Proveedores.insert({ "_id" :12564 , "Nombre Proveedor" : "Intel Corp", "Ciudad":"Medellin", "Productos Ofrecidos":["Intel Core i9", "Intel Core i7", "intel Core i5"], "Valor Compra":1880000})
db.Proveedores.insert({ "_id" :92775 , "Nombre Proveedor" : "Bose Corp", "Ciudad":"Medellin", "Productos Ofrecidos":["Bose HS500"], "Valor Compra":500000})
db.Proveedores.insert({ "_id" :16210 , "Nombre Proveedor" : "AMD Inc", "Ciudad":"Barranquilla", "Productos Ofrecidos":["Ryzen 5 3600X"], "Valor Compra":600000})
db.Proveedores.insert({ "_id" :19012 , "Nombre Proveedor" : "Logitech", "Ciudad":"Bogota", "Productos Ofrecidos":["Logitech T-266", "Logitech T-022", "Logitech MX Anywhere 2S", "Logitech Pebble M350", "Logitech MX Ergo", "Logitech MX Vertical", "Logitech M720 Triathlon"],"Valor Compra":560000})
db.Proveedores.insert({ "_id" :69426 , "Nombre Proveedor" : "Genius", "Ciudad":"Cali", "Productos Ofrecidos":["Genius SW-G2"],"Valor Compra":250000})


////////// Creación de Consultas ///////////

//-----Consultas Productos-----//

//Consulta de TODOS los productos
db.Productos.find({},{}).pretty()        
      
//Consulta productos en STOCK
db.Productos.find({"Stock":true}).pretty()        

//Consulta productos que NO están en STOCK
db.Productos.find({"Stock":false}).pretty()

//Consulta productos por ID
db.Productos.find({"_id":}).pretty()

//Consulta de producto por categoría
db.Productos.find({"Categoría":""}).pretty()

//Consulta de productos por característica
db.Productos.find({"Características":""}).pretty()


//-----Consultas Clientes-----//

//Consulta TODOS los clientes
db.Clientes.find({},{}).pretty() 

//Consulta ID cliente 
db.Clientes.find({"_id":}).pretty()

//Consulta NOMBRE clientes
db.Clientes.find({"Nombre Cliente":""}).pretty()

//Consulta DINERO COMPRA de los clientes (se puede ajustar al monto preferido en la función {$gt:int})
db.Clientes.find({"Compra Total":{$gt:0}})


//-----Consultas Proveedores-----//

//Consulta TODOS los proveedores
db.Proveedores.find({},{}).pretty()

//Consulta proovedor por ID
db.Proovedores.find({"_id":}).pretty()

//Consulta de proveedor por PRODUCTO
db.Proveedores.find({ "Productos Ofrecidos":{$all:["Intel Core i9", "intel Core i5"]}}).pretty()

//Consulta proovedor por NOMBRE 
db.Proveedores.find({"Nombre Proveedor":""}).pretty()


//-----Consultas Ventas/Compras-----//

//Cliente que más ha comprado (dinero)
db.Clientes.find().sort({"Compra Total":-1}).limit(1)

//Cliente que más ha comprado (# productos)
db.Clientes.find().sort({"Productos Comprados":-1}).limit(1)

//Proveedor al cual más se le compra
db.Proveedores.find().sort({"Valor Compra":-1}).limit(1)


////////// Creación de Funciones ///////////

//Función venta de un producto
db.system.js.save(
    {
      _id:"VentaProductos",
      value:function(ArtNum, idProd, idClient,idProv){
          var aux=0
        db.Productos.find({"_id":idProd}).forEach(Productos=>(aux+=Productos.Precio_Compra))
aux*=ArtNum
          $cond:[ {"Stock":true},

              db.Productos.update({"_id":idProd},
 {$inc:{"Cantidad":-ArtNum}}),
                db.Clientes.update({"_id":idClient},
       {$inc:{"Productos Comprados":ArtNum, "Compra Total":aux}})        
          ,
              db.Proveedores.update({"_id":idProv},{$inc:{"Valor Compra":aux}}),
              db.Productos.update({"_id":idProd},{$inc:{"Cantidad":ArtNum*2}})
             
        ]
      }  
    }
)
db.loadServerScripts()


VentaProducto(3,5455,7708797245,74962)




db.Productos.find({"_id":5455},{}).pretty()

db.system.js.find()

db.system.js.remove({_id:"VentaProducto"})

