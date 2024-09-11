import { connectMongoDB } from "@/libs/mongodb";
import Team from "@/models/Team"; // Import the Team model
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        console.log("Inside route");

        const { teamName } = await req.json(); // Extract teamName from the request body

        if (!teamName) {
            return NextResponse.json({ status: 400, message: "Team name is required" });
        }

        // Check if the team already exists in the database
        const existingTeam = await Team.findOne({ name: teamName });

        if (existingTeam) {
            return NextResponse.json({ status: 400, message: "Team name already exists" });
        }

        // Create a new team entry if it doesn't exist
        const newTeam = new Team({ name: teamName });
        await newTeam.save();
        console.log(newTeam);

        

        return NextResponse.json({ status: 200, message: "Team created successfully" });
    } catch (e) {
        console.error("Error", e);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
}
