

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Available product in Cart: <span className="font-bold text-purple-500 text-2xl">{cart.length }</span></h3>
            <div className="flex gap-2 flex-wrap mt-4">
                {cart.map(bottle => <img className="w-[100px]" key={bottle.id} src={bottle.img}></img>)}
            </div>
        </div>
    );
};

export default Cart;