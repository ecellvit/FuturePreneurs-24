// pages/api/validate-venture.js
import { NextResponse } from 'next/server';
import { TeamModel } from '@/models/team.model';

export async function handler(req) {
    if (req.method === 'POST') {
        const { userId, ventureId, amount } = await req.json();

        // Validate the amount
        if (amount < 4500000) {
            return NextResponse.json({ error: 'The minimum amount is 45 lakhs.' }, { status: 400 });
        }

        // Find the team for the user
        try {
            const team = await TeamModel.findOne({ userId });

            if (!team) {
                return NextResponse.json({ error: 'Team not found.' }, { status: 404 });
            }

            // Initialize the ventures array if it doesn't exist
            if (!team.ventures) {
                team.ventures = Array(10).fill(0);
            }

            //adjust index of ventureId
            const index = ventureId - 1;

            // Update the array at the index corresponding to the selected venture's ID
            team.ventures[ventureId] = amount;

            await team.save();

            return NextResponse.json({ message: `Selected Venture ID: ${ventureId}, Amount: ${amount}`, team }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error: 'Failed to save data to the database.' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
    }
}