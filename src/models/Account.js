export class Profile {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.bio = data.bio
    this.github = data.github
  }
}

export class Account extends Profile {
  constructor (data) {
    super(data)
    this.email = data.email
  }
}
