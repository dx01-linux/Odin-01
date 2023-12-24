class htmlElement {
    constructor(tag){
        this.tag = document.createElement(tag)
        this.attr = this.tag.attributes ;  
        this.events = [] 
    }
}

class Wrapper extends htmlElement{
    constructor(className){
        super('div');

        //setting properties
        this.tag.setAttribute('class' , className)
    }
}

class Img extends htmlElement{
    constructor(src = '#' ){
        super('img');

        //setting properties
        this.tag.setAttribute('src' , src)
        this.tag.setAttribute('alt' , 'image')
    }
}

class Text extends htmlElement {
    constructor(text){
        super('p');

        //attributes
        this.tag.appendChild(document.createTextNode(text));
    }
}
class Link  extends htmlElement {
    constructor(ref , word){
        super('a')

        this.tag.setAttribute('href' , ref )
        this.tag.appendChild(document.createTextNode(word))
    }
}
class Card{
    constructor(){
        this.wrapper = new Wrapper('card');
        this.header = new Text('Pizza');
        this.img = new Img('misc/pizza.webp' );
        this.description = new Link('odin-recipes/pizza.html' , '!!!Get-Recipe');
        
        //setting up :
        for(let x of Object.keys(this)){
                if(x != 'wrapper'){
                    this.wrapper.tag.appendChild(this[x].tag);
                }
        }
    }
}

const container = {
    'tag' : document.querySelector('#cards') ,
    'boxes' : [] ,
    'setBoxes' : function(number){
        for(let i = 0 ; i <= number - 1 ; i++){
            this.boxes.push(new Card() ); // keep track of max boxes
            this.tag.appendChild(this.boxes[i].wrapper.tag); // attach added box to container 
        }
    } ,
}

container.setBoxes(20);
