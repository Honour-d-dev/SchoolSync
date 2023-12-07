import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
  address: { type: 'string', required: true, unique: true },
  image: { type: 'string', required: true },
  email: { type: 'string', required: true, unique: true },
  studentData: {
    faculty: { type: 'string' },
    department: { type: 'string' },
    courseDuration: { type: 'number' },
    matriculationNumber: { type: 'string' },
    registeredCourses: { type: 'array' },
  },
})

const staffSchema = new mongoose.Schema({})

const schoolSchema = new mongoose.Schema({})
