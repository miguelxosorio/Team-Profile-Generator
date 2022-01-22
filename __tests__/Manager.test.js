const Manager = require('../lib/Manager')

test('Test all properties of Manager', () => {
    const manager = new Manager('Ryu', 3, 'ryu@gmail.com', 23)
    expect(manager.name).toEqual('Ryu')
    expect(manager.id).toEqual(3)
    expect(manager.email).toEqual('ryu@gmail.com')
    expect(manager.officeNumber).toEqual(23)
})

test('Test all methods of Manager', () => {
    const manager = new Manager('Ryu', 3, 'ryu@gmail.com', 23)
    expect(manager.getRole()).toEqual('Manager')
})