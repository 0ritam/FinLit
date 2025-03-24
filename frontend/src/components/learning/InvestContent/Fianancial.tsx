import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ExpandableCard } from "@/components/ui/expandableCard";
import { financialProductsContent } from "@/data/investing/financialProducts"; 


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

export function FinancialBentoGridF({ title, content  }: FinancialBentoGridProps) {
  // Create a bento grid item from the provided content
  const items = [
    {
      title: "What are Financial Products?",
      description: "Types of Financial Products",
      className: "md:col-span-1",
      iconType: "fileBroken",
      chapterContent: content
    },
    {
      title: "Types of Financial Products",
      description: "Learn how to effectively manage and reduce your debt.",
      className: "md:col-span-1",
      iconType: "signature",
      chapterContent: content
    },
    {
      title: "Choosing the Right Financial Product",
      description: "Get started with the basics of investing for long-term growth.",
      className: "md:col-span-2",
      iconType: "tableColumn",
      chapterContent:content
    }
  ];

  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
<ExpandableCard
        title={financialProductsContent.title}
        description={financialProductsContent.description}
        content={financialProductsContent}
        icon={<IconClipboardCopy className="h-6 w-6 text-neutral-500" />}
      />
          }
          className={item.className}
          icon={getIcon(item.iconType)}
        />
      ))}
    </BentoGrid>
  );
}

export default FinancialBentoGridF;