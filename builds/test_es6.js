class Human {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return () => this.x + this.y;
    }
}

var A = new Human(5,6);


console.log(A.add()());