import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
const userSchema = new Schema({
    email: { type: String, required: true },
    name: String,
    regNo: String,
    mobNo: Number,
    teamName: {
      type: String,
      default: ''
    },
    name: {
      type: String,
    },
    regNo: {
      type: String,
    },
    mobNo: {
      type: Number,
    },
    hasFilledDetails:{
        type:Boolean,
    },
    consent:{
        type:Boolean,
    },
    teamId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TeamModel'
    },
    teamLeaderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TeamModel'
    }
  },
  { collection: "Users" }
);
    hasFilledDetails: Boolean,
    consent: Boolean
}, { collection: "Users" });

export const Users =
  mongoose.models.Users || mongoose.model("Users", userSchema);
const Users = mongoose.models.Users || mongoose.model('Users', userSchema);
export default Users;  // Use default export for the Users model
