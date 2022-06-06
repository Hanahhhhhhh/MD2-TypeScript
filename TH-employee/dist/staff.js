"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this._age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getAge() {
        return this._age;
    }
    setAge(age) {
        this._age = age;
    }
}
exports.Staff = Staff;
let staff = new Staff("staff1", "staff@mail.com", 20);
let nameStaff = staff.getName();
console.log(nameStaff);
staff.setName("Staff2");
let currentNameStaff = staff.getName();
console.log(currentNameStaff);
//# sourceMappingURL=staff.js.map