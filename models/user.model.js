import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema({
    email: { type: String, required: true },
    name: String,
    regNo: String,
    mobNo: Number,
    teamName: {
      type: String,
      default: ''
    },
    hasFilledDetails: Boolean,
    consent: Boolean
}, { collection: "Users" });

const Users = mongoose.models.Users || mongoose.model('Users', userSchema);
export default Users;  // Use default export for the Users model
