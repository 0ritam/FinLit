import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ContentHeader from "@/components/landing/ContentHeader";
import { useProgressTracking } from "@/hooks/useProgressTracking";

interface SidebarItem {
  title: string;
  path: string;
  icon: string;
}

const customStyles = {
  container: "container-padding py-8",
  layout: "flex gap-8 max-w-7xl mx-auto",
  sidebar: "w-72 shrink-0",
  sidebarContent: "bg-background/70 rounded-2xl p-6 shadow-lg border border-n-6 sticky top-8",
  chapterTitle: "h5 text-n-1 mb-6 pb-4 border-b border-n-6",
  nav: "space-y-3",
  navItem: (isActive: boolean, isCompleted: boolean) => `
    flex items-center gap-3 px-4 py-3 rounded-xl transition-all
    ${isActive ? 'bg-color-1/10 text-color-1 font-medium shadow-sm border border-color-1/20' : 'hover:bg-n-6 text-n-1 hover:shadow-sm border border-transparent hover:border-n-5'}
    ${isCompleted ? 'before:content-["✓"] before:text-green-500 before:mr-2' : ''}
  `,
  icon: "text-xl",
  divider: "h-0.5 bg-n-6 mx-auto my-2",
  mainContent: "flex-1 bg-background/70 rounded-2xl p-6 shadow-lg border border-n-6 min-h-[calc(100vh-4rem)]",
};

const ChapterLayout = ({ chapterTitle }: { chapterTitle: string }) => {
  const location = useLocation();
  const { progress, updateProgress, isModuleCompleted } = useProgressTracking();
  const sidebarItems: SidebarItem[] = [
    {
      title: "Content",
      path: "content",
      icon: "📚"
    },
    {
      title: "Basic Quiz",
      path: "basic-quiz",
      icon: "✍️"
    },
    {
      title: "Practice Quiz",
      path: "practice-quiz",
      icon: "🎯"
    }
  ];

  const isSubmoduleCompleted = (path: string) => {
    if (path === "basic-quiz") {
      return progress[chapterTitle]?.basicQuiz || false;
    } else if (path === "practice-quiz") {
      return progress[chapterTitle]?.practiceQuiz || false;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-background">
      <ContentHeader />
      <div className={customStyles.container}>
        <div className={customStyles.layout}>
          {/* Sidebar */}
          <div className={customStyles.sidebar}>
            <div className={customStyles.sidebarContent}>
              <h2 className={customStyles.chapterTitle}>{chapterTitle}</h2>
              <nav className={customStyles.nav}>
                {sidebarItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={customStyles.navItem(location.pathname.includes(item.path), isSubmoduleCompleted(item.path))}
                    >
                      <span className={customStyles.icon}>{item.icon}</span>
                      <span className="body-2">{item.title}</span>
                    </Link>
                    {index < sidebarItems.length - 1 && (
                      <div className={customStyles.divider} />
                    )}
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>
          {/* Main Content */}
          <div className={customStyles.mainContent}>
            <Outlet />
          </div>
        </div>
      </div>
      {/* Green Tick for Module Completion */}
      {isModuleCompleted(chapterTitle) && (
        <div className="absolute top-4 right-4 text-green-500 text-2xl">✓</div>
      )}
    </div>
  );
};

export default ChapterLayout;