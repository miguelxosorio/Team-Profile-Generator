const Intern = require('../lib/Intern');

test('Test all properties of Intern', () => {
    const intern = new Intern('Jake', 2, 'Jake@gmail.com', 'FSU')
    expect(intern.name).toEqual('Jake')
    expect(intern.id).toEqual(2)
    expect(intern.email).toEqual('Jake@gmail.com')
    expect(intern.school).toEqual('FSU')
})

test('Test all methods of Intern', () => {
    const intern = new Intern('Jake', 2, 'Jake@gmail.com', 'FSU')
    expect(intern.getSchool()).toEqual('FSU')
    expect(intern.getRole()).toEqual('Intern')
})