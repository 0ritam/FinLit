import { motion } from 'framer-motion';

interface ChapterContentProps {
  title: string;
  content: {
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
}

export default function ChapterContent({ title, content }: ChapterContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="h2 text-n-1 mb-6">{title}</h1>
      {content.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="h3 text-n-1 mb-4">{section.heading}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="body-1 text-n-3 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </motion.div>
  );
} 