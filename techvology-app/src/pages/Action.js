import React from 'react'

const Action = () => {
    const database = [ //Temp Database with manually created values
        {
            id: 1,
            name: 'Walking',
            emissions: '0'
        },
        {
            id: 2,
            name: 'Driving',
            emissions: '10 lbs per day'
        }
    ];

    return (
        <div className="actions">
            <h1>Actions</h1>
            {database.map(action => { // Loops thru the database
                return (
                    <div key={action.id}>
                        <h2>Action: {action.name}</h2>
                        <h3>Carbon Emissions: {action.emissions}</h3>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default Action