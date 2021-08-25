const promiseFirst=new Promise(resolve => resolve(100))
 .then(result => `${result+10}`);

 const promiseSecond=new Promise(resolve => resolve(200))
 .then(result => `${result+20}`);

 Promise.all([promiseFirst,promiseSecond]).then(result => console.log(result));
 
 const promiseResult= new Promise((resolve) =>{
     resolve(1);
     
 }).then((result) => {} )
 console.warn("hi")