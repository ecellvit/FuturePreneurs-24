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

        // Create a new team entry
        const newTeam = new Team({ name: teamName });
        await newTeam.save();

        return NextResponse.json({ status: 200, message: "Team created successfully" });
    } catch (e) {
        console.error("Error", e);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
}
