import { useNavigate } from "react-router";
import { useOrders } from "../context/OrderContext";


function AllOrders() {
  const { orders } = useOrders()
  const navigate=useNavigate()
  return (
    <div className="all-orders-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>All Orders</h2>
          <p className="text-muted">
            Track and manage all your customer orders.
          </p>
          <p>Total Orders: {orders.length}</p>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Order ID :</th>
                  <th>Customer</th>
                  <th>Products</th>
                  <th>Missing Fields</th>
                  <th>Issues</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>



              <tbody>
                  {orders.length === 0 ? (    <tr>
      <td colSpan="7" className="text-center py-5">
        <h5>No orders found</h5>
        <p className="text-muted mb-0">
          Analyzed customer orders will appear here.
        </p>
      </td>
    </tr>
  ) :(
 orders.map((order) => (
      <tr key={order.orderID}>
        <td>{order.orderID}</td>
        <td>{order.customer}</td>
        <td>{order.products.join(", ")}</td>
        <td>{order.missingFields.length}</td>
        <td>0</td>
        <td>{order.status}</td>
        <td>
      <button className="btn btn-sm btn-primary" onClick={()=>{
        navigate(`/orders/${order.orderID}`)
      }}>View</button>
      </td>
      </tr>
    ))
   )}
              </tbody>
 
            
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllOrders;
