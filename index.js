class Student {
  static count = 0;
  constructor(name, age, phone, marks) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.boardMarks = marks;
    Student.count += 1;
  }
  isEligible() {
    return this.boardMarks > 40;
  }
  isEligibleForPlacements(minMarks){
    return (age) => {
        return this.boardMarks>minMarks && this.age>age
    }
  }
}

const s1 = new Student("Steve", 21, 1234, 45);
const s2 = new Student("Dia", 22, 1234, 40);
const s3 = new Student("Abhi", 25, 1234, 20);
const s4 = new Student("Sam", 23, 1234, 95);
const s5 = new Student("Riya", 20, 1234, 64);
arr = [s1,s2,s3,s4,s5]
arr.forEach(element => {
    if (element.isEligibleForPlacements(40)(18)) console.log(element.name)
});
console.log(s4.isEligibleForPlacements(50)(24));


