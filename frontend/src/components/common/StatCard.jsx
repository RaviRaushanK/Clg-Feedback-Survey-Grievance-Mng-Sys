const StatCard = ({ label, value = "-", icon = "bi-dash-circle" }) => {
  return (
    <article className="stat-card">
      <div className="stat-icon" aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </article>
  );
};

export default StatCard;
