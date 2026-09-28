"use client";

interface ProjectFiltersProps {
  languages: string[];
  selected: string | null;
  onSelect: (language: string | null) => void;
}

export default function ProjectFilters({
  languages,
  selected,
  onSelect,
}: ProjectFiltersProps) {
  if (languages.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by language">
      <FilterButton
        active={selected === null}
        onClick={() => onSelect(null)}
      >
        All
      </FilterButton>
      {languages.map((lang) => (
        <FilterButton
          key={lang}
          active={selected === lang}
          onClick={() => onSelect(lang)}
        >
          {lang}
        </FilterButton>
      ))}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-accent text-background"
          : "bg-surface text-text-secondary hover:text-text-primary hover:border-accent/50 border border-border"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
