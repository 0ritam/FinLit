import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ExpandableCard } from "@/components/ui/expandableCard";
import { budgetingBasicsContent } from "@/data/budgeting/basics";
import { useProgressTracking } from "@/hooks/useProgressTracking";
import { useEffect } from "react";

// Function to get the appropriate icon
const getIcon = (iconType) => {
  switch (iconType) {
    case "clipboard":
      return <IconClipboardCopy className="h-4 w-4 text-white" />;
    case "fileBroken":
      return <IconFileBroken className="h-4 w-4 text-white" />;
    case "signature":
      return <IconSignature className="h-4 w-4 text-white" />;
    case "tableColumn":
      return <IconTableColumn className="h-4 w-4 text-white" />;
    default:
      return <IconClipboardCopy className="h-4 w-4 text-white" />;
  }
};

// Define props interface for FinancialBentoGrid
interface FinancialBentoGridProps {
  title: string;
  content: {
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
}

export function FinancialBentoGrid({ title, content }: FinancialBentoGridProps) {
  const { updateProgress, progress } = useProgressTracking();

  useEffect(() => {
    updateProgress(title, 1, 4); // Assume 4 sections per module
  }, []);

  // Create a bento grid item from the provided content
  const items = [
    {
      title: title,
      description: "Learn the fundamentals of creating and maintaining a budget.",
      className: "md:col-span-2",
      iconType: "clipboard",
      chapterContent: content,
    },
    {
      title: "Saving Strategies",
      description: "Discover effective ways to save money for your future.",
      className: "md:col-span-1",
      iconType: "fileBroken",
      chapterContent: content,
    },
    {
      title: "Debt Management",
      description: "Learn how to effectively manage and reduce your debt.",
      className: "md:col-span-1",
      iconType: "signature",
      chapterContent: content,
    },
    {
      title: "Investment Fundamentals",
      description: "Get started with the basics of investing for long-term growth.",
      className: "md:col-span-2",
      iconType: "tableColumn",
      chapterContent: content,
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto md:auto-rows-[20rem]">
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <ExpandableCard
                title={budgetingBasicsContent.title}
                description={budgetingBasicsContent.description}
                content={budgetingBasicsContent}
                icon={<IconClipboardCopy className="h-6 w-6 text-neutral-500" />}
              />
            }
            className={item.className}
            icon={getIcon(item.iconType)}
          />
        ))}
      </BentoGrid>
      {/* Progress Bar at Bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-200 h-4">
        <div className="bg-teal-500 h-4" style={{ width: `${progress[title] || 0}%` }}></div>
      </div>
    </div>
  );
}

export default FinancialBentoGrid;
