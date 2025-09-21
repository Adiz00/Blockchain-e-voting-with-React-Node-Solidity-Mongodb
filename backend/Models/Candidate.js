const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  candidate_id: { type: String,  unique: true, sparse: true  },
  name: { type: String, required: true },
  cnic: { type: String, unique: true, sparse: true },
  party: { type: String, default: "" },
  district: { type: String, default: "" },
  registered_district: { type: String, default: "" },	
  vote_count: { type: Number, default: 0 },
  phone: { type: String, default: "" },
  phone_verified: { type: Boolean, default: false },
  email: { type: String, required: true, unique: true },
  email_verified: { type: Boolean, default: false },
  password: { type: String, required: true },
  has_voted: { type: Boolean, default: false },
  bio: { type: String, default: "" },
  face_image: { type: String, default: "" },
});

  const CandidateModel = mongoose.model('Candidate', candidateSchema);

module.exports = CandidateModel;