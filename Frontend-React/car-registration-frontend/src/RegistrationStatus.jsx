import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { HubConnectionBuilder } from '@microsoft/signalr';

const RegistrationStatus = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    // Columns for the DataGrid
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "make", headerName: "Make", width: 150 },
        { field: "model", headerName: "Model", width: 150 },
        { field: "registrationExpiry", headerName: "Registration Expiry", width: 200 },
    ];

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl("http://localhost:5100/registration")
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(() => {
                console.log("SignalR Connected");
                setLoading(false); // Set loading to false once the connection is established
            })
            .catch((err) => console.error("SignalR Connection Error:", err));

        connection.on("UpdateCars", (cars) => {
            setCars(() => {
                // Convert cars string to JSON array
                const parsedCars = JSON.parse(cars);

                // Ensure each car has a unique id property
                const carsWithId = parsedCars.map((car, index) => ({
                    id: car.Id || index, // Use existing Id or fallback to index
                    make: car.Make,
                    model: car.Model,
                    registrationExpiry: car.RegistrationExpiry,
                }));

                return carsWithId;
            });
        });

        // Cleanup connection on component unmount
        return () => {
            connection.stop();
        };
    }, []);

    return (
        <div style={{ height: 600, width: "100%", padding: "1rem" }}>
            <h1>Registration Status</h1>

            <DataGrid rows={cars} columns={columns} loading={loading} />


        </div>
    );
};

export default RegistrationStatus;
