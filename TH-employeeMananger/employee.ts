enum Gender {

    MALE,


    FEMALE,


    OTHER


}
class Employee {

    fullname: string = "";


    gender: Gender = Gender.OTHER;


    birthday?: Date;


    email: string = "";


    phoneNumber: string = "";

    constructor(fullname: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {


        this.fullname = fullname;


        this.gender = gender;


        this.birthday = birthday;


        this.email = email;


        this.fullname = fullname;


        this.phoneNumber = phoneNumber;


    }
}
let employeeList: Employee[] = [];
employeeList.push(new Employee("Nguyen Ngoc Ha", Gender.FEMALE, new Date("2003-03-10"), "haguyen@gmail.com", "0123456789"));
employeeList.push(new Employee("Ngo Van Khai", Gender.FEMALE, new Date("2001-10-12"), "khaingo@gmail.com", "0123456790"));
employeeList.push(new Employee("Nguyen Kieu Anh", Gender.OTHER, new Date("2003-04-27"), "kieuanh@gmail.com", "0123456791"));
function showEmployee(employee: Employee) {

    console.log(employee);


}
employeeList.forEach(showEmployee);