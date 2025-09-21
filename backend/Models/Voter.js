const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voterSchema = new Schema({
  // voter_id: { type: String, unique: true, sparse: true , default: ""},
  voter_id: { type: String, unique: true, sparse: true },
  name: { type: String, required: true },
  // cnic: { type: String, unique: true, sparse: true },
  cnic: { type: String, unique: true, sparse: true },
  registered_district: { type: String, default: "" },
  has_voted: { type: Boolean, default: false },
  phone: { type: String, default: "" },
  phone_verified: { type: Boolean, default: false },
  email: { type: String, required: true, unique: true },
  email_verified: { type: Boolean, default: false },
  password: { type: String, required: true },
  face_image: { type: String, default: "" },
});

const VoterModel = mongoose.model('Voter', voterSchema);

module.exports = VoterModel;


