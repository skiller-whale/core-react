export type Language = "js" | "ts";

export type ModuleKey = keyof typeof modules;

export const modules = {
  introduction: "Introduction to React and JSX",
  rendering_cycle: "Understanding React's Rendering Cycle",
  state: "Making Components Interactive",
  hooks: "Using Hooks and Custom Hooks",
  reusable_components: "Creating Reusable Components",
  errors: "Handling Errors",
  refs: "Refs, Portals, and the DOM",
  effects: "Synchronising with External Systems",
  complex_state: "Managing Complex State",
  inputs: "Working with Inputs",
  forms: "Working with Forms",
  accessibility: "Writing Accessible Web Apps",
  suspense: "Suspending Components",
  deferred_updates: "Deferring Updates",
  reducing_renders: "Reducing Renders",
  memoisation: "Memoisation within Components",
};
