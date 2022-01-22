const Engineer = require('../lib/Engineer');

test('Test all properties of Engineer', () => {
    const engineer = new Engineer('Dave', 1, 'Dave@gmail.com', 'dave@github.com')
    expect(engineer.name).toEqual('Dave')
    expect(engineer.id).toEqual(1)
    expect(engineer.email).toEqual('Dave@gmail.com')
    expect(engineer.github).toEqual('dave@github.com')
})

test('Testing all methods of Engineer', () => {
    const engineer = new Engineer('Dave', 1, 'Dave@gmail.com', 'dave@github.com')
    expect(engineer.getGitHub()).toEqual('dave@github.com')
    expect(engineer.getRole()).toEqual('Engineer')
})