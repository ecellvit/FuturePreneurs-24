"use client"
import { useState } from 'react';

const TeamForm = () => {
    const [teamName, setTeamName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/createTeam', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ teamName }),
            });

            const result = await response.json();
            setMessage(result.message || 'Team created successfully!');
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    const styles = {
        container: {
            maxWidth: '500px',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        label: {
            fontSize: '16px',
            marginBottom: '8px',
        },
        input: {
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '12px',
            fontSize: '16px',
        },
        button: {
            padding: '10px',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        feedback: {
            marginTop: '12px',
            fontSize: '14px',
            color: '#ff4d4d',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Create a New Team</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label htmlFor="teamName" style={styles.label}>
                    Team Name
                </label>
                <input
                    id="teamName"
                    type="text"
                    placeholder="Team name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    style={styles.input}
                />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                >
                    Create Team
                </button>
            </form>
            {message && <p style={styles.feedback}>{message}</p>}
        </div>
    );
};

export default TeamForm;
