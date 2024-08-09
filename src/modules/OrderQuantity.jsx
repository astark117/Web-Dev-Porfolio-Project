import { useState } from "react";
import { FaCircleChevronUp } from "react-icons/fa6";
import { FaCircleChevronDown } from "react-icons/fa6";

function OrderQuantity() {
    const [quantity, setQuantity] = useState(0)
    const  increment = () =>{
        if (quantity === 10) {
            setQuantity(10)
        }
        else{
            setQuantity(quantity+1)
        }
    }

    const decrement = () =>{
        if (quantity === 0){
            setQuantity(0)
        }
        else{
            setQuantity(quantity-1)
        }
    }
    return (
        <div class="clicker">
            <i><FaCircleChevronDown onClick={decrement}/></i>
            {quantity}
            <i><FaCircleChevronUp onClick={increment}/> </i>
        </div>
    );
}
export default OrderQuantity