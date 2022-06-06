"use strict";
exports.__esModule = true;
exports.Gender = exports.Employees = void 0;
var Employees = /** @class */ (function () {
    function Employees(id, fullName, gender, birthday, email, phoneNumber) {
        this.id = id;
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    Employees.prototype.displayEmployeeName = function () {
        return this.fullName;
    };
    return Employees;
}());
exports.Employees = Employees;
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
function CreateEmployees(employee) {
    employeeList.push(employee);
}
function findEmployeeById(id) {
    var i = -1;
    employeeList.forEach(function (employee, index) {
        if (employee.id === id) {
            i = index;
        }
    });
    return i;
}
function deleteEmployee(id) {
    var employeeId = findEmployeeById(id);
    if (employeeId !== -1) {
        employeeList.splice(employeeId, 1);
    }
    else {
        throw new Error('Wrong ID');
    }
}
var employeeList = [];
var ManagerHa = new Employees(1, "Nguyen Ngoc Ha", Gender.MALE, 2003, "hanguyen@gmail.com", "1234567890");
var staffKhaiNgo = new Employees(2, "Ngo Van Khai", Gender.MALE, 2001, "khaingo@gmail.com", "9876543210");
var staffMaile = new Employees(3, "Le Phuong Mai", Gender.FEMALE, 2001, "maile@gmail.com", "8963257413");
var staffThuNguyen = new Employees(4, "Nguyen Thi Anh Thu", Gender.FEMALE, 2004, "thunguyen@gmail.com", "0123456789");
CreateEmployees(ManagerHa);
CreateEmployees(staffKhaiNgo);
CreateEmployees(staffMaile);
CreateEmployees(staffThuNguyen);
deleteEmployee(3);
console.log(employeeList);
var ha = ManagerHa.displayEmployeeName();
console.log(ha);
