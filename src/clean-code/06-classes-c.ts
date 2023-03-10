;(() => {
  //aplicando el principio de resposabilidad única
  //priorizar la composicion frente a la herencia

  type Gender = 'M' | 'F'
  interface PersonProps {
    name: string
    gender: string
    birthdate: Date
  }
  class Person {
    public name: string
    public gender: string
    public birthdate: Date
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name
      this.gender = gender
      this.birthdate = birthdate
    }
  }
  interface UserProps {
    email: string
    role: string
  }
  class User {
    public email: string
    public role: string
    public lastAccess: Date
    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }
    checkCredentials() {
      return true
    }
  }
  interface SettingsProps {
    workingDirectory: string
    lastOpenFolder: string
  }
  class Settings {
    public workingDirectory: string
    public lastOpenFolder: string
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
    }
  }
  interface UserSettingsProps {
    workingDirectory: string
    lastOpenFolder: string
    email: string
    role: string
    name: string
    gender: Gender
    birthdate: Date
  }
  class UserSettings {
    public person: Person
    public user: User
    public settings: Settings
    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastOpenFolder
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate })
      this.user = new User({ email, role })
      this.settings = new Settings({ workingDirectory, lastOpenFolder })
    }
  }
  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'luis@luis.com',
    role: 'Admin',
    name: 'Luis',
    gender: 'M',
    birthdate: new Date('1989-03-06')
  })
  console.log({
    userSettings
  })

  //   const newUser = new User()
  //   const newPerson = new Person('Luis', 'M', new Date('1989-03-06'))
  //   console.log({ newPerson })
})()
