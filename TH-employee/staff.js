"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this._age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.getAge = function () {
        return this._age;
    };
    Staff.prototype.setAge = function (age) {
        this._age = age;
    };
    return Staff;
}());
exports.Staff = Staff;
var staff = new Staff("staff1", "staff@mail.com", 20);
var nameStaff = staff.getName();
console.log(nameStaff);
staff.setName("Staff2");
var currentNameStaff = staff.getName();
console.log(currentNameStaff);
