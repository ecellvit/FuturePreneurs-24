"use client"
import { useState } from 'react';

const TeamForm = () => {
    const [teamName, setTeamName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/create-team', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ teamName }),
            });

            const result = await response.json();
            console.log(result.message); // Show success message or handle error
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Create Team"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            <button type="submit">Create</button>
        </form>
    );
};

export default TeamForm;
