function mesa(usuario,pass,contenedor) {
    this.usuario = usuario;
    this.pass = pass;
    this.contenedor = contenedor;
    this.idleTime = 20;
    this.opciones = [];
};

mesa.prototype.init = function(){
    var element = this;
    $(this.contenedor).click(function(e){
        mesa.prototype.ripple(e,element);
    });


    $(this.contenedor).empty().addClass("col-md-6 main-container").append("<div class='mascarade'><span class='reloj'></span><h2 class='puesto'>"+this.usuario+"</h2><span class='mensaje'>Bienvenido</span></div>").append("<div id='"+this.contenedor.substring(1,this.contenedor.length)+"-bg' class='row mesa-bg'></div>");
    $(this.contenedor).children("#"+this.contenedor.substring(1,this.contenedor.length)+"-bg").append("<div id='"+this.contenedor.substring(1,this.contenedor.length)+"-helper' class='col-md-2'><div class='row helper-container'></div></div><div id='"+this.contenedor.substring(1,this.contenedor.length)+"-menu' class='col-md-10'></div>");
    $(this.contenedor+"-menu").append("<div class='row menu-container'></div>");

    $(this.contenedor+" .mascarade").click(function () {$(this).slideToggle();element.idleTime = 20;});
    $(this.contenedor).click(function(){element.idleTime = 7;});


    loadingTimer = setInterval(function(){element.startTime(element);}, 1000);
    //idleTimer = setInterval(function(){element.idle(element);}, 1000);
    helper = this.initHelper(element);
    this.principal(element);

    $(this.contenedor+"-card").click(function(){
        element.principal(element);
    });
};

mesa.prototype.idle = function(element){
    if(element.idleTime !== 0){
        element.idleTime = element.idleTime - 1;
    }else{
        if($(element.contenedor+" .mascarade").is(":hidden"))   {
            $(element.contenedor+" .mascarade").slideToggle();
        }
    }
};

mesa.prototype.entradas = function(element){
    menu = "";

    $.each(element.opciones["ENTRADAS"],function (indice,valor) {
        menu += "<div class='col-md-12'><a class='btn btn-outline-primary mybutton btn-block'><div class='row'><div class='plato-img col-md-4'><img src='paris.jpg'></div> <div class='plato-container col-md-8'><h2 class='plato-title'>"+indice+"</h2><p class='plato-description'>"+valor["DESCRIPCION"]+"</p><span class='plato-price'>Valor: $"+valor["PRECIO"].toFixed(2)+"</span></div></div> </a></div>";
    });
    $(element.contenedor+" .menu-container").empty().append(menu);
};

mesa.prototype.principal = function(element){
    menu = "";

    $.each(element.opciones,function (indice,valor) {
        menu += "<div  class='col-12 center no-padding'><button id='"+element.contenedor.substring(1,element.contenedor.length)+"-"+indice+"' class='btn btn-outline-primary btn-block mybutton'> "+indice+" </button></div>";

    });
    console.log(element);

    $(element.contenedor+" .menu-container").empty().append(menu);
    $(element.contenedor+"-ENTRADAS").click(function(){
        console.log("hola");
        element.entradas(element);
    });
}

mesa.prototype.initHelper = function(element){
    $(element.contenedor+"-helper").children().append("<div class='col-md-12 center no-padding'><button class='btn btn-outline-primary btn-block mybutton'><i class='fa fa-bell fa-2x'></i></button></div><div class='col-md-12 center no-padding'><button id='"+element.contenedor.substring(1,this.contenedor.length)+"-card' class='btn btn-outline-primary btn-block mybutton'><i class='fa fa-bars fa-2x'></i></button></div> <div class='col-md-12 center no-padding'><button class='btn btn-outline-primary btn-block mybutton'><i class='fa fa-list-alt fa-2x'></i></button></div>");
};

//Things ready

