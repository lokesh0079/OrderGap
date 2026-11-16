
import StatCard from "../components/StatCard"
import { useNavigate } from "react-router";

const dashBoardData = [
  { title: "Total Orders", value: 128 },
  { title: "Pending Orders", value: 24 },
  { title: "Completed Orders", value: 96 },
  { title: "Total Revenue", value: "₹45,000" }
];
const recentOrders=[
  {
    id:"ORD-001",
    customer:"Rahul Sharma",
    product:"T-Shirt",
    amount:"₹799",
    status:"Needs information",

  },{
    id: "ORD-002",
    customer: "Priya Patil",
    product: "Jeans",
    amount: "₹1,299",
    status: "Ready for confirmation"
  },
  {
    id: "ORD-003",
    customer: "Amit Verma",
    product: "Shirt",
    amount: "₹999",
    status: "Needs review"
  },
  {
    id: "ORD-004",
    customer: "Sneha Joshi",
    product: "Kurti",
    amount: "₹899",
    status: "Confirmed"
  },
]


function Dashboard(){
 const navigate = useNavigate();

  return(
    <>
      <div className="dashboard-page">
    <h1>Dashboard</h1>
    <p>Overview of your clothing business orders</p>
    <div className="row g-3">

    {dashBoardData.map((item)=>(
<div className="col-12 col-sm-6 col-xl-3" key={item.title}>

    <StatCard   title={item.title} value={item.value}/>
    </div>
    ))}

   </div>

<div className="mt-4">
  <h3>Recent Orders</h3>

  <div className="table-responsive">
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Product</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {recentOrders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.product}</td>
            <td>{order.amount}</td>
            <td> <span className={`badge ${order.status=== "Needs information"
        ? "bg-warning text-dark" :order.status==="Ready for confirmation" ? "bg-success" :order.status==="Needs review" ? "bg-danger" :order.status=== "Confirmed" ? "bg-primary" : "bg-secondary"}`}>{order.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div>
    <button className="btn btn-primary" onClick={ ()=> navigate("/new-order")}>Create New Order</button>
  </div>
</div>

</div>

    </>
  )
}

export default Dashboard