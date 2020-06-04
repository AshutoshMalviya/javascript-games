
  function HouseKeeper (name , age , tasks , experience) {
    this.name = name;
    this.age = age;
    this.tasks = tasks;
    this.experience = experience;
    this.clean = function()  {
        console.log("cleaned house by " + name );
    }
}

var houseKeeper1 = new HouseKeeper("maid1" , "10" , ["house clean" , "bathroom clean " , "babysitting"],  2);
var houseKeeper2 = new HouseKeeper("maid2" , 25 , ["nothing" , 'cash-theft'] , 5);

console.log(houseKeeper1.name + " " + houseKeeper1.age + " she can do " + houseKeeper1.tasks.length + "work" + houseKeeper1.experience);
console.log(houseKeeper1.name + " " + houseKeeper2.age + " she can do " + houseKeeper2.tasks.length + "work" +houseKeeper2.experience);

houseKeeper1.clean();
houseKeeper2.clean();