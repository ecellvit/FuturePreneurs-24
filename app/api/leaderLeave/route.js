import mongoose from 'mongoose';
import { connectMongo } from "@/libs/mongodb";
import { Users } from "@/models/user.model";
import { TeamModel } from "@/models/team.model";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongo();

        // Hardcoded leader email (can be replaced with actual logic)
        const leaderEmail = 'john.doehehehe@example.com';

        // Find the leader's user details using their email
        const leaderUser = await Users.findOne({ email: leaderEmail });
        if (!leaderUser || !leaderUser.email) {
            return NextResponse.json({ message: "Leader not found" }, { status: 404 });
        }

        // Find the team by the leader's email
        const team = await TeamModel.findOne({ leaderEmail });
        if (!team) {
            return NextResponse.json({ message: "Team not found for this leader" }, { status: 404 });
        }

        const oldLeaderId = team.teamLeaderId;

        // Extract newLeaderId from the request body (it is optional)
        const { newLeaderId } = await req.json();

        // Use let for newLeaderId since it can change if not provided
        let newLeaderIdToUse = newLeaderId;
        let newLeader;

        // Check if newLeaderId is provided and valid, otherwise default to the next member
        if (newLeaderIdToUse && mongoose.Types.ObjectId.isValid(newLeaderIdToUse)) {
            newLeader = await Users.findById(newLeaderIdToUse);
            if (!newLeader) {
                return NextResponse.json({ message: "New leader not found" }, { status: 404 });
            }
        } else {
            // If no valid new leaderId is provided, default to the first available member
            if (team.members.length > 1) {
                newLeaderIdToUse = team.members[1]; // Pick the next member as leader
                newLeader = await Users.findById(newLeaderIdToUse);
            } else {
                return NextResponse.json({ message: "No valid member to assign as a leader" }, { status: 400 });
            }
        }

        // Update the team:
        // 1. Remove the old leader from the members array
        // 2. Make the new leader the 0th index in the members array
        const updatedMembers = team.members
            .filter(member => !member.equals(oldLeaderId)) // Remove old leader
            .map(member => member.toString()); // Convert all ObjectIds to strings

        updatedMembers.unshift(newLeader._id.toString()); // Add new leader at the 0th index as string

        await TeamModel.findByIdAndUpdate(
            team._id,
            {
                $set: {
                    teamLeaderId: newLeader._id,
                    leaderName: newLeader.name,
                    leaderEmail: newLeader.email,
                    members: updatedMembers, // Update members as array of strings
                },
            },
            { new: true }
        );

        // Update old leader in Users collection: set teamId and teamLeaderId to null
        await Users.findByIdAndUpdate(
            oldLeaderId,
            { $set: { teamId: null, teamLeaderId: null } }
        );

        // Update teamLeaderId and teamId for all members in the team
        await Users.updateMany(
            { _id: { $in: updatedMembers } },
            { $set: { teamLeaderId: newLeader._id, teamId: team._id } }
        );

        return NextResponse.json({
            message: "Leader changed successfully",
            status: 200,
        });
    } catch (err) {
        console.error("Error in leaderLeave:", err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
