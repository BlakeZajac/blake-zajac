import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "yc11r158",
  dataset: "production",
  title: "Blake Zajac",
  apiVersion: "2023-08-12",
  basePath: "/sanity",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
