import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Hello Mongoose',
  author: 'Daniel Bugl',
  contents: 'This post is stored in a MongoDB database using Mongoose',
  tags: ['mongoose', 'mongodb'],
})

let createdPost = await post.save()

createdPost = await Post.findByIdAndUpdate(
  createdPost._id,
  {
    $set: { title: 'Hello again, Mngoose!' },
  },
  { new: true },
)
console.log(createdPost)
