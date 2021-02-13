var button;
var level1button;
var level2button;
var level3button;
var level4button;






function setup(){
    createCanvas(600,600);
    button = createButton('Start');
    this.button.position(300,300);
    this.button.mousePressed(()=>{
        background("black");
        this.button.hide();
        levelsForUsToComplete();
    })


}

function levelsForUsToComplete(){
    level1button = createButton('level1');
    this.level1button.position(250,250);
    this.level1button.mousePressed(()=>{
        background("green");
        this.level2button.hide();
        this.level3button.hide();
        this.level4button.hide();
    })
    level2button = createButton('level2');
    this.level2button.position(350,250);
    this.level2button.mousePressed(()=>{
        background("blue")
        this.level1button.hide();
        this.level3button.hide();
        this.level4button.hide();
    })
    level3button = createButton('level3');
    this.level3button.position(250,300);
    this.level3button.mousePressed(()=>{
        background("yellow");
        this.level2button.hide();
        this.level1button.hide();
        this.level4button.hide();
    })
    level4button = createButton('level4');
    this.level4button.position(350,300);
    this.level4button.mousePressed(()=>{
        background("red");
        this.level2button.hide();
        this.level1button.hide();
        this.level3button.hide();
    })

}

function draw(){






}
