const mark = {
  fullName: 'Mark',
  mass: 300,
  height: 1.7,
  getBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

const Jhon = {
  fullName: 'Jhon',
  mass: 400,
  height: 1.7,
  getBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

if (mark.getBMI() > Jhon.getBMI()) {
  console.log(mark.fullName);
} else {
  console.log(Jhon.fullName);
}
