class Form {
    constructor() {
        this.button = createButton('Play');
        this.input = createInput("Name");
        this.greeting = createElement('h3');
        this.title = createElement('h2');
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display() {
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-50,0);

        this.button.position(displayWidth/2+30,displayHeight/2);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        
        this.button.mousePressed(()=> {
            this.button.hide();
            this.input.hide();
            
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
    }
}