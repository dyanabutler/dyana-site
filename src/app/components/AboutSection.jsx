"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Figma</li>
        <li>Adobe Suite</li>
        <li>Three.js</li>
        <li>CSS & Tailwind</li>
        <li>JavaScript</li>
        <li>Next.js 13</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google IT Specialist Certification</li>
        <li>Figma For EDU</li>
      </ul>
    ),
  },
  {
    title: "Current Projects",
    id: "projects",
    content: (
      <ul className="list-disc pl-2">
        <li>NFT Collection Wireframe using Figma</li>
        <li>AUTH Company&apos;s Hype Video Promotion using After Effects</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am Dyana—a dedicated designer and web engineer with a diverse skill set. My favorite part about my shift from the retail industry to the tech field is the increased emphasis on teamwork and its significance to individuals. As a freelancer, my project selection criteria primarily hinge on the level of sheer excitement and enthusiasm they evoke in me, often causing literal goosebumps and hair-raising moments.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("projects")}
              active={tab === "projects"}
            >
              {" "}
             Current Projects{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
