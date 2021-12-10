console.log("hello friend");

//////CATCH THE DOM

// seccion de inicio de sesion
const emailInicioSesion = document.getElementById("emailInicioSesion");
const  alertEmailInicioSesion = document.getElementById("alertEmailInicioSesion");

const passwordInicioSesion = document.getElementById("passwordInicioSesion");
const alertPasswordInicioSesion = document.getElementById("alertPasswordInicioSesion");

const butIniciarSesion = document.getElementById("butIniciarSesion");
//------------------------

// seccion de registrar ususario
const regUserIdentification = document.getElementById("regUserIdentification");
const alertRegUserIdentification = document.getElementById("alertRegUserIdentification");

const regUserName = document.getElementById("regUserName");
const alertRegUserName = document.getElementById("alertRegUserName");

const regUserAddress= document.getElementById("regUserAddress");
const alertRegUserAddress = document.getElementById("alertRegUserAddress");

const regUserCellphone = document.getElementById("regUserCellphone");
const alertRegUserCellphone = document.getElementById("alertRegUserCellphone");

const regUserEmail = document.getElementById("regUserEmail");
const alertRegUserEmail = document.getElementById("alertRegUserEmail");

const regUserPassword = document.getElementById("regUserPassword");
const alertRegUserPassword = document.getElementById("alertRegUserPassword");

const regUserZone = document.getElementById("regUserZone");
const alertRegUserZone = document.getElementById("alertregUserZone");

const regUserType = document.getElementById("regUserType");
const alertRegUserType = document.getElementById("alertregUserType");


const buttonRegUser = document.getElementById("buttonRegUser");
//------------------------


// seccion de registrar laptop

const regLaptopBrand = document.getElementById("regLaptopBrand");
const alertRegLaptopBrand = document.getElementById("alertRegLaptopBrand");

const regLaptopModel = document.getElementById("regLaptopModel");
const alertregLaptopModel = document.getElementById("alertregLaptopModel");

const regLaptopProcesor = document.getElementById("regLaptopProcesor");
const alertregLaptopProcesor = document.getElementById("alertregLaptopProcesor");

const regLaptopOs = document.getElementById("regLaptopOs");
const alertRegLaptopOs = document.getElementById("alertRegLaptopOs");

const regLaptopDescription = document.getElementById("regLaptopDescription");
const alertRegLaptopDescription = document.getElementById("alertRegLaptopDescription");

const regLaptopMemory = document.getElementById("regLaptopMemory");
const alertRegLaptopMemory = document.getElementById("alertRegLaptopMemory");

const regLaptopHarDrive = document.getElementById("regLaptopHarDrive");
const alertRegLaptopHarDrive = document.getElementById("alertRegLaptopHarDrive");

const regLaptopAvailable = document.getElementById("regLaptopAvailable");
const alertRegLaptopAvailable = document.getElementById("alertRegLaptopAvailable");

const regLaptopPrice = document.getElementById("regLaptopPrice");
const alertRegLaptopPrice = document.getElementById("alertRegLaptopPrice");

const regLaptopQuantity = document.getElementById("regLaptopQuantity");
const alertRegLaptopQuantity = document.getElementById("alertRegLaptopQuantity");

const regLaptopPhoto = document.getElementById("regLaptopPhoto");
const alertRegLaptopPhoto = document.getElementById("alertRegLaptopPhoto");

const buttonRegLaptop = document.getElementById("buttonRegLaptop");
//------------------------

//botones para actualizar tablas
const refreshTableUser = document.getElementById("refreshTableUser");
const refreshTableLaptops = document.getElementById("refreshTableLaptops");


//  campos de la vertana emergente para actualizar
 let botonCerrarUpdate = document.getElementById("butCerrarUpdate");
 let ventanaUpdate= document.getElementById("ventanaUpdate");
 let fondo = document.body;
 let botonArrastrar = document.getElementById("botonArrastrar");


//------------------------------
//botones para actualizar usuario (UPDATE)

const regUserUpdateIdentification = document.getElementById("regUserUpdateIdentification");
const alertRegUserUpdateIdentification = document.getElementById("alertRegUserUpdateIdentification");

const regUserUpdateName = document.getElementById("regUserUpdateName");
const alertRegUserUpdateName = document.getElementById("alertRegUserUpdateName");

const regUserUpdateAddress= document.getElementById("regUserUpdateAddress");
const alertRegUserUpdateAddress = document.getElementById("alertRegUserUpdateAddress");

const regUserUpdateCellphone = document.getElementById("regUserUpdateCellphone");
const alertRegUserUpdateCellphone = document.getElementById("alertRegUserUpdateCellphone");

