const Employee = require('../lib/Employee');

test('Test all properties of employees', () => {
    const employee = new Employee('John', 5, 'John@gmail.com')
    expect(employee.name).toEqual('John')
    expect(employee.id).toEqual(5)
    expect(employee.email).toEqual('John@gmail.com')
})

test('Test all methods of employees', () => {
    const employee = new Employee('John', 5, 'John@gmail.com')
    expect(employee.getName()).toEqual('John')
    expect(employee.getId()).toEqual(5)
    expect(employee.getEmail()).toEqual('John@gmail.com')
    expect(employee.getRole()).toEqual('Employee')
})