const getSoreCart = () => {
    const store = localStorage.getItem('cart')
    if(store){
        return JSON.parse(store)
    }
    return [];
}
 const saveCartToLs =(cart)=>{
    const cartstringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartstringify);


 }

const addToLs = (id) => {
    const cart = getSoreCart();
    cart.push(id);
    saveCartToLs(cart);

}
export {addToLs ,getSoreCart}