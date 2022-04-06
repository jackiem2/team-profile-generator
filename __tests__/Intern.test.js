const Intern = require('../lib/Intern');

test('name of school', () => {
    const schoolName = "Tech School";
    const employee = new Intern("jack", 1, "jackincredible@gmail.com", schoolName);
    expect(employee.school).toBe(schoolName);
});

test('get school info from intern', () => {
    const schoolName = "Tech School";
    const employee = new Intern ("jack", 1, "jackincredible@gmail.com", schoolName);
    expect(employee.getSchool()).toBe(schoolName);
});

test('get intern role', () => {
    const internRole = "Intern";
    const employee = new Intern("jack", 1, "jackincredible@gmail.com", "Tech School");
    expect(employee.getRole()).toBe(internRole);
})