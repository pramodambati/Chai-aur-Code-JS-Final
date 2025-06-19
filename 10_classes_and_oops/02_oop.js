// litrellay a object

const user = {
  username: "Pramod",
  loginCount: 8,
  signedIn: true,

  getUserdetails: function () {
    // console.log(`Got user details from DB ${this.username}`);
    console.log(this);
  },
};

// console.log(user["username"]);
// console.log(user.loginCount);
// user.getUserdetails()
// console.log(this);

// Constructor function

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
  // myusername = username
  this.username = username;
  this.logicloginCount = loginCount;
  this.isisLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.greetingusername}`);
  };
  // return this // without explicitly mention also it will return
}

// const userOne = User("pramod", 5, true)
// const usertwo = User("james", 15, false)
// console.log(userOne); // it's overriding the userone values with usertwo values

const userOne = new User("pramod", 5, true);
const usertwo = new User("james", 15, false);
// console.log(userOne);
// console.log(usertwo);

console.log(userOne.constructor); // Reference about it self

// console.log(userOne instanceof usertwo);

// check instanceof in mdn
