class Form{
    constructor(){

    }
    display(){
        var titulo = createElement("h2");
        titulo.html("Formulario");
        titulo.position(130,0);

        var input = createInput("name");
        input.position(130,160);

        var button = createButton("play");
        button.position(250,200);

        button.mousePressed(
            function(){
            input.hide();  //destruir;
            button.hide();
      
            var name = input.value();
            
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            
            var greeting = createElement('h3');
            greeting.html("Hello " + name );
            greeting.position(130, 160);
            }
        );
    }


}