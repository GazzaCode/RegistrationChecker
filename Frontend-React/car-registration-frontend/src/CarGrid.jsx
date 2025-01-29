import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const CarGrid = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    // Columns for the DataGrid
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "make", headerName: "Make", width: 150 },
        { field: "model", headerName: "Model", width: 150 },
        { field: "registrationExpiry", headerName: "Registration Expiry", width: 200 },
    ];

    // Fetch data from the backend API
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get("http://localhost:5100/api/cars");
                const formattedCars = response.data.map((car) => ({
                    ...car,
                    registrationExpiry: new Date(car.registrationExpiry).toLocaleDateString(),
                }));
                setCars(formattedCars);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div style={{ height: 600, width: "100%", padding: "1rem" }}>
            <h1>Car List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <DataGrid rows={cars} columns={columns} pageSize={10} checkboxSelection />
            )}
        </div>
    );
};

export default CarGrid;