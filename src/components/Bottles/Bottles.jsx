
import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLs, getSoreCart } from "../../Utilities/localsorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles,setBottles] = useState([])
    const [cart,setCart] = useState([])
    useEffect( () => {
        fetch('./public/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    useEffect(() =>{
        
        if(bottles.length){
            const saved = []
            const storeCart = getSoreCart();
            for (const id of storeCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    saved.push(bottle)
                }
            }
            setCart(saved);

        }

    },[bottles])
     const handlePurchase = (bottle) => {
        const newCart = [...cart,bottle]
        setCart(newCart)
        addToLs(bottle.id)
     }
    return (
        <div>
            <h2>Bottles here : {bottles.length}</h2>
            <Cart cart={cart}></Cart>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                bottles.map( bottle => <Bottle
                    bottle={bottle}
                    handlePurchase = { () => handlePurchase(bottle) }
                    key ={bottle.id}
                    
                    
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;