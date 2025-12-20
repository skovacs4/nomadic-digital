import { error } from "@sveltejs/kit";
import { p as projects } from "../../../../chunks/portfolio2.js";
function load({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) throw error(404, "Project not found");
  return { project };
}
export {
  load
};
