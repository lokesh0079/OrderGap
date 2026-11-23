import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useOrders } from "../context/OrderContext";
import checkMissingFields from "../utils/checkMissingFields";

const EditOrder=()=>{
const {orderID}=useParams()
const navigate = useNavigate();
const {orders,updateOrder}=useOrders();

const selectedOrder = orders.find(
  (order) => order.orderID === orderID
);

const [formData, setFormData] = useState(() => ({
  customer: selectedOrder?.customer || "",
  customerPhone: selectedOrder?.customerPhone || "",
  products: selectedOrder?.products || [],
  quantities: selectedOrder?.quantities || [],
  sizes: selectedOrder?.sizes || [],
  colors: selectedOrder?.colors || [],
  prices: selectedOrder?.prices || [],
  deliveryDate: selectedOrder?.deliveryDate
    ? new Date(selectedOrder.deliveryDate).toISOString().slice(0, 10)
    : "",
  deliveryAddress: selectedOrder?.deliveryAddress || "",
}));

if (!selectedOrder) {
  return <h3>Order Not Found</h3>;
}
const handleSave = () => {
  const updatedOrder = {
    ...selectedOrder,

    customer: formData.customer.trim(),
    customerPhone: formData.customerPhone.trim(),

    products: formData.products.filter((item) => item.trim() !== ""),
    quantities: formData.quantities.filter((item) => item !== ""),
    sizes: formData.sizes.filter((item) => item.trim() !== ""),
    colors: formData.colors.filter((item) => item.trim() !== ""),
    prices: formData.prices.filter((item) => item !== ""),

    deliveryDate: formData.deliveryDate
      ? new Date(`${formData.deliveryDate}T00:00:00`)
      : null,

    deliveryAddress: formData.deliveryAddress.trim(),
  };

  const missing = checkMissingFields(updatedOrder);

  updatedOrder.missingFields = missing;

  updatedOrder.status =
    missing.length > 0 ? "Needs Information" : "Ready for Confirmation";

  updateOrder(updatedOrder);

  navigate(`/orders/${orderID}`);
};
  return(
  <div>
      <h2>Edit Order</h2>

      <label className="form-label">Customer Name</label>
      <input
  type="text"
  className="form-control mb-3"
  value={formData.customer}
  onChange={(e) =>
    setFormData({
      ...formData,
      customer: e.target.value
    })
  }
/>
<label className="form-label">Customer Phone</label>
   <input
  type="tel"
  className="form-control mb-3"
  value={formData.customerPhone}
  onChange={(e) =>
    setFormData({
      ...formData,
      customerPhone: e.target.value
    })
  }
/>
<label className="form-label">Address </label>
   <input
  type="text"
  className="form-control mb-3"
  value={formData.deliveryAddress}
  onChange={(e) =>
    setFormData({
      ...formData,
      deliveryAddress: e.target.value
    })
  }
/>

<label className="form-label">Products</label>

  <input
  type="text"
  className="form-control mb-3"
  value={formData.products[0] || ""}
  onChange={(e) =>
    setFormData({
      ...formData,
      products: [e.target.value],
    })
  }
/>
<label className="form-label">Qunatities</label>
   <input
  type="text"
  className="form-control mb-3"
  value={formData.quantities[0] || ""}
  onChange={(e) =>
    setFormData({
      ...formData,
      quantities: [Number(e.target.value)]
    })
  }
/>
<label className="form-label">Sizes</label>
   <input
  type="text"
  className="form-control mb-3"
 value={formData.sizes[0] || ""}
  onChange={(e) =>
    setFormData({
      ...formData,
      sizes: e.target.value
    })
  }
/>
   <input
  type="text"
  className="form-control mb-3"
value={formData.colors[0] || ""}
  onChange={(e) =>
    setFormData({
      ...formData,
    colors: [e.target.value]
    })
  }
/>
  <input
  type="text"
  className="form-control mb-3"
  value={formData.prices}
  onChange={(e) =>
    setFormData({
      ...formData,
      prices: e.target.value
    })
  }
/>


  <input
  type="date"
  className="form-control mb-3"
  value={formData.deliveryDate}
  onChange={(e) =>
    setFormData({
      ...formData,
      deliveryDate: e.target.value
    })
  }
/>


<button
  type="button"
  className="btn btn-primary"
  onClick={handleSave}
>
  Save Changes
</button>
<button
  type="button"
  className="btn btn-secondary ms-2"
  onClick={() => navigate(`/orders/${orderID}`)}
>
  Cancel
</button>

    </div>
  )
}
export default EditOrder;