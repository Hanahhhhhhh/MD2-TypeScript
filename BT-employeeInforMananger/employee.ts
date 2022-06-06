 export class Employees {
    id : number;
    fullName: string;
    gender: Gender;
    birthday: number;
    email: string;
    phoneNumber: string;

    constructor(id :number,
                fullName: string,
                gender: Gender,
                birthday: number,
                email: string,
                phoneNumber: string) {
        this.id = id;
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    displayEmployeeName(): string {
        return this.fullName
    }


 }
export enum Gender {MALE ="MALE", FEMALE = "FEMALE", OTHER = "OTHER"}


function CreateEmployees(employee : Employees ):void {
    employeeList.push(employee)
}
function  findEmployeeById(id:number){
    let i = -1;
    employeeList.forEach((employee : Employees,index: number)=>{
        if ( employee.id === id){
            i = index
        }
    })
    return i
}
function deleteEmployee(id : number):void{
    let employeeId = findEmployeeById(id)
   if(employeeId !== -1){
       employeeList.splice(employeeId,1)
   }
   else {
       throw  new Error('Wrong ID')
   }
}

let employeeList: Employees[] = []
let ManagerHa = new Employees(1,"Nguyen Ngoc Ha", Gender.MALE, 2003, "hanguyen@gmail.com","1234567890")
let staffKhaiNgo = new Employees(2,"Ngo Van Khai", Gender.MALE, 2001, "khaingo@gmail.com","9876543210")
let staffMaile = new Employees(3,"Le Phuong Mai", Gender.FEMALE, 2001, "maile@gmail.com","8963257413")
let staffThuNguyen = new Employees(4,"Nguyen Thi Anh Thu", Gender.FEMALE, 2004, "thunguyen@gmail.com","0123456789")
CreateEmployees(ManagerHa);
CreateEmployees(staffKhaiNgo);
CreateEmployees(staffMaile);
CreateEmployees(staffThuNguyen);
deleteEmployee(3)
console.log(employeeList);
let ha = ManagerHa.displayEmployeeName();
console.log(ha);
