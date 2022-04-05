const Engineer = require('../lib/Engineer');

test('github profile info', () => {
    const githubUser = "JackIncredible";
    const employee = new Engineer("jack", 1, "jackincredible@gmail.com", githubUser);
    expect(employee.github).toBe(githubUser);
})

test('get github info', () => {
    const githubUser = "JackIncredible";
    const employee = new Engineer("jack", 1, "jackincredible@gmail.com", githubUser);
    expect(employee.getGithub()).toBe(githubUser);
})

test('get engineer role', () => {
    const engineerRole = "Engineer";
    const employee = new Engineer("jack", 1, "jackincredible@gmail.com", "JackIncredible");
    expect(employee.getRole()).toBe(engineerRole);
})