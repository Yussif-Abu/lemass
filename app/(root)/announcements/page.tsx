import { Bell, Check, GraduationCap, Megaphone } from "lucide-react";

import Heading from "../../components/Header";
import StatsGrid, { type StatItem } from "../../components/ui/stat-grid";
import { announcementStats, announcements } from "../../constants";

const stats: StatItem[] = announcementStats.map((stat) => ({
  title: stat.title,
  value: stat.value,
  icon: stat.icon,
}));

const Announcements = () => {
  return (
    <section className="page-container announcements-page">
      <Heading
        title="Announcements"
        subtitle="Stay updated with university and course announcements"
      >
        <button type="button" className="announcement-read-all">
          <Check size={15} aria-hidden="true" />
          Mark all as read
        </button>
      </Heading>

      <StatsGrid stats={stats} />

      <div className="announcements-notification-panel">
        <div className="notification-panel-header">
          <h2>All Notifications</h2>
          <label className="select-all-toggle">
            <input type="checkbox" />
            <span>Select all</span>
          </label>
        </div>

        <div className="notifications-list">
          {announcements.map(
            ({ id, title, summary, course, author, time, unread, tone }) => (
              <article
                key={id}
                className={`notification-item ${unread ? "is-unread" : ""}`}
              >
                <div className="notification-item-main">
                  <div className="notification-checkbox-wrap">
                    <input
                      type="checkbox"
                      aria-label={`Select notification ${id}`}
                    />
                  </div>

                  <div
                    className={`notification-icon notification-icon-${tone}`}
                  >
                    {tone === "blue" ? (
                      <Bell size={15} aria-hidden="true" />
                    ) : tone === "amber" ? (
                      <Megaphone size={15} aria-hidden="true" />
                    ) : (
                      <GraduationCap size={15} aria-hidden="true" />
                    )}
                  </div>

                  <div className="notification-copy">
                    <h3>{title}</h3>
                    <p>
                      {summary}
                      {author ? ` • ${author}` : ""}
                    </p>
                    <div className="notification-meta">
                      <span>{course}</span>
                      <span className="notification-separator">•</span>
                      <span>{time}</span>
                    </div>
                  </div>
                </div>

                <div className="notification-item-side">
                  <span className="notification-dot" aria-hidden="true" />
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
