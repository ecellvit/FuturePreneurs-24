import { connectMongoDB } from "@/libs/mongodb";
import Team from "@/models/Team"; // Import the Team model
import Users from "@/models/user.model"; // Import the User model
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        console.log("Connected to MongoDB");

        const { teamName, email } = await req.json(); // Extract teamName and email from the request body

        if (!teamName || !email) {
            return NextResponse.json({ status: 400, message: "Team name and email are required" });
        }

        // Log request data
        console.log("Request Data:", { teamName, email });

        // Check if the user exists by email
        const user = await Users.findOne({ email });

        if (!user) {
            return NextResponse.json({ status: 404, message: "User not found" });
        }

        console.log("User found:", user); // Log the user details for debugging

        // Check if the team already exists in the database
        const existingTeam = await Team.findOne({ name: teamName });

        if (existingTeam) {
            return NextResponse.json({ status: 400, message: "Team name already exists" });
        }

        // Update the user's teamName using findOneAndUpdate
        const updatedUser = await Users.findOneAndUpdate(
            { email },
            { $set: { teamName } },
            { new: true } // Return the updated document
        );

        console.log("Updated User:", updatedUser); // Log the updated user details

        // Create a new team entry if it doesn't exist
        const newTeam = new Team({ name: teamName });
        await newTeam.save(); // Save the new team
        console.log("New team created:", newTeam);

        return NextResponse.json({ status: 200, message: "Team created and user updated successfully" });
    } catch (e) {
        console.error("Error", e);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
}
