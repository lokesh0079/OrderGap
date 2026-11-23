
import { useParams } from "react-router";
import { useOrders } from "../context/OrderContext";

import "../styles/OrderDetails.css";
import { useNavigate } from "react-router";

function OrderDetails() {
  const { orderID } = useParams();
const {orders}=useOrders()
const navigate = useNavigate();

const selectedOrder = orders.find(
  (order) => order.orderID === orderID
);

if(!selectedOrder){
 return <h3>Order Not Found</h3>
}
  return (
      <div className="order-details-page">

    {/* Page Header */}
    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
      <div>
        <h2 className="fw-bold mb-1">Order Details</h2>
        <p className="text-muted mb-0">
          Review and manage customer order information.
        </p>
      </div>

       <span className={`badge fs-6 ${
        selectedOrder.status === "Needs Information"
          ? "bg-warning text-dark"
          : "bg-success"
      }`}>
        {selectedOrder.status}
      </span>
      <button
  className="btn btn-primary"
  onClick={() => navigate(`/orders/${orderID}/edit`)}
>
  Edit Order
</button>
    </div>

      {/* Order ID */}
    <div className="order-id-card mb-4">
      <span className="text-muted small">ORDER ID</span>
      <h5 className="fw-bold mb-0 mt-1">
        {selectedOrder.orderID}
      </h5>
    </div>
         
         <div className="row g-4">

      {/* Customer Information */}
      <div className="col-md-6">
        <div className="card order-detail-card h-100">
          <div className="card-body">
            <h5 className="section-title">Customer Information</h5>

            <div className="detail-item">
              <span>Customer Name</span>
              <strong>{selectedOrder.customer || "Not provided"}</strong>
            </div>


         <div className="detail-item">
              <span>Phone Number</span>
              <strong>{selectedOrder.customerPhone || "Not provided"}</strong>
            </div>
          </div>
        </div>
      </div>
       {/* Product Information */}
      <div className="col-md-6">
        <div className="card order-detail-card h-100">
          <div className="card-body">
            <h5 className="section-title">Product Information</h5>

            <div className="detail-item">
              <span>Products</span>
              <strong>{selectedOrder.products.join(", ") || "Not provided"}</strong>
            </div>


            <div className="detail-item">
              <span>Quantities</span>
              <strong>{selectedOrder.quantities.join(", ") || "Not provided"}</strong>
            </div>

            <div className="detail-item">
              <span>Sizes</span>
              <strong>{selectedOrder.sizes.join(", ") || "Not provided"}</strong>
            </div>

                        <div className="detail-item">
              <span>Colors</span>
              <strong>{selectedOrder.colors.join(", ") || "Not provided"}</strong>
            </div>

            <div className="detail-item">
              <span>Prices</span>
              <strong>{selectedOrder.prices.join(", ") || "Not provided"}</strong>
            </div>

 </div>
        </div>
      </div>
   {/* Delivery Information */}
      <div className="col-md-6">
        <div className="card order-detail-card h-100">
          <div className="card-body">
            <h5 className="section-title">Delivery Information</h5>

            <div className="detail-item">
              <span>Delivery Date</span>
              <strong>
                {selectedOrder.deliveryDate
                  ? new Date(selectedOrder.deliveryDate).toLocaleDateString()
                  : "Not provided"}
              </strong>
            </div>

              <div className="detail-item">
              <span>Delivery Address</span>
              <strong>{selectedOrder.deliveryAddress || "Not provided"}</strong>
            </div>
          </div>
        </div>
      </div>


   {/* Missing Information */}
      <div className="col-md-6">
        <div className="card order-detail-card h-100">
          <div className="card-body">
            <h5 className="section-title">Information Check</h5>

            {selectedOrder.missingFields.length > 0 ? (
              <div className="missing-info-box">
                <p className="fw-semibold mb-2">
                  Information Required
                </p>

                   {selectedOrder.missingFields.map((field, index) => (
                  <div key={index} className="missing-field-item">
                    <span>•</span> {field}
                  </div>
                ))}
              </div>
            ) : (
              <div className="complete-info-box">
                <strong>All required information is available.</strong>
              </div>
            )}
          </div>
        </div>
      </div>

       </div>
  </div>
);

}

export default OrderDetails;
