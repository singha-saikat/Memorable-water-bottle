

const Bottle = ({ bottle,handlePurchase }) => {
    console.log(bottle);
    const {name,price,img} = bottle
    return (
        <div className="border-2 border-red-200 m-4 space-y-2 p-2 ">
            <h5 className="text-red-500">Bottle:{name}</h5>
            <div className="w-[200px] mx-auto">
                <img src={img} alt="" />    
            </div>
            
            <p>Price: ${price}</p>
            <button onClick={() => handlePurchase()} className="bg-black text-white p-2 rounded">Purchase</button>
            
        </div>
    );
};

export default Bottle;