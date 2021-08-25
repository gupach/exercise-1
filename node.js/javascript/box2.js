function Item (name,age) {
    this.name=name;
    this.age=age;
    
    this.showName = function(){
        
        console.log(`이름 : ${name}`);
         console.log(`나이는 ${age}`);
       
    }
}
 
  
    
 const item1=new Item("anna",20);
 const item2=new Item("jay",7);
 const item3=new Item("fred",50);
   console.log(item3,item1,item2);
   

   item2. showName();
   item3.showName ();


