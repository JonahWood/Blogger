import { Profile } from "./Account.js"


export class Blog{
    constructor(data){
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.img = data.imgUrl
    this.creator = new Profile(data.creator)
    }
}