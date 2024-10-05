import { connectMongo } from "@/libs/mongodb";
import { Users } from "@/models/user.model";
import { TeamModel } from "@/models/team.model";
import { NextResponse } from "next/server";
import { getTokenDetails } from "@/utils/getTokenDetails";
import { getToken } from "next-auth/jwt";

export async function GET(req) {
  try {
    await connectMongo();
    
    // Retrieve the access token from the request
    const token = await getToken({ req });
    const auth = token ? token.accessTokenFromBackend : req.headers.get('Authorization')?.split(' ')[1];
    
    if (!auth) {
      return NextResponse.json({ message: "Authorization token missing" }, { status: 401 });
    }
    
    // Retrieve user details
    const userId = await getTokenDetails(auth);
    const leader = await Users.findById(userId);

    if (!leader) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Find the team associated with the leader
    const team = await TeamModel.findById(leader.teamId);

    if (!team) {
      return NextResponse.json({ message: "Team not found" }, { status: 404 });
    }

    // Fetch the Google Form link
    const googleFormLink = team.wallet;

    // Return the form link
    return NextResponse.json({ googleFormLink }, { status: 200 });

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
