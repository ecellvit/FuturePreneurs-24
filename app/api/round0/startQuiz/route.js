import { connectMongo } from "@/libs/mongodb";
import { Round0 } from "@/models/round0.model";
import { TeamModel } from '@/models/team.model';
import { getTokenDetails } from "@/utils/getTokenDetails";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// Handle POST request to start the quiz
export async function POST(req) {
  await connectMongo();
  console.log('Inside POST route');

  const token = await getToken({ req });
  const auth = token
    ? token.accessTokenFromBackend
    : req.headers.get("Authorization").split(" ")[1];
  
  let userId = await getTokenDetails(auth);

  try {
    // Fetch the team based on the leader's userId
    const qualTeam = await TeamModel.findOne({ teamLeaderId: userId });

    if (!qualTeam) {
      return NextResponse.json({ message: "team not found" }, { status: 404 });
    }

    // Parse the JSON body from the request
    const body = await req.json();
    const { time } = body; // Get time from the body

    // Convert the time string into a Date object
    const currentTime = new Date(time);
    const quizStartTime = new Date("October 3, 2024 18:43:00");

    console.log('Current Time:', currentTime);
    console.log('Quiz Start Time:', quizStartTime);

    // Compare the current time with quiz start time
    if (currentTime < quizStartTime) {
      console.log(currentTime)
      return NextResponse.json({
        message: "Quiz has not started yet",
        canStart: false,
      }, { status: 403 });
    } else {
      // Fetch the Round0 document associated with this team
      const round0Data = await Round0.findOne({ teamId: qualTeam._id });

      console.log("Existing Round0 Data:", round0Data);

      if (round0Data.questionCategory !== 'medium' || round0Data.questionPointer !== 0) {
        // Update the round if the quiz hasn't started
        const updatedData = await Round0.findOneAndUpdate(
          { teamId: qualTeam._id },
          {
            $set: {
              questionCategory: 'medium',
              questionPointer: 0,
            },
          },
          { new: true } // Return the updated document
        );

        console.log("Updated Round0 Data:", updatedData);

        return NextResponse.json({ message: 'Round0 started', data: updatedData }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'Round0 already started' }, { status: 200 });
      }
    }
  } catch (error) {
    console.error('Error in starting the quiz:', error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