mesa.prototype.bgcolor = function(color){
    $(this.contenedor+"-bg").css("background-color",color);
    $(this.contenedor+"-bg .mascarade").css("background-color",color);
};
mesa.prototype.rotate = function(){
  $(this.contenedor).css("transform", "rotate(180deg)").css("transform-origin"," 50% 54%");
};
mesa.prototype.startTime = function(element){

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = element.checkTime(m);
    s = element.checkTime(s);
    $(element.contenedor+" .reloj").empty().append(h + ":" + m + ":" + s);
}
mesa.prototype.checkTime = function(i){
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

mesa.prototype.ripple = function(e,contenedor){
    $(".ripple").remove();
    // Setup
    var posX = $(contenedor.contenedor).offset().left,
        posY = $(contenedor.contenedor).offset().top,
        buttonWidth = $(contenedor.contenedor).width(),
        buttonHeight =  $(contenedor.contenedor).height();

    // Add the element
    $(contenedor.contenedor).prepend("<span class='ripple'></span>");


    // Make it round!
    if(buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;


    // Add the ripples CSS and start the animation
    $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px',
        "z-index": 9999
    }).addClass("rippleEffect");
}











mesa.prototype.inventario = function(){
    this.opciones = {
        "ENTRADAS" : {
            "AROS DE CEBOLLA": {
                "ID" : 1,
                "DESCRIPCION": "Crujientes Aros de cebolla con salsa BBQ especial",
                "PRECIO" : 3.00
            },
            "TEQUENOS DE QUESO": {
                "ID" : 2,
                "DESCRIPCION": "Deliciosa racion de  tequeños acompañados de salsa tártara",
                "PRECIO" : 3.00
            },
            "ALITAS BBQ": {
                "ID" : 3,
                "DESCRIPCION": "Exquisitas alitas combinadas con nuestra salsa especial BBQ.",
                "PRECIO" : 3.00
            },
            "DEDITOS DE MOZARELLA": {
                "ID" : 4,
                "DESCRIPCION": "Tradicionales y crujientes dedos de queso mozzarella acompañadas con salsa de queso azul",
                "PRECIO" : 3.00
            },
            "PASTELES TRUSCHELLO": {
                "ID" : 5,
                "DESCRIPCION": "Espectaculares pasteles Truschello con rellenos combinados: pollo, queso y carne. ",
                "PRECIO" : 3.00
            },
            "CHICKEN TENDERS": {
                "ID" : 6,
                "DESCRIPCION": "Crujiente pechuga de pollo empanizada con nuestra salsa de ajo.",
                "PRECIO" : 3.00
            }
        },
        "ENSALADAS" : {
            "CESAR DE POLLO" : {
                "INGREDIENTE" : {
                    0 : {
                        "ID" : 7,
                        "DESCRIPCION" : "MIX DE LECHUGAS",
                        "PRECIO" : 3.00
                    },
                    1 : {
                        "ID" : 8,
                        "DESCRIPCION" : "PECHUGA DE POLLO A LA PLANCHA",
                        "PRECIO" : 3.00
                    },
                    2 : {
                        "ID" : 9,
                        "DESCRIPCION" : "TOCINETA CRUJIENTE",
                        "PRECIO" : 3.00
                    },
                    3 : {
                        "ID" : 10,
                        "DESCRIPCION" : "CROUTONES",
                        "PRECIO" : 3.00
                    },
                    4 : {
                        "ID" : 11,
                        "DESCRIPCION" : "MIX DE LECHUGAS",
                        "PRECIO" : 3.00
                    },
                    5 : {
                        "ID" : 12,
                        "DESCRIPCION" : "QUESO PARMESANO",
                        "PRECIO" : 3.00
                    },
                    6 : {
                        "ID" : 13,
                        "DESCRIPCION" : "ADEREZO CESAR",
                        "PRECIO" : 3.00
                    }
                },
                "CAPRESA" : {
                    "INGREDIENTES" : {
                        0 : {
                            "ID" : 14,
                            "DESCRIPCION" : "TOMATE EN RODAJAS",
                            "PRECIO" : 3.00
                        },
                        1 : {
                            "ID" : 15,
                            "DESCRIPCION" : "QUESO MOZZARELA",
                            "PRECIO" : 3.00
                        },
                        2 : {
                            "ID" : 16,
                            "DESCRIPCION" : "PESTO",
                            "PRECIO" : 3.00
                        }
                    }
                }
            }
        },
        "CAFE" : {
            "EXPRESSO": {
                "ID" : 17,
                "DESCRIPCION": "EXPRESO",
                "PRECIO" : 3.00
            },
            "LATTE": {
                "ID" : 18,
                "DESCRIPCION": "LATTE",
                "PRECIO" : 3.00
            },
        }
    };
};