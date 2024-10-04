// pages/api/validate-venture.js
import { NextResponse } from 'next/server';
import { TeamModel } from '@/models/team.model';

const ventures = [
    {
        id: 0,
        name: "Polaris and Zero Motorcycles",
        risk: "Very High Risk",
        returnRate: 2.0, // 200% return
    },
    {
        id: 1,
        name: "Molson Coors and SABMiller",
        risk: "Very High Risk",
        returnRate: 0.0, // No return
    },
    {
        id: 2,
        name: "BMW and Brilliance Auto Group",
        risk: "High Risk",
        returnRate: 1.0, // 100% return
    },
    {
        id: 3,
        name: "ONGC Videsh",
        risk: "Very Low Risk",
        returnRate: 0.25, // 25% return
    },
    {
        id: 4,
        name: "Walmart and Eko",
        risk: "Very Low Risk",
        returnRate: 0.25, // 25% return
    },
    {
        id: 5,
        name: "Apollo and GlaxoSmithKline",
        risk: "Medium Risk",
        returnRate: 0.0, // 0% return
    },
    {
        id: 6,
        name: "Goldwinner Oil and Homeware Containers",
        risk: "Medium Risk",
        returnRate: 0.5, // 50% return
    },
    {
        id: 7,
        name: "Flexfit",
        risk: "High Risk",
        returnRate: 0.0, // no return
    },
    {
        id: 8,
        name: "Volvo and Geely",
        risk: "Low Risk",
        returnRate: 0.35, // 35% return
    },
    {
        id: 9,
        name: "Zoeing and Martin Head",
        risk: "Low Risk",
        returnRate: 0.35, // 35% return
    }
];

export async function handler(req) {
    if (req.method === 'POST') {
        const { userId } = await req.json();

        // Find the team for the user using teamLeaderId
        try {
            const team = await TeamModel.findOne({ teamLeaderId: userId });

            if (!team) {
                return NextResponse.json({ error: 'Team not found.' }, { status: 404 });
            }

            // Initialize the ventures array if it doesn't exist
            if (!team.ventures) {
                team.ventures = Array(10).fill(0);
            }

            // Calculate total returns based on the venture's risk profile
            let totalReturns = 0;

            team.ventures.forEach((investment, idx) => {
                const venture = ventures.find(v => v.id === idx);
                if (venture) {
                    totalReturns += investment * venture.returnRate;
                }
            });

            return NextResponse.json({ totalReturns }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error: 'Failed to retrieve data from the database.' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
    }
}