const regUserUpdateEmail = document.getElementById("regUserUpdateEmail");
const alertRegUserUpdateEmail = document.getElementById("alertRegUserUpdateEmail");

const regUserUpdatePassword = document.getElementById("regUserUpdatePassword");
const alertRegUserUpdatePassword = document.getElementById("alertRegUserUpdatePassword");

const regUserUpdateZone = document.getElementById("regUserUpdateZone");
const alertRegUserUpdateZone = document.getElementById("alertregUserUpdateZone");

const regUpdateUserType = document.getElementById("regUpdateUserType");
const alertRegUserUpdateType = document.getElementById("alertRegUserUpdateType");


const buttonRegUserUpdate = document.getElementById("buttonRegUserUpdate");

//////

//  campos de la vertana emergente para actualizar
 let botonCerrarUpdateLaptop = document.getElementById("butCerrarUpdateLaptop");
 let ventanaUpdateLaptop= document.getElementById("ventanaUpdateLaptop");
 // let fondo = document.body; ya declarada a arriba
 let botonArrastrarLaptop = document.getElementById("botonArrastrarLaptop");
 let botonArrastrarLaptopRight = document.getElementById("botonArrastrarLaptopRight");




//botones para actualizar laptop (UPDATE)

const regLaptopUpdateBrand = document.getElementById("regLaptopUpdateBrand");
const alertRegLaptopUpdateBrand = document.getElementById("alertRegLaptopUpdateBrand");

const regLaptopUpdateModel = document.getElementById("regLaptopUpdateModel");
const alertregLaptopUpdateModel = document.getElementById("alertregLaptopUpdateModel");

const regLaptopUpdateProcesor = document.getElementById("regLaptopUpdateProcesor");
const alertregLaptopUpdateProcesor = document.getElementById("alertregLaptopUpdateProcesor");

const regLaptopUpdateOs = document.getElementById("regLaptopUpdateOs");
const alertRegLaptopUpdateOs = document.getElementById("alertRegLaptopUpdateOs");

const regLaptopUpdateDescription = document.getElementById("regLaptopUpdateDescription");
const alertRegLaptopUpdateDescription = document.getElementById("alertRegLaptopUpdateDescription");

const regLaptopUpdateMemory = document.getElementById("regLaptopUpdateMemory");
const alertRegLaptopUpdateMemory = document.getElementById("alertRegLaptopUpdateMemory");

const regLaptopUpdateHardDrive = document.getElementById("regLaptopUpdateHardDrive");
const alertRegLaptopUpdateHardDrive = document.getElementById("alertRegLaptopUpdateHardDrive");

const regLaptopUpdateAvailable = document.getElementById("regLaptopUpdateAvailable");
const alertRegLaptopUpdateAvailable = document.getElementById("alertRegLaptopUpdateAvailable");

const regLaptopUpdatePrice = document.getElementById("regLaptopUpdatePrice");
const alertRegLaptopUpdatePrice = document.getElementById("alertRegLaptopUpdatePrice");

const regLaptopUpdateQuantity = document.getElementById("regLaptopUpdateQuantity");
const alertRegLaptopUpdateQuantity = document.getElementById("alertRegLaptopUpdateQuantity");

const regLaptopUpdatePhotography = document.getElementById("regLaptopUpdatePhotography");
const alertRegLaptopUpdatePhotography = document.getElementById("alertRegLaptopUpdatePhotography");

const buttonRegLaptopUpdate = document.getElementById("buttonRegLaptopUpdate");




////---------------------- 





// variables 

//  esta variables llevan el indice maximo  
let numeroIdUsuario = 0;
let numeroIdLaptop = 0;
let validoGuardar = false;
let indiceActualizar = 0;
let indiceActualizarLaptop= 0;

// aqui  defino la url para no estar cambiandola en cada peticion
const ruta = "http://129.151.118.163:8080/api"
//const ruta = "http://localhost:8080/api"


