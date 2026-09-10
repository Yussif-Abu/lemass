import { libraryResources } from "../../../constants";
import LibraryCard from "../../../components/ui/library-card";

const mitResources = libraryResources.filter(
  (resource) => resource.source === "MIT OCW",
);

const MitCW = () => {
  return (
    <section className="page-container">
      <div className="library-resource-grid">
        {mitResources.map((resource) => (
          <LibraryCard
            key={resource.id}
            resource={resource}
            badgeText="MIT OCW"
          />
        ))}
      </div>
    </section>
  );
};

export default MitCW;
