/**
Este documento fue creado con el fin de practicar la estructura
de la SPA y manipulación del DOM desde JS, ya se encuentra con
los archivos db.json, index.html y style.css enlazados
Recuerda porfavor instalar los paquetes de npm y la base de datos falsa
con JSON (busquenla en la página npm para instarla)
NOTA: PORFAVOR TENGAN CUIDADO CON LOS IDs Y LAS CLASES, JUEGAN UN PAPEL IMPORTANTE

Esta plantilla fue creada con comentarios usados como un paso a paso para interpretar la creación de la SPA
Su unico trabajo es imitar el primer código mostrado por mi persona con sus conocimientos.
preferiblemente realizar esta actividad en grupo. 
*/

//--------------------------------------------------------------------------------------------
//Declaración de constantes, recuerda que aquí vamos a declarar sections, botones y el mensaje
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Funcion para cambiar vista
//PISTA: utiliza classList para agregar ".remove" y ".add"
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Funcion login
//Preferiblemente un funcion asincrona que les permita agregar un evento
//declaren las constantes con los inputs (recuerden el .value)
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//(dentro de la misma funcion)
//Validación de los inputs vacios, puedes usar ".textcontent" para mostrar
//el mensaje desde el html (DOM), no olviden el return
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Seguimos dentro de la funcion
//PISTA = comencemos con un try para colocar un catch en caso de problemas con el
//servidor
//Vamos a consumir la API falsa hecha con json, recuerden que estamos usando axios
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Encontrar usuario (todavía no cerramos la función)
//usar la funcion de js "find"
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Validación de usuario encontrado
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Validación de contraseña adecuada
//--------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------
// CLEAN MESSAGE
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
// SHOW HOME VIEW
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
// LLamar a loadProducts para asegurar que la página pase de login a inicio sin recargar
//Aquí cerramos el try con un catch en caso de que el servidor no este funcionando
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Función de cargar productos
//Recuerda que debe ser asincrona para llamar a la API,
//Antes de comenzar con la función recuerda limpiar el "container"
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Otra vez try, vamos a llamar a la API pero esta vez para los productos
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Render de los productos (aquí agregamos el catch)
//Puedes utilizar el metodo "forEach", para modificar los elementos,
//la clave esta en manipular el DOM utilizando innerHTML para agregar infromación de la db JSON
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Got to contactView
//añadir evento al boton, limpiar el formulario de contacto e implementar la funcion showView
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Hacer lo mismo para el botón volver a home, aquí no es necesario limpiar
//--------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------
//Limpiar formulario
//La más sencilla llama a los inputs y otorgales un valor nulo.
//lo mismo con los mensajes de error
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Hacemos un proceso similar para enviar el formulario
//creamos los constantes (input y errores)de nombre. mail y mensaje le agregamos el value y el .trim
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Borramos los mensajes de error con .textContent
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
// NAME VALIDATION, usamos .textcontent para enviar el mensaje si no ingresaron nada
//--------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------
//Mismo proceso con la validación del email y el mensaje, para el email
//recuerda agregar "@" y "."
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//Mostrar mensaje de enviado satisfactoriamente y limpiar formulario
//--------------------------------------------------------------------------------------------


//EXITOS