////Arrays para hacer pruebas de llenado de tablas
var ArrayUsuarios = [

{ "id": 1, "identification": "123456", "name": "alan brito", "address": "CR 34-45", "cellPhone": "311222222", "email": "alanbrito@gmail.com", "password": "Demo123.", "zone": "ZONA 1", "type": "COORD"},

{ "id": 2, "identification": "123456", "name": "alan brito", "address": "CR 34-45", "cellPhone": "311222222", "email": "alanbrito@gmail.com", "password": "Demo123.", "zone": "ZONA 1", "type": "COORD"},

{ "id": 3, "identification": "123456", "name": "alan brito", "address": "CR 34-45", "cellPhone": "311222222", "email": "alanbrito@gmail.com", "password": "Demo123.", "zone": "ZONA 1", "type": "COORD"},

{ "id": 4, "identification": "123456", "name": "alan brito", "address": "CR 34-45", "cellPhone": "311222222", "email": "alanbrito@gmail.com", "password": "Demo123.", "zone": "ZONA 1", "type": "COORD"},

{ "id": 5, "identification": "123456", "name": "alan brito", "address": "CR 34-45", "cellPhone": "311222222", "email": "alanbrito@gmail.com", "password": "Demo123.", "zone": "ZONA 1", "type": "COORD"},


{ "id": 6, "identification": "123456", "name": "alan brito", "address": "CR 34-45", "cellPhone": "311222222", "email": "alanbrito@gmail.com", "password": "Demo123.", "zone": "ZONA 1", "type": "COORD"},

{ "id": 7, "identification": "123456", "name": "alan brito", "address": "CR 34-45", "cellPhone": "311222222", "email": "alanbrito@gmail.com", "password": "Demo123.", "zone": "ZONA 1", "type": "COORD"},
]

var ArrayLaptops = 
[
    
    {"id":1,"brand":"DELL","model":"WE67-1","procesor":"CORE I5","os":"Ubuntu","description":"Buen rendimiento","memory":"32gb","hardDrive":"5T","availability":true,"price":350000.0,"quantity":20,"photography":"laptop.png"},

    {"id":2,"brand":"DELL","model":"WE67-1","procesor":"CORE I5","os":"Ubuntu","description":"Buen rendimiento","memory":"32gb","hardDrive":"5T","availability":true,"price":350000.0,"quantity":20,"photography":"laptop.png"},

    {"id":3,"brand":"DELL","model":"WE67-1","procesor":"CORE I5","os":"Ubuntu","description":"Buen rendimiento","memory":"32gb","hardDrive":"5T","availability":true,"price":350000.0,"quantity":20,"photography":"laptop.png"},

    {"id":4,"brand":"DELL","model":"WE67-1","procesor":"CORE I5","os":"Ubuntu","description":"Buen rendimiento","memory":"32gb","hardDrive":"5T","availability":true,"price":350000.0,"quantity":20,"photography":"laptop.png"},


    {"id":5,"brand":"DELL","model":"WE67-1","procesor":"CORE I5","os":"Ubuntu","description":"Buen rendimiento","memory":"32gb","hardDrive":"5T","availability":true,"price":350000.0,"quantity":20,"photography":"laptop.png"},

    {"id":6,"brand":"DELL","model":"WE67-1","procesor":"CORE I5","os":"Ubuntu","description":"Buen rendimiento","memory":"32gb","hardDrive":"5T","availability":true,"price":350000.0,"quantity":20,"photography":"laptop.png"},

    {"id":7,"brand":"DELL","model":"WE67-1","procesor":"CORE I5","os":"Ubuntu","description":"Buen rendimiento","memory":"32gb","hardDrive":"5T","availability":true,"price":350000.0,"quantity":20,"photography":"laptop.png"}
]

/////////////// FUNCIONES //////////////////

// funcion para validad que el email tenga un formato correcto
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }

    return (false)
}

// para que el precio se muestre bonito
const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
})


function buildTableUser(){
    var table = document.getElementById('tableUsuarios');
     //para limpiarla
    table.innerHTML = "";

    /////obetner datos de la base de datos

     $.ajax({
        url: ruta + '/user/all',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("-----lo quie viene del backend------");
            console.log(data);
           
            
                for (var i = 0; i < data.length; i++){
                    var row = `<tr>
                       
                        <td>${data[i].identification}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].address}</td>
                        <td>${data[i].cellPhone}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].password}</td>
                        <td>${data[i].zone}</td>
                        <td>${data[i].type}</td>
                        <td>
                        <button type="button" class="botonEditar" onclick = "ActualizarDatosUser(${data[i].id})">  
                            <i class="fas fa-edit " id></i>   
                        </button>
                        <button type="button" class="botonEliminar" onclick = "EliminarDatos(${data[i].id}, 'user')"> 
                            <i class="fas fa-trash-alt"></i>
                        </button>    
                        </td>
                  </tr>`
                  table.innerHTML += row 
                }

        },
        error: function () {
            mostrarAlertas(alertEmailInicioSesion, "no se pudo conectar", "danger")
            console.log("no se pudo conectar");

        }
    })
    



}


