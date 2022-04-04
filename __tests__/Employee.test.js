const Employee = require("../lib/Employee");

test('get new employee', () => {
    const name = "jack";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('employee id', () => {
    const id = 1;
    const employee = new Employee("jack", id);
    expect(employee.id).toBe(id);
})