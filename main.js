window.onload=calcularDatos()

function calcularDatos(){
 let nacimiento= new Date('1993-01-27')
 let hoy = new Date()
 let edadEnDias = (hoy-nacimiento)/(1000*3600*24)/365
 let edadEntera = parseInt(edadEnDias)
 document.getElementById("edad").innerHTML = edadEntera
 let ingresoUTI = new Date('2021-10-1')
 antiguedadUTI=(hoy-ingresoUTI)/(1000*3600*24)/30
 let antiguedadUTIEntero = parseInt(antiguedadUTI)
 document.getElementById("antiguedad-uti").innerHTML = antiguedadUTIEntero

}

