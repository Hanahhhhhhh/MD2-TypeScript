var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullname, gender, birthday, email, phoneNumber) {
        this.fullname = "";
        this.gender = Gender.OTHER;
        this.email = "";
        this.phoneNumber = "";
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.fullname = fullname;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Nguyen Ngoc Ha", Gender.FEMALE, new Date("2003-03-10"), "haguyen@gmail.com", "0123456789"));
employeeList.push(new Employee("Ngo Van Khai", Gender.FEMALE, new Date("2001-10-12"), "khaingo@gmail.com", "0123456790"));
employeeList.push(new Employee("Nguyen Kieu Anh", Gender.OTHER, new Date("2003-04-27"), "kieuanh@gmail.com", "0123456791"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
