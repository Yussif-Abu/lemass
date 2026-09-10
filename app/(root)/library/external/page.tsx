import { libraryResources } from "../../../constants";
import LibraryCard from "../../../components/ui/library-card";

const externalResources = libraryResources.filter(
  (resource) => resource.source === "External",
);

const External = () => {
  return (
    <section className="page-container">
      <div className="library-resource-grid">
        {externalResources.map((resource) => (
          <LibraryCard
            key={resource.id}
            resource={resource}
            badgeText="External"
          />
        ))}
      </div>
    </section>
  );
};

export default External;
