const PLACEHOLDER_POSTER = "/events/event-placeholder.svg";

const createSupplementalEvent = ({ id, eventName, eventDate, desc, posterUrl }) => ({
  _id: `supplemental-${id}`,
  isOpen: false,
  showDate: true,
  eventName,
  eventDate,
  eventPoster: {
    asset: {
      url: posterUrl || PLACEHOLDER_POSTER,
    },
    alt: `${eventName} poster`,
    caption: posterUrl ? "Event poster" : "Poster coming soon",
  },
  desc,
  formLink: "#",
});

export const supplementalEvents = [
  createSupplementalEvent({
    id: "ctf-with-nodezero",
    eventName: "CTF With NodeZero",
    eventDate: "2026-01-25",
    desc: 'A 3-hour workshop in collaboration with NodeZer0 featuring cybersecurity fundamentals, hands-on exercises, and an introductory CTF to build ethical hacking and problem-solving skills. ',
    posterUrl: "/events/nodezero 2026.jpeg",
  }),
  createSupplementalEvent({
    id: "from-sand-to-chip",
    eventName: "From Sand to Chip: The Journey of Semiconductor and Chip Manufacturing",
    eventDate: "2026-01-27",
    desc: 'Seminar by Dr Ashwini K. Aggarwal on India\'s semiconductor ecosystem, innovation trends, and opportunities in semiconductor packaging. ',
    posterUrl: "/events/sand to sillicon 2026.jpeg",
  }),
  createSupplementalEvent({
    id: "indian-semiconductor-landscape",
    eventName: "Indian Semiconductor Landscape & Packaging",
    eventDate: "2026-02-13",
    desc: 'Talk on India\'s semiconductor ecosystem, innovation trends, and opportunities in semiconductor packaging. ',
    posterUrl: "/events/Kickstarting non-stop innovation 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "designathon",
    eventName: "IEEE Identity Quest 2026",
    eventDate: "2026-02-15",
    desc: 'A multi-phase challenge to design a Student Branch visual identity alongside IEEE Master Brand rules. Judging emphasizes compliance, originality, and practical usability. Prize money: INR 4,000. ',
    posterUrl: "/events/identity quest 2026.png",
  }),
  createSupplementalEvent({
    id: "slash-2026",
    eventName: "Slash",
    eventDate: "2026-03-13",
    desc: 'Slash Hunt is a cryptic tech hunt in a 4-hour or 2-day format combining ciphers, software-based problem solving, and beginner-friendly competitive challenges. ',
    posterUrl: "/events/slash 2026.png",
  }),
  createSupplementalEvent({
    id: "ieee-x-e-cell-webdev",
    eventName: "IEEE X E-CELL Web Dev Workshop",
    eventDate: "2025-08-13",
    desc: 'Workshop on web development conducted in collaboration with E-CELL. ',
    posterUrl: "/events/beyond the blueprint 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "autorush",
    eventName: "Autorush",
    eventDate: "2025-08-08",
    desc: 'Participants are introduced to rules, constraints, sample games, and hardware approaches such as Arduino keyboard emulation or Raspberry Pi vision bots. ',
    posterUrl: "/events/autorush 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "typothon",
    eventName: "Typothon",
    eventDate: "2025-08-08",
    desc: 'A typing speed competition for IIITD students across three levels, ending in a final duel among top performers. ',
    posterUrl: "/events/typothon 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "byol",
    eventName: "BYOL",
    eventDate: "2025-08-07",
    desc: 'Workshop on setting up an affordable mini electronics lab at home using basic components. Includes a guided build of a DIY oscilloscope. ',
    posterUrl: "/events/byol 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "inauguration-session",
    eventName: "Inauguration session by Ramneek sir, IEEE Delhi Section",
    eventDate: "2025-09-03",
    desc: 'Inauguration session by Ramneek Kalra from IEEE Delhi Section. ',
    posterUrl: "/events/Ramneek Sir 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "ieee-induction-intro",
    eventName: "IEEE: Induction Intro",
    eventDate: "2025-08-05",
    desc: 'Introduction and induction session for new IEEE members. ',
    posterUrl: "/events/ieee induction intro 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "wie-stem-workshop",
    eventName: "WIE: STEM Workshop for School Students",
    eventDate: "2025-03-24",
    desc: 'WIE organized a STEM workshop for school students to promote women in engineering. ',
    posterUrl: "/events/wie stem workshop for school students 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "techcrisis-challenge",
    eventName: "TechCrisis Challenge",
    eventDate: "2025-03-22",
    desc: 'A technology-focused crisis management challenge for participants. ',
    posterUrl: "/events/techcrisis 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "hackathon-infronix",
    eventName: "Hackathon: Infronix",
    eventDate: "2025-02-16",
    desc: 'A hardware-focused hackathon combining innovation and technical skills. ',
    posterUrl: "/events/infronix 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "bachmanity-insanity-2",
    eventName: "Bachmanity Insanity 2.0",
    eventDate: "2025-01-23",
    desc: 'The second edition of IIITD\'s legendary coding and trivia competition. ',
    posterUrl: "/events/bachmanity insanity 2025.jpeg",
  }),
  createSupplementalEvent({
    id: "inauguration-2025",
    eventName: "IEEE: Inauguration 2025",
    eventDate: "2024-11-05",
    desc: 'Annual inauguration ceremony for IEEE IIITD Student Branch. ',
    posterUrl: "/events/ieee inaugration 2024.jpeg",
  }),
  createSupplementalEvent({
    id: "puzzle-day",
    eventName: "Puzzle Day",
    eventDate: "2023-03-21",
    desc: 'A day dedicated to puzzles and brain teasers for all participants. ',
    posterUrl: "/events/puzzle day 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "enigma",
    eventName: "Enigma",
    eventDate: "2023-04-22",
    desc: 'An enigmatic coding and logic challenge event. ',
    posterUrl: "/events/enigma 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "huntit",
    eventName: "HuntIT",
    eventDate: "2023-08-24",
    desc: 'A tech-themed treasure hunt combining puzzles and technology. ',
    posterUrl: "/events/huntit 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "hackdid",
    eventName: "Hack:did",
    eventDate: "2023-07-01",
    desc: 'A creative hackathon focused on innovative solutions. ',
    posterUrl: "/events/hackdid 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "wie-unlock-success",
    eventName: "WIE Unlock Success Session",
    eventDate: "2023-07-11",
    desc: 'WIE session on unlocking success in engineering careers. ',
    posterUrl: "/events/wie unlock success session 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "slash-2023",
    eventName: "Slash",
    eventDate: "2023-04-19",
    desc: 'A cryptic tech hunt combining ciphers and software challenges. ',
    posterUrl: "/events/slash 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "quack",
    eventName: "Quack",
    eventDate: "2023-08-25",
    desc: 'A fun coding competition with unique challenges. ',
    posterUrl: "/events/quack 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "xgrid-2023",
    eventName: "XGrid",
    eventDate: "2023-08-25",
    desc: 'Grid-based competitive coding event. ',
    posterUrl: "/events/xgrid 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "ml-battle",
    eventName: "Machine Learning Battle",
    eventDate: "2023-10-14",
    desc: 'A competition focused on machine learning challenges. ',
    posterUrl: "/events/machine learning battle 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "bachmanity-insanity-1",
    eventName: "Bachmanity Insanity",
    eventDate: "2023-10-14",
    desc: 'IIITD\'s legendary coding and trivia competition. ',
    posterUrl: "/events/bachmanity insanity 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "1v1-coding-lockout",
    eventName: "1v1 Coding Lockout",
    eventDate: "2023-10-14",
    desc: 'Head-to-head competitive coding tournament. ',
    posterUrl: "/events/1v1 coding lockout 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "hardware-robotics-workshop",
    eventName: "Hardware and Robotics 101 Workshop",
    eventDate: "2023-10-14",
    desc: 'Introductory workshop on hardware and robotics fundamentals. ',
    posterUrl: "/events/hardware and robotics 101 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "mini-robowars",
    eventName: "Mini Robowars",
    eventDate: "2023-10-14",
    desc: 'Competitive robotics event featuring mini battle bots. ',
    posterUrl: "/events/mini robowars 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "empowher",
    eventName: "EMPowher",
    eventDate: "2023-10-14",
    desc: 'WIE event empowering women in engineering and technology. ',
    posterUrl: "/events/impowher 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "intro-to-ctf",
    eventName: "Introduction to CTFs",
    eventDate: "2023-10-16",
    desc: 'Workshop introducing Capture The Flag cybersecurity competitions. ',
    posterUrl: "/events/Introduction to ctfs 2023.jpeg",
  }),
  createSupplementalEvent({
    id: "switch-the-pitch",
    eventName: "Switch the Pitch",
    eventDate: "2022-04-06",
    desc: 'Pitch competition for innovative ideas and startups. ',
    posterUrl: "/events/switch the pitch 2022.jpeg",
  }),
  createSupplementalEvent({
    id: "code-acrostic",
    eventName: "Code Acrostic",
    eventDate: "2022-06-01",
    desc: 'Coding event with acrostic-themed challenges. ',
    posterUrl: "/events/code acoustic 2022.jpeg",
  }),
  createSupplementalEvent({
    id: "bachmanity-insanity-original",
    eventName: "Bachmanity Insanity",
    eventDate: "2022-05-30",
    desc: 'IIITD\'s original coding and trivia competition. ',
    posterUrl: "/events/bachmanity insanity 2022.jpeg",
  }),
  createSupplementalEvent({
    id: "back-slash",
    eventName: "Back Slash",
    eventDate: "2022-06-28",
    desc: 'Follow-up to Slash with enhanced challenges. ',
    posterUrl: "/events/back slash 2022.jpeg",
  }),
  createSupplementalEvent({
    id: "not-a-halloween-heist",
    eventName: "Not a Halloween Heist",
    eventDate: "2022-09-07",
    desc: 'Spooky-themed technical challenge event. ',
    posterUrl: "/events/not a halloween heist 2022.jpeg",
  }),
  createSupplementalEvent({
    id: "hackday-hackathon",
    eventName: "HackDay Hackathon",
    eventDate: "2022-11-19",
    desc: '24-hour hackathon focused on innovation. ',
    posterUrl: "/events/hackday 2022.jpeg",
  }),
  createSupplementalEvent({
    id: "xgrid-2022",
    eventName: "Xgrid",
    eventDate: "2022-11-04",
    desc: 'Grid-based competitive coding event. ',
    posterUrl: "/events/xgrid 2022.jpeg",
  }),
  createSupplementalEvent({
    id: "slash-2021",
    eventName: "Slash",
    eventDate: "2021-03-16",
    desc: "A cryptic tech hunt combining ciphers and software challenges.",
    posterUrl: "/events/slash 2021.jpeg",
  }),
  createSupplementalEvent({
    id: "slash-2022",
    eventName: "Slash",
    eventDate: "2022-01-24",
    desc: "A cryptic tech hunt combining ciphers and software challenges.",
    posterUrl: "/events/slash 2022.jpeg",
  }),
  createSupplementalEvent({
    id: "bachmanity-insanity-early",
    eventName: "Bachmanity Insanity",
    eventDate: "2021-06-02",
    desc: 'Early edition of IIITD\'s coding and trivia competition. ',
    posterUrl: "/events/bachmanity insanity 2021.jpeg",
  }),
  createSupplementalEvent({
    id: "webdev-react-workshop",
    eventName: "Workshop on Web Dev Using React",
    eventDate: "2021-06-12",
    desc: 'Hands-on workshop on web development using React. ',
    posterUrl: "/events/webdev using react 2021.jpeg",
  }),
  createSupplementalEvent({
    id: "techtalks",
    eventName: "TechTalks",
    eventDate: "2021-08-18",
    desc: 'Technical talks and discussions on emerging technologies. ',
    posterUrl: "/events/tech talks 2021.jpeg",
  }),
  createSupplementalEvent({
    id: "xgrid-2021",
    eventName: "Xgrid",
    eventDate: "2021-11-12",
    desc: 'Grid-based competitive coding event. ',
    posterUrl: "/events/xgrid 2021.jpeg",
  }),
];

const normalizeEventName = (name = "") => name.trim().toLowerCase();

const safeDateValue = (event) => {
  const parsedDate = Date.parse(event?.eventDate || "");
  return Number.isNaN(parsedDate) ? 0 : parsedDate;
};

export const mergeEventsWithSupplemental = (cmsEvents = []) => {
  const events = Array.isArray(cmsEvents) ? [...cmsEvents] : [];
  const existingNames = new Set(events.map((event) => normalizeEventName(event?.eventName)));

  for (const event of supplementalEvents) {
    const normalizedName = normalizeEventName(event.eventName);
    if (!existingNames.has(normalizedName)) {
      events.push(event);
    }
  }

  return events.sort((a, b) => safeDateValue(b) - safeDateValue(a));
};
