import mongoose from 'mongoose'

export function initDatabase() {
  const DB_URL = 'mongodb://localhost:27017/blog'

  mongoose.connection.on('open', () => {
    console.info('successfully connected to database', DB_URL)
  })

  const connection = mongoose.connect(DB_URL)

  return connection
}
