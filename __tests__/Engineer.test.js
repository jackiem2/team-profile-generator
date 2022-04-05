const Engineer = require('../lib/Engineer');

test('github profile info', () => {
    const githubUser = "JackIncredible";
    const employee = new Engineer("jack", 1, "jackincredible.com", githubUser);
    expect(employee.github).toBe(githubUser);
})