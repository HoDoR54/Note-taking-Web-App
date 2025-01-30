export type noteType = {
  title: string;
  note: string;
  dateTime: Date;
  tags: string[];
};

export const notes: noteType[] = [
  {
    title: "React Learning",
    note: "Started learning React today. Hooks seem cool!",
    dateTime: new Date("2025-01-25T10:15:00"),
    tags: ["react", "frontend"],
  },
  {
    title: "Game Deadline",
    note: "Need to finish that JavaScript guessing game tomorrow.",
    dateTime: new Date("2025-01-26T21:30:00"),
    tags: ["javascript", "game"],
  },
  {
    title: "API Basics",
    note: "Watched a video on backend APIs. Seems complex but exciting.",
    dateTime: new Date("2025-01-24T14:45:00"),
    tags: ["backend", "API"],
  },
  {
    title: "Tailwind Exploration",
    note: "Figured out how to style with Tailwind CSS.",
    dateTime: new Date("2025-01-22T18:20:00"),
    tags: ["css", "tailwind"],
  },
  {
    title: "SQL Practice",
    note: "Need to practice SQL joins for the assignment.",
    dateTime: new Date("2025-01-27T08:00:00"),
    tags: ["SQL", "database"],
  },
];
