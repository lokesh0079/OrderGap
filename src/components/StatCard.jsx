
function StatCard({ title, value }) {
  return (
    <div className="card stat-card h-100">
      <div className="card-body">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value">{value}</h3>
      </div>
    </div>
  );
}

export default StatCard;
