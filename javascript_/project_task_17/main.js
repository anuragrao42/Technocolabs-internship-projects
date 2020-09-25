class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this.numberOfStudents = newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`
    );
  }
  static pickSubsituteTeacher(substituteTeachers) {
    var randNum = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randNum];
  }
}
//Primary School Class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
//high school
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, "high", numberOfStudents);
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam() {
    // for (let i =0; i<this._sportsTeam.length;i++){
    //   console.log();
    console.log(this._sportsTeam);
  }
}
//instances of Primary School
const lorraineHansbury = new PrimarySchool(
  "Lorraine",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.quickFacts();
School.pickSubsituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

//instance of middle school

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
