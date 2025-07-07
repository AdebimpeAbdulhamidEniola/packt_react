import mongoose from 'mongoose'

export function initDatabase() {
  const DB_URL = process.env.DB_URL

  mongoose.connection.on('open', () => {
    console.info('successfully connected to database', DB_URL)
  })

  const connection = mongoose.connect(DB_URL)

  return connection
}
