import React, {useState} from 'react';

const Menu = props => {
    console.log("logging props", props)
    const {itemName, desc, price, orders} = props;
    // const [state, setState] = useState({
    //     clickCount: 0
    // });
    const [orderCount, setorderCount] = useState(orders)
    const [priceAmount, setPriceAmount] = useState(price)
    
    // setorderCount(orderCount+1)

    const increaseOrder = ()=>{
        console.log(`clicked to order more ${itemName}`)
        setorderCount(orderCount+1)
        setPriceAmount(priceAmount+2)
    }

    return(
        <div className="menuItem">
            <h1>{itemName}</h1>
            <p>Description: {desc}</p>
            <p>Price: ${priceAmount}</p>
            <p>Number of orders today: {orderCount}</p>
            <button onClick={increaseOrder}>Order more {itemName}</button>
           
        </div>
    );
}
export default Menu;
