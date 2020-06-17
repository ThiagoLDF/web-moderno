// Global Scope

this.name= 'Thiago'

function sayMyName() {
    // local scope
    console.log(this.name) //undefined
}

sayMyName()