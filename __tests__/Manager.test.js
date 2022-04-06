const Manager = require('../lib/Manager');

test ('new manager office number', () => {
    const officeNumber = 2;
    const employee = new Manager("jack", 1, "jackincredible@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test ('get manager office number', () => {
    const officeNumber = 2;
    const employee = new Manager("jack", 1, "jackincredible@gmail.com", officeNumber);
    expect(employee.getOfficeNumber()).toBe(officeNumber);
});

test('get manager role', () => {
    const managerRole = "Manager";
    const employee = new Manager("jack", 1, "jamesincredible@gmail.com", 2);
    expect(employee.getRole()).toBe(managerRole);
});