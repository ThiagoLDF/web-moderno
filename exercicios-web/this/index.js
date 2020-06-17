
this.name = 'Fabiana'

function sayMyName() {
    console.log(this.name)
}

const user = {
    name: "Thiago",
    sayMyName(){
        console.log(this.name)
    }
}

user.sayMyName()