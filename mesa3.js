var mesa = (function(user,pas,master,otro,rotate = false){
    var usuario = user;
    var pass = pas;
    var contenedor = master;
    var id = "#"+master;
    var idleTime = 60;
    var opciones = [];
    var lista = [];
    var tag = otro;
    var rotar = rotate;

    var cuenta = () => {
        $(id + "_body").empty();
        $(id + "_body").append("<div class='row'><h2 class='food-title'>Detalle de cuenta / seleccionados</h2></div>")
        $(id + "_body").append("<div class='row'><div class='col-md-12'><butt</div></div>");
        $(id + "_body").append("<div class='row confirm-row'><span class='confirm-button'><button class='btn btn-outline-primary'>Confirmar</button></span></div>");

    }








    var salvapantalla = () => {
        $(id).append("<div class='mascarade'></div>").children(".mascarade").append("<span class='reloj'></span><h2 class='puesto'>"+tag+"</h2><span class='mensaje'>Bienvenido</span>");
        $(id+" .mascarade").click(function () {$(this).slideToggle();idleTime = 20;});
        $(id).click(function(){idleTime = 60;});
        setInterval(function(){idle();}, 1000);
        setInterval(function(){Clock();}, 1000);
    }

    var idle = () => {
        if(idleTime !== 0){
            idleTime = idleTime - 1;
        }else{
            if($(id+" .mascarade").is(":hidden"))   {
                $(id+" .mascarade").slideToggle();
            }
        }
    }

    var Clock = () => {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();

        $(id+" .reloj").empty().append(h + ":" + m + ":" + s);
    }

    var helper = () => {
        console.log("." + contenedor + "_backer");
        $("." + contenedor + "_backer").append("<div class='col-md-2'><div class='helper-container row'></div></div>");
        $("." + contenedor + "_backer ").children().children().append("<div class='col-md-12 center no-padding'><button id='"+contenedor+"-bell' class='btn btn-outline-primary btn-block mybutton'><i class='fa fa-bell fa-2x'></i></button></div>");
        $("." + contenedor + "_backer ").children().children().append("<div class='col-md-12 center no-padding'><button id='"+contenedor+"-card' class='btn btn-outline-primary btn-block mybutton'><i class='fa fa-bars fa-2x'></i></button></div>");
        $("." + contenedor + "_backer ").children().children().append("<div class='col-md-12 center no-padding'><button id='"+contenedor+"-ticket' class='btn btn-outline-primary btn-block mybutton'><i class='fa fa-list-alt fa-2x'></i></button></div>");
    
        $(id + "-bell").click(() => {
            alert();
        });

        $(id + "-ticket").click(() => {
            cuenta();
        });
    }

    var alert = () => {
        $(id+"-bell").children().css("color","red").addClass("bounce");
        setTimeout(function(){
            $(id+"-bell").children().css("color","floralwhite").removeClass("bounce");
        },5000);
    }

    var rotate = () => {
        $(id).css("transform", "rotate(180deg)").css("transform-origin"," 50% 54%");
    }

    return{
        init : () => {
            $(id).addClass("col-md-6 main-container");   
            $(id).append("<div class=' "+contenedor+"_backer row mesa-bg backer'>");
            
            salvapantalla();
            helper();

            $("." + contenedor + "_backer").append("<div id='"+contenedor+"_body' class='col-md-10 '></div>");

            if(rotar){ rotate(); };
        }
    }
});