function buildTableLaptop(){

    var table = document.getElementById('tableLaptops');
     //para limpiarla
    table.innerHTML = "";
   

    /////obtener datos de la base de datos

     $.ajax({
        url: ruta + '/laptop/all',
  
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("-----lo quie viene del backend------");
            console.log(data);
          

                for (var i = 0; i < data.length; i++){
                        var row = `<tr>
                   
                        <td>${data[i].brand}</td>
                        <td>${data[i].model}</td>
                        <td>${data[i].procesor}</td>
                        <td>${data[i].os}</td>
                        <td>${data[i].description}</td>
                        <td>${data[i].memory}</td>
                        <td>${data[i].hardDrive}</td>
                        <td>${data[i].availability}</td>
                        <td>${formatter.format(data[i].price.toString())}</td>
                        <td>${data[i].quantity}</td>
                        <td>${data[i].photography}</td>
                        <td>
                        <button type="button" class="botonEditar" onclick = "ActualizarDatosLaptop(${data[i].id})">  
                            <i class="fas fa-edit" id></i>   
                        </button>
                        <button type="button" class="botonEliminar" onclick = "EliminarDatos(${data[i].id},'laptop')"> 
                            <i class="fas fa-trash-alt"></i>
                        </button>    
                        </td>

                      
                  </tr>`
                 table.innerHTML += row 
                }

            
              


        },
        error: function () {
            mostrarAlertas(alertEmailInicioSesion, "no se pudo conectar", "danger")
            console.log("no se pudo conectar");

        }
    })
    
    


}


// funcion para mostrar alerts
function mostrarAlertas(objeto, message, tipoAlerta,){

        objeto.innerHTML = message
        objeto.classList.add("alert");  
        objeto.classList.add("alert-"+tipoAlerta); 

        setTimeout(function(){
         
         objeto.innerHTML = "";
         objeto.classList.remove("alert");  
         objeto.classList.remove("alert-"+tipoAlerta); 

        }, 1500);
}


// validar datos antes de enviar al backend
function validarInicioSesion() {

    var correo = emailInicioSesion.value;
    var contrasena = passwordInicioSesion.value;
    $.ajax({
        url: ruta + '/user/' + correo + "/" + contrasena,

        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("-----lo quie viene del backend------");
            console.log(data);
            if (data.id == null) {
                mostrarAlertas(alertEmailInicioSesion, "No existe usuario o contrasena es incorrecta", "danger")
                
                emailInicioSesion.value = "";
                passwordInicioSesion.value="";
            }
            else {
                var mensaje = "Bienvenido " + data.name; 
                mostrarAlertas(alertEmailInicioSesion, mensaje, "success")
                emailInicioSesion.value = "";
                passwordInicioSesion.value="";
            }

        },
        error: function () {
            mostrarAlertas(alertEmailInicioSesion, "no se pudo conectar", "danger")
            console.log("no se pudo conectar");
            emailInicioSesion.value = "";
            passwordInicioSesion.value="";
        }
    })
}

// validar que datos ingresados tengan el formato correcto
function validarButIniciarSesion() {

    if (emailInicioSesion.value == "" || passwordInicioSesion.value == "") {
        console.log("valores invalidos");
        mostrarAlertas(alertEmailInicioSesion, "Los campos no pueden estar vacios", "danger")

    
    }
    else if (ValidateEmail(emailInicioSesion.value) == false) {

        mostrarAlertas(alertEmailInicioSesion, "Formato de email es erroneo", "danger")



    }
    else {
        //ambos datos son correctos
        validarInicioSesion();
    }
}


// funcionar para saber el ID del ultimo elemento guardado
function obtenerID(pointer){
 

    $.ajax({
            url: ruta + `/${pointer}/all`,
    
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("lo que llego del back-end es:");
                console.log(data);
                console.log("La longitud es: " + data.length)
                if(data.length == 0 ) {
                    // no hay registros
                    if(pointer == "user"){
                    numeroIdUsuario = 1;
                    console.log("numero ID user ahora vale: "+ numeroIdUsuario);
                    }
                    else if (pointer == "laptop"){
                        numeroIdLaptop=1
                        console.log("numero ID laptop ahora vale: "+ numeroIdLaptop);
                    }

                }
                else{
                // si hay datos        
                console.log("el id del ultimo documento es: " + data[data.length-1].id);
                let valorX = data[data.length-1].id;
                console.log("El numero ID  actual del user es: "+ numeroIdUsuario);
                console.log("El numero ID actual del laptop es: "+ numeroIdLaptop);

                if(pointer == "user"){
                    numeroIdUsuario = valorX+1;
                    console.log("numero ID user ahora vale: "+ numeroIdUsuario);
                    }
                    else if (pointer == "laptop"){
                        numeroIdLaptop = valorX+1;
                         console.log("numero ID laptop ahora vale: "+ numeroIdLaptop);
                    }
                }
            },
            error: function () {
                console.log("no se pudo conectar");
                }
        })
        
           
}

