class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses = [];

    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
    
}
class Moderator extends User{
    
   
    addCoins(){
        
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);
    }
    removecoins(){
        console.log(`${this.name} has 0 coins`);
    }
}
class Admin extends Moderator{
     addCourse(user,course){
     user.courses.push(course);
     console.log(user);
 }

}
let user1 = new User('Kavita',22,'kavita@gmail.com')
let user2 = new User('rutuja',21,'rutuja@gmail.com')
let mod = new Moderator('Navita',23,'navita@gmail.com')
let admin = new Admin('Ameya',23,'ameya@gmail.com')
let users = [user1,user2,mod,admin];

users.forEach(element =>{
    console.log(element);
});
admin.addCourse(user1,'Javascript');

user1.login()

mod.addCoins();
mod.removecoins();
user1.logout();
console.log(users);

