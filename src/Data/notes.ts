export type noteType = {
  title: string;
  note: string;
  dateTime: Date;
  tags: string[];
  status: "active" | "archived" | "draft";
};

export const notes: noteType[] = [
  {
    title: "React Components",
    note: "Built a simple React component with props and state.",
    dateTime: new Date("2025-01-25T10:15:00"),
    tags: ["react", "component"],
    status: "active",
  },
  {
    title: "State Management",
    note: "Experimenting with useState and useReducer in React.",
    dateTime: new Date("2025-01-26T21:30:00"),
    tags: ["react", "hooks"],
    status: "draft",
  },
  {
    title: "API Integration",
    note: "Fetched data from an API and displayed it in a React app.",
    dateTime: new Date("2025-01-24T14:45:00"),
    tags: ["react"],
    status: "active",
  },
  {
    title: "Tailwind Styling",
    note: "Styled my React components using Tailwind CSS.",
    dateTime: new Date("2025-01-22T18:20:00"),
    tags: ["react", "component"],
    status: "archived",
  },
  {
    title: "Form Handling",
    note: "Implemented controlled components for forms in React.",
    dateTime: new Date("2025-01-27T08:00:00"),
    tags: ["react", "component"],
    status: "archived",
  },
];
