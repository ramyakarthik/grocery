const user = {
    name: 'John',
    age: 34,
    sayName: function () {
        console.log(`My name is ${this.name}`);
        // normal function cannot bind this
        // var that = this;
        // if we don't give above line ,'this' will points to window object.
        //Arrow function will take care of 'this'
        const nameAndAge = () => {
            console.log(`My name is ${this.name} and age is ${this.age}`);
        }
        nameAndAge();
    }
};
user.sayName();