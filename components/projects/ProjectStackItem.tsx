"use client";

import Image from "next/image";

interface ProjectStackItemProps {
  icon: string;
  title: string;
}

const ProjectStackItem: React.FC<ProjectStackItemProps> = ({ icon, title }) => {
  return (
    <div className="flex gap-3">
      <div className="w-6 h-6">
        <Image src={icon} alt="Icon" />
        <p className="text-black-600">{title}</p>
      </div>
    </div>
  );
};

export default ProjectStackItem;
