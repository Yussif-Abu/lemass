import {
  BookOpen,
  ExternalLink,
  GraduationCap,
  Search,
  Square,
} from "lucide-react";

import { libraryResources } from "../../constants";
import LibraryCard from "../../components/ui/library-card";

const ELibrary = () => {
  return (
    <section className="page-container">
      <div className="library-resource-grid">
        {libraryResources.map((resource) => (
          <LibraryCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
};

export default ELibrary;
