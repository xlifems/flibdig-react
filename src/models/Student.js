class Student {
  constructor(student) {
    this.school_id =
      student?.school_id || JSON.parse(localStorage.session).school_id;
    this.first_name = student?.first_name || "";
    this.last_name = student?.last_name || "";
    this.email = student?.email || "";
    this.phone = student?.phone || "";
    this.address = student?.address || "";
    // format date of birth to yyyy-mm-dd
    this.date_of_birth = student?.date_of_birth
      ? new Date(student.date_of_birth).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0];
    this.gender = student?.gender || "male";
  }

  fullName() {
    return `${this.first_name} ${this.last_name}`;
  }

  age() {
    const dob = new Date(this.date_of_birth);
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

export default Student;
