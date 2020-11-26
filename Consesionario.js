show dbs

use Concesionario

db.createCollection("Productos")

db.createCollection("Vendedores")

db.Productos.insert({   "Nombre": "Prado TXL",
                        "marca": "Toyota", 
                        "modelo": 2018, 
                        "cilindraje(litros)": 3.5, 
                        "combustible": "Diesel" })

db.Productos.insert({   "Nombre": "CX-5", 
                        "marca": "Mazda", 
                        "modelo": 2017, 
                        "cilindraje(litros)": 2.5, 
                        "combustible": "Gasolina" })

db.Productos.insert({   "Nombre": "Aveo Emotion", 
                        "marca": "Chevrolet", 
                        "modelo": 2015, 
                        "cilindraje(litros)": 1.6, 
                        "combustible": "Gasolina"})

db.Productos.find(
{
    "marca": "Toyota"
},
{
    "modelo": false
})

db.Productos.remove({
    marca: "Toyota"
})

db.Productos.update({
    marca: "Toyota"
},{
    $inc:{
        "cilindraje(litros)":1
    }
})

db.system.js.save({
    _id: "CambiarCilindraje",
    value: function (cilindrajeNuevo, nombreDeAuto){
        db.Productos.update (
            {"Nombre": nombreDeAuto},
            {$set:{"cilindraje": cilindrajeNuevo}}
        )
    }
})
db.loadServerScripts()

CambiarCilindraje(5.0, "CX-5")

db.system.js.save({
    _id: "CambiarCilindraje",
    value: function (cilindrajeNuevo, nombreDeAuto){
        res=""
        var automovil=db.Productos.find({Nombre: nombreDeAuto})
        var automovilArray=automovil.toArray()
        if( automovilArray[0].cilindraje <5.0 ){
            if(cilindrajeNuevo < 5.0){
                db.Productos.update (
                    {"Nombre": nombreDeAuto},
                    {$set:{"cilindraje(litros)": cilindrajeNuevo}}
                )
                res="Modificacion exitosa"
            }else{
                res="El cilindraje insertado es invalido, "+ cilindrajeNuevo 
            }
        }else{
            res="El cilindraje actual presenta inconsistencias, " + automovilArray[0].cilindraje(litros)
        }
        res
    }
})

db.loadServerScripts()

