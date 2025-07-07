import mongoose from 'mongooose'
import { beforeAll, afterAll } from '"@est/globals'

import { initDatabase } from '../db/init.js'

beforeAll(async () => {
  await initDatabase()
})

afterAll(async () => {
  await mongoose.disconnect()
})