// se activa al dar click en el boton editar
function ActualizarDatosUser (id){

    ventanaUpdate.style.visibility = "visible";
    fondo.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    indiceActualizar = id;
}

/// para validar los datos del formulario de update
 function revisarUpdateinfo(){

        console.log("llamado desde pop-up udpate");
        console.log("en indice a actiualizar es :" + indiceActualizar);
        
        if (regUserUpdateIdentification.value == "" || regUserUpdateName.value == "" || regUserUpdateAddress.value == "" || regUserUpdateCellphone.value == "" || regUserUpdateEmail.value == "" || regUserUpdatePassword.value == "" || regUserUpdateZone.value == ""   || regUpdateUserType.value == "" ) {
        
        mostrarAlertas(alertRegUserUpdateType, "Todos los valores son necesarios", "danger")
       
        
        }
        
        else if (ValidateEmail(regUserUpdateEmail.value) == false) {

            mostrarAlertas(alertRegUserUpdateType, "Formato de email es erroneo", "danger")
            
            
        }
        else {
            // todo valido
            console.log("listo para enviar a put");
          
                var data = {

                id: indiceActualizar,
                identification:  regUserUpdateIdentification.value,
                name: regUserUpdateName.value ,
                address: regUserUpdateAddress.value ,
                cellPhone: regUserUpdateCellphone.value,
                email :  regUserUpdateEmail.value,
                password :regUserUpdatePassword.value ,
                zone : regUserUpdateZone.value,
                type : regUpdateUserType.value
            };

                //type : regUpdateUserType.value 
                console.log(data);

                $.ajax({
                url: ruta + '/user/update',
     
                type: 'PUT',
                dataType: 'json',
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: {
                    200: function (data) {
                        //alert("Cuenta creada de manera correcta")
                        mostrarAlertas(alertRegUserUpdateType, "Usuario actualizado de manera correcta", "success")

                        regUserUpdateIdentification.value = "";
                        regUserUpdateName.value = "";
                        regUserUpdateAddress.value = "";
                        regUserUpdateCellphone.value = "";
                        regUserUpdateEmail.value = "";
                        regUserUpdatePassword.value = "";
                        regUserUpdateZone.value = "";
                        regUpdateUserType.value = "";
                        setTimeout( ()=>{
                                 ventanaUpdate.style.visibility = "hidden";
                                 fondo.style.backgroundColor = "rgba(0, 167, 225, 1)";
                        }, 2000);
                        
                    
                        
                    },
                    415: function (data) {
                        //alert("No fue posible crear la cuenta");
                        mostrarAlertas(alertRegUserUpdateType, "No fue posible crear el usuario", "danger")
                        regUserUpdateIdentification.value = "";
                        regUserUpdateName.value = "";
                        regUserUpdateAddress.value = "";
                        regUserUpdateCellphone.value = "";
                        regUserUpdateEmail.value = "";
                        regUserUpdatePassword.value = "";
                        regUserUpdateZone.value = "";
                        regUpdateUserType.value = "";
                    }
                }
            }); 
   
            }
}

function ActualizarDatosLaptop(id){
    console.log("llego solicitud para actualizar laptop y el ID es: " + id);
    ventanaUpdateLaptop.style.visibility = "visible";
    fondo.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    indiceActualizarLaptop = id;
}


function EliminarDatos (id, collection){

    console.log("eliminar datos");
    console.log("el id es: " + id);
    console.log("la coleccion es "+ collection);

    $.ajax({
        url: ruta + `/${collection}/` + id ,
       
        type: 'DELETE',
        dataType: 'json',
        success: function (data) {
                mostrarAlertas(alertRegLaptopPhoto, "Registro eliminado", "secondary")             
        },
        error: function () {
            mostrarAlertas(alertRegLaptopPhoto, "No se pudo conectar", "danger")
            console.log("no se pudo conectar");
            }
    })
}

// funcion para guardar usuario

