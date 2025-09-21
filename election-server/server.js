require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));



// Define Mongoose Schemas
const voterSchema = new mongoose.Schema({
  voter_id: { type: String, unique: true, required: true },
  name: String,
  cnic: {
    type: String,
    unique: true,
    required: true,
    match: /^[0-9]{5}-[0-9]{7}-[0-9]$/ // CNIC format XXXXX-XXXXXXX-X
  },
  registered_district: String,
  has_voted: { type: Boolean, default: false },
  phone: String,
  phone_verified: { type: Boolean, default: false },
  email: { type: String, required: true },
  email_verified: { type: Boolean, default: false },
});

const candidateSchema = new mongoose.Schema({
  candidate_id: { type: String, unique: true, required: true },
  name: String,
  cnic: {
    type: String,
    unique: true,
    required: true,
    match: /^[0-9]{5}-[0-9]{7}-[0-9]$/ // CNIC format XXXXX-XXXXXXX-X
  },
  party: String,
  district: String,
  bio: String,
  vote_count: { type: Number, default: 0 },
  email: { type: String, unique: true, required: true },
});

// Define Mongoose Models
const Voter = mongoose.model('Voter', voterSchema);
const Candidate = mongoose.model('Candidate', candidateSchema);

// Generate Mock Data

const generateMockData = async () => {

   // Function to generate a random UUID
   const generateUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  // Function to generate a random CNIC format (e.g., 12345-1234567-1)
  const generateCnic = () => {
    const part1 = Math.floor(10000 + Math.random() * 90000); // 5 digits
    const part2 = Math.floor(1000000 + Math.random() * 9000000); // 7 digits
    const part3 = Math.floor(Math.random() * 10); // 1 digit
    return `${part1}-${part2}-${part3}`;
  };

  // Generate random names
  const randomName = () => {
    const firstNames = ["Abdullah", "Hassan", "Sara", "Ahmed", "Zain", "Fatima"];
    const lastNames = ["Khan", "Malik", "Butt", "Sheikh", "Chaudhry"];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  };

  // Generate random emails
  const randomEmail = (name) => {
    const domains = ["gmail.com", "email.com", "yahoo.com", "hotmail.com", "outlook.com"];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${name.replace(" ", ".").toLowerCase()}@${domain}`;
  };

  // Generate phone number
  const generatePhone = () => {
    return `03${Math.floor(100000000 + Math.random() * 900000000)}`;
  };

  // Clear existing collections
  // await Voter.deleteMany({});
  // await Candidate.deleteMany({});

  // Insert 100 mock Voters
  const voters = Array.from({ length: 100 }).map(() => {
    const name = randomName();
    return {
      voter_id: generateUuid(),
      name,
      cnic: generateCnic(),
      registered_district: "District " + Math.floor(1 + Math.random() * 10),
      has_voted: false,
      phone: generatePhone(),
      phone_verified: Math.random() < 0.5,
      email: randomEmail(name),
      email_verified: Math.random() < 0.5,
    }
  });

  const candidates = Array.from({ length: 5 }).map(() => {
    const name = randomName();
    return {
      candidate_id: generateUuid(),
      name,
      cnic: generateCnic(),
      party: "Party " + Math.floor(1 + Math.random() * 5), 
      district: "District " + Math.floor(1 + Math.random() * 10),
      bio: "Candidate bio " + Math.floor(1 + Math.random() * 5),
      email: randomEmail(name),
    }
  });

  // Insert a single sample voter
  // const name = randomName();
  // const sampleVoter = {
  //   voter_id: generateUuid(),
  //   name,
  //   cnic: generateCnic(),
  //   registered_district: "District " + Math.floor(1 + Math.random() * 10),
  //   has_voted: false,
  //   phone: generatePhone(),
  //   phone_verified: Math.random() < 0.5,
  //   email: randomEmail(name),
  //   email_verified: Math.random() < 0.5,
  // };

  try {
    await Candidate.insertMany(candidates);
    console.log('Sample candidate inserted');
  } catch (error) {
    console.error('Error inserting sample voter:', error);
  }
};

  

// Endpoint to create mock data
app.get('/create-data', async (req, res) => {
  try {
    await generateMockData();
    res.status(200).send('Mock data created successfully.');
  } catch (error) {
    console.error('Error:', error);  // Log the error message
    // res.status(500).send('Error creating mock data.');
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
