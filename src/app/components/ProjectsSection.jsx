"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Figma Designs",
    description: "My contributions to the Figma communituy",
    image: "/images/projects/.png",
    tag: ["All", "Design"],
    gitUrl: "https://www.figma.com/@dyanabutler/",
    previewUrl: "https://www.figma.com/@dyanabutler/",
  },
  {
    id: 2,
    title: "My First Parallax Project",
    description: "A simple parallax scrolling effect to get started",
    image: "/images/projects/2.png",
    tag: ["All", "Development"],
    gitUrl: "https://github.com/dyanabutler/my-first-parallax",
    previewUrl: "https://dyanabutler.github.io/my-first-parallax/",
  },
  {
    id: 3,
    title: "Artstation",
    description: "My Digital Art Portfolio",
    image: "/images/projects/.png",
    tag: ["All", "Design"],
    gitUrl: "https://www.artstation.com/dyanabutler/",
    previewUrl: "https://www.artstation.com/dyanabutler/",
  },
  {
    id: 4,
    title: "Pending",
    description: "Figma Files",
    image: "/images/projects/.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Pending",
    description: "3D ASMR Website",
    image: "/images/projects/.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Pending",
    description: "Art Gallery",
    image: "/images/projects/.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Development"
          isSelected={tag === "Development"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
