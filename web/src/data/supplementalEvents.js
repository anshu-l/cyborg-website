const PLACEHOLDER_POSTER = "/events/event-placeholder.svg";

const createSupplementalEvent = ({ id, eventName, eventDate, desc }) => ({
  _id: `supplemental-${id}`,
  isOpen: false,
  showDate: true,
  eventName,
  eventDate,
  eventPoster: {
    asset: {
      url: PLACEHOLDER_POSTER,
    },
    alt: `${eventName} poster placeholder`,
    caption: "Poster coming soon",
  },
  desc,
  formLink: "#",
});

export const supplementalEvents = [
  createSupplementalEvent({
    id: "autorush",
    eventName: "Autorush",
    eventDate: "2025-10-01",
    desc: "Participants are introduced to rules, constraints, sample games, and hardware approaches such as Arduino keyboard emulation or Raspberry Pi vision bots. Starter documentation for legal input emulation and automation is included. Budget: INR 7,000. Prize split: 4,000 + 2,000 + 1,000.",
  }),
  createSupplementalEvent({
    id: "typothon",
    eventName: "Typothon",
    eventDate: "2025-10-01",
    desc: "A typing speed competition for IIITD students across three levels, ending in a final duel among top performers. Budget: INR 7,000. Prize split: 4,000 + 2,000 + 1,000.",
  }),
  createSupplementalEvent({
    id: "byol-build-your-own-lab",
    eventName: "BYOL (Build Your Own Lab)",
    eventDate: "2025-10-01",
    desc: "Workshop on setting up an affordable mini electronics lab at home using basic components. Includes a guided build of a DIY oscilloscope to make electronics practical and accessible. Budget note: base estimate INR 12,000, with potential reduction via collaboration; current line item estimate includes kits and refreshments.",
  }),
  createSupplementalEvent({
    id: "ieee-onboarding",
    eventName: "IEEE Onboarding",
    eventDate: "2025-09-03",
    desc: "From Introvert to Influencer with Ramneek Kalra: an inspiring talk on networking, leadership, and maximizing IEEE membership impact. Budget note: INR 3,500 to 4,000.",
  }),
  createSupplementalEvent({
    id: "webdev-series",
    eventName: "Webdev Series",
    eventDate: "2025-10-15",
    desc: "A guided initiative that helps students move from ideas to interactive prototypes through HTML, CSS, JavaScript, React, community learning, and a final hackathon focused on club and college solutions. Budget: INR 3,000.",
  }),
  createSupplementalEvent({
    id: "cybersecurity-ctf-workshop",
    eventName: "CyberSecurity and CTF Workshop",
    eventDate: "2026-01-25",
    desc: "A 3-hour workshop in collaboration with NodeZer0 featuring cybersecurity fundamentals, hands-on exercises, and an introductory CTF to build ethical hacking and problem-solving skills.",
  }),
  createSupplementalEvent({
    id: "designathon",
    eventName: "Designathon",
    eventDate: "2026-02-11",
    desc: "A multi-phase challenge to design a Student Branch visual identity alongside IEEE Master Brand rules. Judging emphasizes compliance, originality, and practical usability. Prize money: INR 4,000.",
  }),
  createSupplementalEvent({
    id: "seminar-on-semiconductors",
    eventName: "Seminar on Semiconductors",
    eventDate: "2026-02-13",
    desc: "Seminar by Dr Ashwini K. Aggarwal on India\'s semiconductor ecosystem, innovation trends, and opportunities in semiconductor packaging. Budget: INR 2,500 with additional line item noted at INR 500.",
  }),
  createSupplementalEvent({
    id: "slash",
    eventName: "Slash",
    eventDate: "2026-03-13",
    desc: "Slash Hunt is a cryptic tech hunt in a 4-hour or 2-day format combining ciphers, software-based problem solving, and beginner-friendly competitive challenges.",
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
