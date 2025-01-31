export type noteType = {
  title: string;
  note: string;
  dateTime: Date;
  tags: string[];
  status: "active" | "archived" | "draft";
};

export const notes: noteType[] = [
  {
    title: "Morning Jog",
    note: "This morning, I decided to kickstart my day with a 5K jog around the park. The weather was perfect—cool and crisp with the sun just beginning to rise. The peaceful surroundings and the sound of birds chirping made it a refreshing experience. I felt so much more energized and ready to take on the rest of the day. It’s become a routine I look forward to every morning.",
    dateTime: new Date("2025-01-25T07:30:00"),
    tags: ["exercise"],
    status: "active",
  },
  {
    title: "New Recipe",
    note: "I decided to experiment with a new pasta recipe I found online. I made a creamy garlic sauce with a blend of parmesan and fresh herbs. The sauce turned out incredibly smooth and rich. I paired it with some sautéed chicken and roasted vegetables for a complete meal. I’m definitely going to keep this recipe in my rotation, and I might even try adding a bit of lemon zest next time for extra flavor.",
    dateTime: new Date("2025-01-26T18:45:00"),
    tags: ["cooking", "entertainment"],
    status: "draft",
  },
  {
    title: "Weekend Trip",
    note: "I had an amazing weekend getaway to the mountains with some friends. We stayed in a cozy cabin with beautiful views of the surrounding peaks. On Saturday, we went on a hike that took us up to a breathtaking viewpoint, where we could see the entire valley below. The air was so fresh, and we even spotted a few deer along the trail. In the evening, we enjoyed a campfire and made s'mores while talking and laughing. It was the perfect escape from the hustle and bustle of everyday life.",
    dateTime: new Date("2025-01-24T10:00:00"),
    tags: ["travel", "exercise"],
    status: "active",
  },
  {
    title: "Movie Night",
    note: "Last night, I hosted a movie night with some close friends. We picked a classic comedy film that always makes us laugh, and it didn’t disappoint. We ordered pizza and had way too many snacks, but it was totally worth it. It’s moments like these that remind me how important it is to spend quality time with people who bring joy into your life. We ended up chatting for hours afterward, reminiscing about old memories and making new ones.",
    dateTime: new Date("2025-01-22T20:00:00"),
    tags: ["entertainment", "friends"],
    status: "archived",
  },
  {
    title: "Book I Started",
    note: "I recently started reading a new mystery novel by one of my favorite authors. It’s gripping from the first chapter, with unexpected twists and a plot that keeps me guessing. The protagonist is a brilliant but troubled detective, and I’m already getting attached to the characters. I can’t wait to see how the story unfolds. Reading this book has reminded me how much I enjoy getting lost in a good story, and I’m making it a point to read a little bit every evening before bed.",
    dateTime: new Date("2025-01-27T09:00:00"),
    tags: ["reading", "entertainment"],
    status: "archived",
  },
];
