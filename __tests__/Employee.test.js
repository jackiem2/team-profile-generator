const Employee = require("../lib/Employee");

test('new employee name', () => {
    const name = "jack";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('employee id', () => {
    const id = 1;
    const employee = new Employee("jack", id);
    expect(employee.id).toBe(id);
})

test ('employee email', () => {
    const email = "jackincredible@gmail.com";
    const employee = new Employee ("jack", 1, email);
    expect(employee.email).toBe(email);
})

test ('get employee name', () => {
    const employeeName = "jack";
    const employee = new Employee(employeeName);
    expect(employee.getName()).toBe(employeeName);

})

test ('get employee id', () => {
    const employeeId = 1;
    const employee= new Employee("jack", employeeId);
    expect(employee.getId()).toBe(employeeId);
})

test ('get employee email',() => {
    const employeeEmail = "jackincredible@gmail.com";
    const employee = new Employee("jack", 1, employeeEmail);
    expect(employee.getEmail()).toBe(employeeEmail);
})

test ('get employee role', () => {
    const employeeRole = "Role";
    const employee = new Employee("jack", 1, "jackincredible@gmail.com")
    expect(employee.getRole()).toBe(employeeRole);

})