const EmptyState = ({ title, message, icon = "bi-inbox" }) => {
  return (
    <section className="empty-state" aria-live="polite">
      <i className={`bi ${icon}`} aria-hidden="true"></i>
      <h3>{title}</h3>
      {message && <p>{message}</p>}
    </section>
  );
};

export default EmptyState;
