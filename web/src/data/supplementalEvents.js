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
    id: "intro-neural-networks",
    eventName: "Introduction to neural networks",
    eventDate: "2025-02-06",
    desc: "National level session introducing the fundamental concepts of neural networks.",
  }),
  createSupplementalEvent({
    id: "intro-numpy",
    eventName: "Introduction to NumPy",
    eventDate: "2024-09-25",
    desc: "National level session covering the basics of NumPy for data science and scientific computing.",
  }),
  createSupplementalEvent({
    id: "bharat-ai-talk",
    eventName: "BharatAI: Guest Talk by Director of ML at Wadhwani.ai",
    eventDate: "2024-02-23",
    desc: "Guest talk by the Director of Machine Learning at Wadhwani.ai on India's AI landscape and career opportunities in data science.",
    posterUrl: "/events/bharat-ai 2024.jpeg",
  }),
  createSupplementalEvent({
    id: "club-mela-2023",
    eventName: "BTech Introduction Club Mela 2023",
    eventDate: "2023-08-06",
    desc: "Introduction to Cyborg club for fresh BTech students. Learn about our projects, events, and how to get involved.",
    posterUrl: "/events/club-mela-2023.jpeg",
  }),
  createSupplementalEvent({
    id: "data-science-career",
    eventName: "Kickstart your $122k career in Data Science",
    eventDate: "2022-12-08",
    desc: "Workshop on how to build a successful career in data science. Tips, tricks, and insights from industry experts.",
    posterUrl: "/events/data-science-2022.jpeg",
  }),
  createSupplementalEvent({
    id: "intro-robotics",
    eventName: "Cyborg Session 1: Introduction to Robotic",
    eventDate: "2022-01-26",
    desc: "Introductory session on robotics fundamentals. Learn the basics of robot design, sensors, and actuators.",
    posterUrl: "/events/intro-robotics-2022.jpeg",
  }),
];

const normalizeEventName = (name = "") => name.trim().toLowerCase();

const EXCLUDED_EVENT_NAMES = new Set([
  "back slash",
  "bachmanity insanity",
  "switch the pitch",
  "slash - the cryptic hunt",
]);

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

export const filterVisibleEvents = (events = []) =>
  (Array.isArray(events) ? events : []).filter(
    (event) => !EXCLUDED_EVENT_NAMES.has(normalizeEventName(event?.eventName))
  );
