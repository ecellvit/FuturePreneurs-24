import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const teamSchema = new Schema({
    name: { type: String, required: true },
});

const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export default Team;  // Use default export for the Team model
