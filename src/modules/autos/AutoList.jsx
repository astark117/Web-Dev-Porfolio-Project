import Auto from './Auto.jsx';
import React from 'react';

function AutoList({ autos, onDelete, onEdit }) {
    return (
        <table id='autos'>
            <caption>Add and Edit Automobiles</caption>
            <thead>
                <tr>
                    <th>Date Purchased</th>
                    <th>Country of Origin</th>
                    <th>Year</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Odometer</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {autos.map((auto, i) => (
                    <Auto  
                        auto={auto}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default AutoList;