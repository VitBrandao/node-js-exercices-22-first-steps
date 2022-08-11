const body = {
    email: 'email@mail.com',
    password: 'vitorbrandao',
  }
  
const main = (object) => {
    if (body.email === null|| body.email.length < 5) return false;
    if (body.password === null || body.password.length < 5) return false;
  
    return true; 
};
  
console.log(main(body));

module.exports = main;