import { createContext,useContext, useState } from "react";

const OrderContext=createContext();

const OrderProvider=({children})=>{

  const [orders, setOrders]=useState([]);

  const addOrder=(newOrder)=>{
    const allOrders=[...orders , newOrder]
    setOrders(allOrders)
  }
  const updateOrder=(updatedOrder)=>{
    setOrders((previousOrders) =>
        previousOrders.map((order) =>order.orderID === updatedOrder.orderID ? updatedOrder : order)
  
  );
};
 return (
  <OrderContext.Provider value={{ orders,addOrder,updateOrder }}>
    {children}
  </OrderContext.Provider>
);
  
}

export { OrderProvider };

export const useOrders = () => {
  const context = useContext(OrderContext);
  return context;
};