import React from 'react';
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


function Auto({ auto, onEdit, onDelete }) {
    return (
        <tr>
            <td>{auto.datePurchased.slice(0,10)}</td>
            <td>{auto.countryOfOrigin}</td>
            <td>{auto.year}</td>
            <td>{auto.make}</td>
            <td>{auto.model}</td>
            <td>{auto.mileage}</td>
            <td><FaRegEdit onClick={() => onEdit(auto)}/></td>
            <td><MdOutlineDeleteForever onClick={() => onDelete(auto._id)} /></td>
        </tr>
    );
}

export default Auto;