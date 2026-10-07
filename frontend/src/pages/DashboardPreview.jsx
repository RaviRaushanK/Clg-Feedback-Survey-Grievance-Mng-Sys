import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/common/StatCard";
import EmptyState from "../components/common/EmptyState";

const DashboardPreview = ({ title, description, stats, actions }) => {
  return (
    <>
      <PageHeader title={title} description={description} />

      <div className="row g-3 mb-4">
        {stats.map((stat) => (
          <div className="col-12 col-sm-6 col-xl-4" key={stat.label}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      <div className="row g-3">
        <div className="col-12 col-xl-7">
          <EmptyState
            title="No recent activity yet"
            message="Live activity will appear here after future phases connect real modules and data."
            icon="bi-clock-history"
          />
        </div>
        <div className="col-12 col-xl-5">
          <section className="panel">
            <div className="panel-heading">
              <h3>Quick actions</h3>
              <span>Placeholders</span>
            </div>
            <div className="quick-actions">
              {actions.map((action) => (
                <button className="btn btn-outline-secondary" type="button" disabled key={action}>
                  {action}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardPreview;
