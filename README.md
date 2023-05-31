# primer-parcial-certi-react

Repositorio para subir el proyecto del primer parcial de la certificación en react

Link del Drive: https://drive.google.com/drive/folders/1OYpAHP9W7LRhbWA_G-201W0NU7EOHk9J?usp=sharing

Link del Repositorio: https://github.com/JZane21/primer-parcial-certi-react

## Objetivo del proyecto

El objetivo del presente proyecto, es demostrar los conocimientos adquiridos en la materia de Certificación en React. Para ello, se elaboró el proyecto como una aplicación web, la cual tiene como propósito registrar las tareas o pendientes que el usuario desee agregar, para luego editar, marcar o desmarcar como completada, o incluso eliminar dichas tareas.

## ¿Como funciona?

### Inicio

Se muestra una pantalla inicial, la cual solo tiene el **header** y un **boton** para agregar una nueva tarea a la aplicación

### Click en el botón

Al hacer click en el boton con el simbolo **+**, se lanza un modal, con un formulario, el cual sirve para añadir una nueva tarea a la aplicación

### Formulario de Nuevo TODO

Ingresamos los datos requeridos en el formulario, en caso de no tener algún espacio llenado correctamente o vacío, se lanzará una notificación de error, con el fin de dar a entender que los campos no fueron llenados correctamente. Una vez llenado correctamente, se debe enviar el formulario con el botón **AGREGAR TAREA**. En caso de no querer enviar formulario, se debe pulsar el botón **CANCELAR**.

### Mensaje de envío

En caso de enviar la nueva tarea, aparecerá un mensaje, el cual mencionará que el formulario fue enviado correctamente. Para cerrarlo se debe dar click en **ACEPTAR**

### Nuevo estado de la pantalla principal

Se observará que además de agregarse la nueva tarea a la página, también se agregan:
* un contador que nos dice cuantas tareas hemos completado.
* un buscador, con el fin de usarlo para encontrar rápidamente una tarea en la lista de tareas.
* botones, los cuales se usan para mostrar una lista de tareas, dependiendo del nivel de prioridad de una tarea, el cual se tuvo que haber establecido en el **Formulario de Nuevo TODO**

### Tarea

Cada tarea, tiene las siguientes opciones:

* editar con el botón(icono) en forma de lapiz encerrado en un cuadrado. Al hacer esto, se desplegará un formualrio, el cual nos traerá los datos que ya tenía la tarea, para luego, decidir si queremos cambiar los datos o no, con los datos escritos correctamente, ya que lo contrario nos saldrá un error avisando de que los datos no se llenaron correctamente o están vacíos. Una vez llenado correctamente, se debe enviar el formulario con el botón **AGREGAR TAREA**. En caso de no querer enviar formulario, se debe pulsar el botón **CANCELAR**.
* marcar o desmarcar como completada una tarea con el botón(icono) en forma de check.
* eliminar una tarea con el botón(icono) en forma de basurero.

## Instalación

Para instalar este programa, se debe seguir los siguientes pasos:

* descargar el archivo comprimido. Para lograrlo, dar click en el botón **<>code**, para luego seleccionar la opción **Download ZIP**

* ir al directorio en donde se descargó el archivo comprimido. Al encontrarlo, moverlo si se lo deseea. Luego, descomprimirlo.

* instalar NodeJS.

* ingresar a la carpeta donde se encuentra el programa con Visual Studio Code (en caso de no tenerlo, descargarlo).

* abrir una terminal en el editor de código con la opción **terminal** en la parte superior del editor.

* ejecutar el comando npm install.

* ejecutar el comando npm run dev.

Si se siguió el procedimiento correctamente, se debió abrir el pograma correctamente, al cual puede acceder a través de la URL, la cual es proporcionada a través de la terminal.
