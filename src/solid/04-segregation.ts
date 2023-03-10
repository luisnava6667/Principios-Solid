interface Bird {
  eat(): void

}
interface flyingBird {
    fly(): void
}
interface RunningBird {
    run(): void
}
interface SwimmerBird {
    swin(): void
}
class Tucan implements Bird, flyingBird {
  public fly() {}
  public eat() {}
}

class Humminbird implements Bird, flyingBird {
  public fly() {}
  public eat() {}
}
class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}
class Penguin implements Bird, SwimmerBird{
  public eat() {}
  public swin() {}
}
