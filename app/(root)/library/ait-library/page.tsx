import { libraryResources } from "../../../constants";
import LibraryCard from "../../../components/ui/library-card";

const aitResources = libraryResources.filter(
  (resource) => resource.source === "AIT Library",
);

const AitLibrary = () => {
  return (
    <section className="page-container">
      <div className="library-resource-grid">
        {aitResources.map((resource) => (
          <LibraryCard
            key={resource.id}
            resource={resource}
            badgeText="AIT Library"
          />
        ))}
      </div>
    </section>
  );
};

export default AitLibrary;
