class Coach{
  constructor(name, specialization, rating){
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }
  displayInfo(){
    console.log(
      `Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`
    );
  }
}
const coach1 = new Coach('Vasya Petrov', 'Fitness', 4.7);
const coach2 = new Coach('Masha Ivanova', 'Yoga', 4.9);
coach1.displayInfo();
coach2.displayInfo(); 
