"use client";

import { memo, useMemo, useState } from "react";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseCategories, caseStudies } from "@/lib/site-data";

type FilterButtonProps = {
  active: boolean;
  label: (typeof caseCategories)[number];
  onSelect: (label: (typeof caseCategories)[number]) => void;
};

const FilterButton = memo(function FilterButton({
  active,
  label,
  onSelect,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(label)}
      className={`case-filter-chip ${active ? "case-filter-chip--active" : ""}`}
    >
      {label}
    </button>
  );
});

export const CaseStudyGrid = memo(function CaseStudyGrid() {
  const [category, setCategory] = useState<(typeof caseCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (category === "All") {
      return caseStudies;
    }

    return caseStudies.filter((item) => item.category === category);
  }, [category]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {caseCategories.map((item) => (
          <FilterButton
            key={item}
            label={item}
            active={category === item}
            onSelect={setCategory}
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </div>
  );
});
