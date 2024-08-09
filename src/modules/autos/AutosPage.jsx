import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AutoList from './AutoList.jsx';
import { Link } from 'react-router-dom';
import { MdFormatListBulletedAdd } from "react-icons/md";

function AutosPage({ setAuto }) {
    const redirect = useNavigate();
    const [autos, setAutos] = useState([]);

    // Retrieves and loads all autos in the collection
    const loadAutos = async () => {
        const response = await fetch('/autos');
        const autos = await response.json();
        setAutos(autos);
    }

    // Edits an auto in the collection
    const onEditAuto = async auto => {
        setAuto(auto);
        redirect("/updateAuto");
    }

    // Deletes an auto from the collection 
    const onDeleteAuto = async _id => {
        const response = await fetch(`/autos/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/autos');
            const autos = await getResponse.json();
            setAutos(autos);
        } else {
            console.error(`error deleting = ${_id}, status code = ${response.status}`);
        }
    }

    useEffect(() => {
        loadAutos();
    }, []);

    // Display the automobiles
    return (
        <>
            <h2>List of Automobiles</h2>
            <article>
                <p>Here is a log of all the automobiles I have ever owned.</p>
                <AutoList
                    autos={autos}
                    onEdit={onEditAuto}
                    onDelete={onDeleteAuto}
                />
                    <Link to="/create"><MdFormatListBulletedAdd /></Link>
            </article>
        </>
    );
}

export default AutosPage;