function guardarNuevoUser() {
        console.log("el indice que llega es "+ numeroIdUsuario) 
        console.log("Se puede guardar dato? " + validoGuardar );

        if(validoGuardar){

                var data = {

                id: numeroIdUsuario,
                identification:  regUserIdentification.value,
                name: regUserName.value ,
                address: regUserAddress.value ,
                cellPhone: regUserCellphone.value,
                email :  regUserEmail.value,
                password :regUserPassword.value ,
                zone : regUserZone.value,
                type: regUserType.value 
            };

            $.ajax({
                url: ruta + '/user/new',
                
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: {
                    201: function (data) {
                        //alert("Cuenta creada de manera correcta")
                        mostrarAlertas(alertRegUserType, "Usuario creado de manera correcta", "success")

                        regUserIdentification.value = "";
                        regUserName.value = "";
                        regUserAddress.value = "";
                        regUserCellphone.value = "";
                        regUserEmail.value = "";
                        regUserPassword.value = "";
                        regUserZone.value = "";
                        regUserType.value = "";``
                        
                    
                        
                    },
                    415: function (data) {
                        //alert("No fue posible crear la cuenta");
                        mostrarAlertas(alertRegUserType, "No fue posible crear el usuario", "danger")
                        regUserIdentification.value = "";
                        regUserName.value = "";
                        regUserAddress.value = "";
                        regUserCellphone.value = "";
                        regUserEmail.value = "";
                        regUserPassword.value = "";
                        regUserZone.value = "";
                        regUserType.value = "";
                        
                    }
                }
            }); 
        } 
        else {
            console.log("No se puede guardar, validoGuardar es false");
        }
}

// validar datos de registrar usuario
function validarButRegUser(fn) {
    
    if (regUserIdentification.value == "" || regUserName.value == "" || regUserAddress.value == "" || regUserCellphone.value == "" || regUserEmail.value == "" || regUserPassword.value == "" || regUserZone.value == ""   || regUserType.value == "" ) {
        
        mostrarAlertas(alertRegUserType, "Todos los valores son necesarios", "danger")
       
        
    }
    
    else if (ValidateEmail(regUserEmail.value) == false) {

        mostrarAlertas(alertRegUserType, "Formato de email es erroneo", "danger")
        
        
    }
    else {
        // todos los datos son correctos
            correo = regUserEmail.value;

            $.ajax({
            url: ruta + '/user/emailexist/' + correo,
         
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                if (data == true) {
                    // ya existe una cuenta con ese email
                    //alert("No fue posible crear la cuenta");
                     mostrarAlertas(alertRegUserType, "Correo ya registrado", "danger")
                     
                      
                }
                else {
                    // todo listo para guardar 
                    validoGuardar = true;
                    // callback
                    fn();
                }

            },
            error: function () {
                    console.log("no se pudo conectar");
                     regUserIdentification.value = "";
                     regUserName.value = "";
                     regUserAddress.value = "";
                     regUserCellphone.value = "";
                     regUserEmail.value = "";
                     regUserPassword.value = "";
                     regUserZone.value = "";
                     regUserType.value = "";
                }
            })
        }
}

function validarButRegLaptop(){

        

    if (regLaptopBrand.value == "" || regLaptopModel.value == "" || regLaptopProcesor.value == "" || regLaptopOs.value == "" || regLaptopDescription.value == "" || regLaptopMemory.value == "" || regLaptopHarDrive.value == ""   || regLaptopAvailable.value == "" || regLaptopPrice.value == "" || regLaptopQuantity.value == "" || regLaptopPhoto.value == "" ) {
        
        mostrarAlertas(alertRegLaptopPhoto, "Todos los valores son necesarios", "danger")
    }
    
    else if (regLaptopAvailable.value != "true" && regLaptopAvailable.value != "false") {
        mostrarAlertas(alertRegLaptopPhoto, "Available debe ser true or false", "danger")    
    }

    else if (isNaN(parseFloat(regLaptopPrice.value))){
        
      
        mostrarAlertas(alertRegLaptopPhoto, "El precio es incorrecto", "danger")   
    }

    else if (isNaN(parseInt(regLaptopQuantity.value))){

      
        mostrarAlertas(alertRegLaptopPhoto, "La cantidad es incorrecta es incorrecta", "danger")   
    }

    else {

        let precio = parseFloat(regLaptopPrice.value)
        let cantidad = parseInt(regLaptopQuantity.value)
        let disponible = true;
        if ( regLaptopAvailable.value == "false"){
            disponible = false;
        }

        // todos los datos son correctos, => se puede guardar
        var data = {
        id:   numeroIdLaptop,  
        brand: regLaptopBrand.value,
        model: regLaptopModel.value,
        procesor: regLaptopProcesor.value,
        os: regLaptopOs.value,
        description: regLaptopDescription.value,
        memory : regLaptopMemory.value,
        hardDrive : regLaptopHarDrive.value ,
        availability : disponible,
        price: precio,
        quantity : cantidad,
        photography :  regLaptopPhoto.value
    };

    $.ajax({
        url: ruta + '/laptop/new',

        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: {
            201: function (data) {
                //alert("Cuenta creada de manera correcta")
                mostrarAlertas(alertRegLaptopPhoto, "Laptop registrada correctamente ", "success")
                regLaptopBrand.value = "";
                regLaptopModel.value = "";
                regLaptopProcesor.value = "";
                regLaptopOs.value = "";
                regLaptopDescription.value = "";
                regLaptopMemory.value = "";
                regLaptopHarDrive.value = "";
                regLaptopAvailable.value = "";
                regLaptopPrice.value = "";
                regLaptopQuantity.value = "";
                regLaptopPhoto.value = "";

               
                
            },
            415: function (data) {
                //alert("No fue posible crear la cuenta");
                mostrarAlertas(alertRegLaptopPhoto, "No fue posible registrar laptop", "danger")

                regLaptopBrand.value = "";
                regLaptopModel.value = "";
                regLaptopProcesor.value = "";
                regLaptopOs.value = "";
                regLaptopDescription.value = "";
                regLaptopMemory.value = "";
                regLaptopHarDrive.value = "";
                regLaptopAvailable.value = "";
                regLaptopPrice.value = "";
                regLaptopQuantity.value = "";
                regLaptopPhoto.value = "";
            }
        }
    });


        
    }

}




