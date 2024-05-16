class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId())//error because static

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId());//error because static

// The createId method is a static method in the User class, which means it belongs to the class itself rather than to instances of the class. To access a static method, you should call it on the class directly, not on an instance of the class. This applies to both the User class and its subclass Teacher.

// Accessing the static method on the class directly
console.log(User.createId()); // Works: 123
console.log(Teacher.createId()); // Works: 123 (inherited static method)