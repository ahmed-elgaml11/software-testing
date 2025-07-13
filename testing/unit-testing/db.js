const getOrder = (id) => {
    return { id, price: 100 }
}
const updateOrder = (odrer) => {
    console.log('updated Successfully...!')
}
module.exports = { 
    getOrder, 
    updateOrder
 }