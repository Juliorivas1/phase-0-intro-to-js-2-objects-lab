// Write your solution in this file!
const employee = {
    name:"Julio",
    streetAddress: "mcdonald",

}
function updateEmployeeWithKeyAndValue(employee, streetAddress, mcdonald) {
const newEmployee = {...employee};
newEmployee.name = "Sam";
newEmployee.streetAddress = "11 Broadway";

return newEmployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress,mcdonald) {
    employee[streetAddress] = "12 Broadway";
    return employee;

}
function deleteFromEmployeeByKey(employee, streetAddress, mcdonald) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;


}
function destructivelyDeleteFromEmployeeByKey(employee, streetAddress, mcdonald) {
    delete employee.name;
    return employee;
    
}