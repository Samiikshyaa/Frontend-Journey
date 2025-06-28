 let person = {
      greet: function () {
        return `Hello, ${this.name}`;
      },
      age: 25
    };

    let user = {
      name: "Samikshya"
    };

    user.__proto__ = person;

    console.log(user.greet());
    console.log(user.age);

    console.log(user.__proto__ === person); 