////////////////////// funcion para arrastrar ventanas


    function onDragUpdateUser({movementX, movementY}){
      let getStyle = window.getComputedStyle(ventanaUpdate);
      let leftVal = parseInt(getStyle.left);
      let topVal = parseInt(getStyle.top);
      ventanaUpdate.style.left = `${leftVal + movementX}px`;
      ventanaUpdate.style.top = `${topVal + movementY}px`;
    }


    function onDragUpdateLaptop({movementX, movementY}){
      let getStyle = window.getComputedStyle(ventanaUpdateLaptop);
      let leftVal = parseInt(getStyle.left);
      let topVal = parseInt(getStyle.top);
      ventanaUpdateLaptop.style.left = `${leftVal + movementX}px`;
      ventanaUpdateLaptop.style.top = `${topVal + movementY}px`;
    }


    // validar datos del pop up de actualizar laptop
 function validarDatosUpdateLaptop(){
    console.log("llamado desde pop-up udpate laptop");
        console.log("en indice a actiualizar laptop es :" + indiceActualizarLaptop);
        
         if (regLaptopUpdateBrand.value == "" || regLaptopUpdateModel.value == "" || regLaptopUpdateProcesor.value == "" || regLaptopUpdateOs.value == "" || regLaptopUpdateDescription.value == "" || regLaptopUpdateMemory.value == "" || regLaptopUpdateHardDrive.value == ""   || regLaptopUpdateAvailable.value == "" || regLaptopUpdatePrice.value == "" || regLaptopUpdateQuantity.value == "" || regLaptopUpdatePhotography.value == "" ) {
        
        mostrarAlertas(alertRegLaptopUpdatePhotography, "Todos los valores son necesarios", "danger")
       
        
        }
        
        else if (regLaptopUpdateAvailable.value != "true" && regLaptopUpdateAvailable.value != "false") {
        mostrarAlertas(alertRegLaptopUpdatePhotography, "Available debe ser true or false", "danger")    
         }

        else if (isNaN(parseFloat(regLaptopUpdatePrice.value))){
        
      
        mostrarAlertas(alertRegLaptopUpdatePhotography, "El precio es incorrecto", "danger")   
            }


        else if (isNaN(parseInt(regLaptopUpdateQuantity.value))){

      
        mostrarAlertas(alertRegLaptopUpdatePhotography, "La cantidad es incorrecta es incorrecta", "danger")   
        }


        else {
            // todo valido
            console.log("listo para enviar a put");

                  let precio = parseFloat(regLaptopUpdatePrice.value)
                  let cantidad = parseInt(regLaptopUpdateQuantity.value)
                   let disponible = true;
                   if ( regLaptopUpdateAvailable.value == "false"){
                      disponible = false;
                        }

          
                var data = {

                    id:   indiceActualizarLaptop,  
                    brand: regLaptopUpdateBrand.value,
                    model: regLaptopUpdateModel.value,
                    procesor: regLaptopUpdateProcesor.value,
                    os: regLaptopUpdateOs.value,
                    description: regLaptopUpdateDescription.value,
                    memory : regLaptopUpdateMemory.value,
                    hardDrive : regLaptopUpdateHardDrive.value ,
                    availability : disponible,
                    price: precio,
                    quantity : cantidad,
                    photography :  regLaptopUpdatePhotography.value
            };

                //type : regUpdateUserType.value 
                console.log(data);

                $.ajax({
                url: ruta + '/laptop/update',
               
                type: 'PUT',
                dataType: 'json',
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: {
                    200: function (data) {
                        //alert("Cuenta creada de manera correcta")
                        mostrarAlertas(alertRegLaptopUpdatePhotography, "Usuario actualizado de manera correcta", "success")

        
                        setTimeout( ()=>{
                                 ventanaUpdateLaptop.style.visibility = "hidden";
                                 fondo.style.backgroundColor = "rgba(0, 167, 225, 1)";
                        }, 2000);
                        
                    
                        
                    },
                    415: function (data) {
                        //alert("No fue posible crear la cuenta");
                        mostrarAlertas(alertRegLaptopUpdatePhotography, "No fue posible crear el usuario", "danger")
            
                    }
                }
            }); 
   
        }
}



