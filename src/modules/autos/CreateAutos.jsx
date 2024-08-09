import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";

export const AutoCreate = () =>{
    const [datePurchased, setDatePurchased] = useState('');
    const [countryOfOrigin, setCountryOfOrigin] = useState('');
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [mileage, setMileage] = useState('');

    const redirect = useNavigate();

    const addAuto = async () => {
        const newAuto = {datePurchased, countryOfOrigin, year, make, model, mileage}
        const response = await fetch('/autos', {
            method: 'POST',
            body: JSON.stringify(newAuto),
            headers: {
                'Content-Type' : 'application/json',
            },
        });
        if (response.status === 201) {
            alert('The new auto was succesfully created.');
        }
        else{
            alert(`${response.status} error, Auto could not be created.`);
        }
        redirect("/autosPage");
    }

    return(
        <>
        <h2>Add a new automobile</h2>
        <article>
            <p>Please enter a new vehicle into the collection here.</p>
            <table>
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
                            <button type="submit" id="submit" onClick={addAuto}>Add Vehicle</button>
                            </label>
        </article>
        </>
    )
}

export default AutoCreate