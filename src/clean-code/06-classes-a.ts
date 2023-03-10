;(() => {
  //no aplicando el principio de resposabilidad única

  type Gender = 'M' | 'F'
  class Person {
    constructor(
      public name: string,
      public gender: string,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    private lastAccess: Date
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate)
      this.lastAccess = new Date()
    }
    checkCredentials() {
      return true
    }
  }
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate)
    }
  }
  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'luis@luis.com',
    'Admin',
    'Luis',
    'M',
    new Date('1989-03-06')
  )
  console.log({userSettings})

  //   const newUser = new User()
  //   const newPerson = new Person('Luis', 'M', new Date('1989-03-06'))
  //   console.log({ newPerson })
})()