// ************** inicio de rutinas

obtenerID("user");
obtenerID("laptop");

buildTableUser();
buildTableLaptop();

butIniciarSesion.addEventListener("click", () => validarButIniciarSesion());

refreshTableUser.addEventListener("click", ()=> buildTableUser());
refreshTableLaptops.addEventListener("click", ()=> buildTableLaptop());


buttonRegUser.addEventListener("click", 
function(event){event.preventDefault();  
validarButRegUser(guardarNuevoUser);
obtenerID("user");

 });


buttonRegLaptop.addEventListener("click", 
function(event){event.preventDefault();  
validarButRegLaptop();
obtenerID("laptop");
 });


 botonCerrarUpdate.addEventListener("click", ()=>{
    ventanaUpdate.style.visibility = "hidden";
    fondo.style.backgroundColor = "rgba(0, 167, 225, 1)";

 });
 
/////// listener de la ventana update user

//botonArrastrar
//ventanaUpdate

botonArrastrar.addEventListener("mousedown", ()=>{
      botonArrastrar.classList.add("active");
      botonArrastrar.addEventListener("mousemove", onDragUpdateUser);
    });

document.addEventListener("mouseup", ()=>{
      botonArrastrar.classList.remove("active");
      botonArrastrar.removeEventListener("mousemove", onDragUpdateUser);
    });





buttonRegUserUpdate.addEventListener("click", 
    function(event){event.preventDefault();  
    revisarUpdateinfo();
 });    

 /// listeners del pop-up de update laptop


//botonArrastrar
//ventanaUpdate laptop

botonArrastrarLaptop.addEventListener("mousedown", ()=>{
      botonArrastrarLaptop.classList.add("active");
      botonArrastrarLaptop.addEventListener("mousemove", onDragUpdateLaptop);
    });

document.addEventListener("mouseup", ()=>{
      botonArrastrarLaptop.classList.remove("active");
      botonArrastrarLaptop.removeEventListener("mousemove", onDragUpdateLaptop);
    });


    ///// boton arrastrar de la derecha

botonArrastrarLaptopRight.addEventListener("mousedown", ()=>{
      botonArrastrarLaptopRight.classList.add("active");
      botonArrastrarLaptopRight.addEventListener("mousemove", onDragUpdateLaptop);
    });

document.addEventListener("mouseup", ()=>{
      botonArrastrarLaptopRight.classList.remove("active");
      botonArrastrarLaptopRight.removeEventListener("mousemove", onDragUpdateLaptop);
    });


  butCerrarUpdateLaptop.addEventListener("click", ()=>{
    ventanaUpdateLaptop.style.visibility = "hidden";
    fondo.style.backgroundColor = "rgba(0, 167, 225, 1)";

 });


 buttonRegLaptopUpdate.addEventListener("click",
     function(event){event.preventDefault(); 
     validarDatosUpdateLaptop();   

    console.log(regLaptopUpdateBrand.value);
    console.log(regLaptopUpdateModel.value);
     console.log(regLaptopUpdateProcesor.value);
      console.log(regLaptopUpdateOs.value);
       console.log(regLaptopUpdateDescription.value);
        console.log(regLaptopUpdateMemory.value);
         console.log(regLaptopUpdateHardDrive.value);
          console.log(regLaptopUpdateAvailable.value);
           console.log(regLaptopUpdatePrice.value);
            console.log(regLaptopUpdateQuantity.value);
             console.log(regLaptopUpdatePhotography.value);




 })
// para probar funcion "pretty"
//  var value = 10000
// console.log(formatter.format(value)) // "$10,000
