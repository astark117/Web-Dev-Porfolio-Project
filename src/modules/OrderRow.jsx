import OrderQuantity from './OrderQuantity.jsx';

function OrderRow( { product }){

    return(
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US', {style: 'currency', currency:'USD', minimumFractionDigits: 2})}</td>
            <td><OrderQuantity product={product} /> </td>
            <td></td>
        </tr>
    );
}

export default OrderRow;