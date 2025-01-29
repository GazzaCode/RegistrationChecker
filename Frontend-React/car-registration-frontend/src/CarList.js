import React, { useState, useEffect } from "react";
import axios from "axios";

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5100/api/cars")
            .then((response) => setCars(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Registration Expiry</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car) => (
                    <tr key={car.id}>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.registrationExpiry}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}; 


export default CarList;