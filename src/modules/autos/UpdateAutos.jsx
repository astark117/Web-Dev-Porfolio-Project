import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const UpdateAuto = ({ autoToUpdate }) => {
    const [datePurchased, setDatePurchased] = useState(autoToUpdate.datePurchased.slice(0,10));
    const [countryOfOrigin, setCountryOfOrigin] = useState(autoToUpdate.countryOfOrigin);
    const [year, setYear] = useState(autoToUpdate.year);
    const [make, setMake] = useState(autoToUpdate.make);
    const [model, setModel] = useState(autoToUpdate.model);
    const [mileage, setMileage] = useState(autoToUpdate.mileage);

    const redirect = useNavigate();

    const autoUpdate = async () => {
        const response = await fetch(`/autos/${autoToUpdate._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                datePurchased: datePurchased,
                countryOfOrigin: countryOfOrigin,
                year:year,
                make: make,
                model: model,
                mileage: mileage
            }),
            headers: {'Content-Type': 'application/json',},
        });

            if (response.status === 200) {
                alert(`Update successfully completed.`)
            }
            else{
                const errMessage = await response.json();
                alert(`${response.status} error, update could not be completed. ${errMessage.Error}`);
            }
            redirect("/autosPage");
        }
    
    return(
        <>
        <h2>Update a vehicle</h2>
        <article>
            <table>
                <caption>Edit this vehicle's details:</caption>
                <thead>
                    <tr>
                        <th>Date Purchased</th>
                        <th>Vehicle Country of Origin</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Odometer</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>
                            <label htmlFor="datePurchased"></label>
                            <input type="date" placeholder="Month/Day/Year" id="datePurchased"
                                value={datePurchased}
                                onChange={e => setDatePurchased(e.target.value)}
                            />
                        </td>
                        <td>
                            <label htmlFor="countryOfOrigin"></label>
                            <input type="text" placeholder="Ex: USA" id="countryOfOrigin"
                                value={countryOfOrigin}
                                onChange={e => setCountryOfOrigin(e.target.value)}
                            />
                        </td>
                        <td>
                            <label htmlFor="year"></label>
                            <input type="number" placeholder="Ex: 2016" id="year"
                                value={year}
                                onChange={e => setYear(e.target.value)}
                            />
                        </td>
                        <td>
                            <label htmlFor="make"></label>
                            <input type="text" placeholder="Ex: Ford" id="make"
                                value={make}
                                onChange={e => setMake(e.target.value)}
                            />
                        </td>
                        <td>
                            <label htmlFor="model"></label>
                            <input type="text" placeholder="Ex: F150" id="model"
                                value={model}
                                onChange={e => setModel(e.target.value)}
                            />
                        </td>
                        <td>
                            <label htmlFor="mileage"></label>
                            <input type="number" placeholder="Ex: 100000" id="mileage"
                                value={mileage}
                                onChange={e => setMileage(e.target.value)}
                            />
                        </td>
                    </tr>

                </tbody>
            </table>
            <label htmlFor='submit'>
                            <button type="submit" id="submit" onClick={autoUpdate}>Update Vehicle</button>
                            </label>
        </article>
        </>
    )
}

export default UpdateAuto;