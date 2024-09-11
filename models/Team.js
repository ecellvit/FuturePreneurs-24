import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });

const Team = mongoose.models.Team || mongoose.model('Team', TeamSchema);

export default Team;
