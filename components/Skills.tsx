"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "redux",
  "react",
  "html5",
  "css3",
  "vite",
  "npm",
  "figma",
  "shadcnui",
  "postgresql",
  "vercel",
  "mysql",
  "netlify",
  "git",
  "github",
  "visualstudiocode",
  "mongodb",
  "hostinger",
  "framer",
  "ai",
  "tailwindcss",
  "graphql",
];

function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="my-10 py-10 ">
      <h1 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h1>
      <div className="flex justify-center align-middle">
        <IconCloud images={images} />
      </div>
    </div>
  );
}

export default Skills;
