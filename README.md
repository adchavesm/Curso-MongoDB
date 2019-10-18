# Curso-MongoDB
Mongodb es una base de datos que basa su estructura en documentos, estos documentos llamados Bson que se podria decir que es la misma estructura tipo json(es la estructura que maneja javaScript para almacenar sus objetos).

Existen varias maneras de conectarse y trabajar en una base de datos mongodb, que se mencionan a continuacion:
-Mongodb atlas, el cual es un servicio de hosting servido por la misma compañía creadora(estas maquinas tienen un costo, pero existen maquinas gratuitas con poca capacidad, con fines educativos)
-Local, podemos crear un cluster(que estara corriendo como un servicio) en nuestro computador y conectarnos a este, esta es la forma mas comoda, para aprender a trabajar con mongoDB, ya que poseemos espacio ilimitado y no vamos a tener problemas de conexión, gracias a esto podremos tener un acceso total a nuestro cluster de mongodb.
-Imagen de docker, si estamos utilizando linux, podemos arrancar un contenedor de mongoDB, sin descargar nada,  docker nos permite esto, gracias a que docker tiene en su nube la imagen para arrancar mongodb.
-Existen muchas mas formas, pero serian derivadas de estas y para el objetivo de el curso, vamos a trabajar con la manera local.

##Una vez mencionada sus formas de obtener mongoDB, vamos a mirar como hacer una instalacion local:

-Vamos a la pagina oficial de mongodb y descargaremos la version “Community Server”:
elegiremos nuestro sistema operativo.

-instalamos el archivo descargado como corresponda a nuestro sistema operativo.

- agregamos la ruta al path, para poder ejecutar sus comandos desde cualquier ubicación de la consola del sistema.

-ejecutamos mongod, para arrancar el cluster.

- ejecutamos mongo, para ejecutar una shell que nos permitira interactuar con el cluster.

## Alternativa

3t studio es un IDE que nos facilita la interaccion con mongodb, recomiendo usarlo, ya que es mas amigable de usar que la shell.