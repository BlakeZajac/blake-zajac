import { PortableTextBlock } from "sanity";

export function getProjectStacks(projectContent: PortableTextBlock[]) {
  return projectContent.filter((block) => block._type === "stack");
}
