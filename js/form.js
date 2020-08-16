class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(470,0);

        var input=createInput("Name");
        var button=createButton("Play");
        var greeting=createElement('h3');

        input.position(450,160);
        button.position(500,200);

        button.mousePressed(function(){
            button.hide();
            input.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(500,160);
      })
    }
}