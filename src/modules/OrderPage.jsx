import OrderRow from './OrderRow.jsx'

function OrderPage( { products }){
    return(
        <>
            <h2>Order Form</h2>
            <article>
                <p></p>
                <table id="order">
                    <caption>Pet Products:</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) =>
                            <OrderRow
                                product={product}
                                key={i}
                            />)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="3">Running Total
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </article>
        </>
    )
}

export default OrderPage;