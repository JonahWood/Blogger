import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogService{
async getBlogs(){
const res = await api.get('/api/blogs')
// logger.log(res.data)
AppState.blogs = res.data.map(b => new Blog(b))
logger.log('appstate storage of blogs',AppState.blogs)
}
}

export const blogService = new BlogService