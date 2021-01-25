class Form {
    constructor(){
    }
    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(20,40);
        var input = createInput("name");
        input.position(100,100);
        var button = createButton("play");
        button.position(90,120);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount)
            var greeting = createElement('h3');
            greeting.html("HII "+name);
            greeting.position(80,80)
        })
    }
}