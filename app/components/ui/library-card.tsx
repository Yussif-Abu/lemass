import { ArrowUpRight, Square } from "lucide-react";

import type { LibraryResource } from "../../constants";

type LibraryCardProps = {
  resource: LibraryResource;
  badgeText?: string;
};

const LibraryCard = ({ resource, badgeText }: LibraryCardProps) => {
  const {
    id,
    title,
    author,
    description,
    type,
    format,
    icon: Icon,
    accent,
  } = resource;

  return (
    <article key={id} className={`library-resource-card resource-${accent}`}>
      <div className="library-resource-top-row">
        <span className="library-resource-check" aria-hidden="true">
          <Square size={14} strokeWidth={1.75} />
        </span>
        <span className="library-resource-badge">
          {badgeText ?? resource.source}
        </span>
      </div>

      <div className="library-resource-body">
        <div className="library-resource-header">
          <div className="library-resource-icon">
            <Icon size={16} aria-hidden="true" />
          </div>
          <div className="library-resource-copy">
            <h3>{title}</h3>
            <p>{author}</p>
            <span>{description}</span>
          </div>
        </div>

        <div className="library-resource-meta">
          <span className="library-resource-type">{type}</span>
          <span className="library-resource-format">{format}</span>
        </div>

        <button type="button" className="library-resource-action">
          <ArrowUpRight size={14} aria-hidden="true" />
          Access Resource
        </button>
      </div>
    </article>
  );
};

export default LibraryCard;
