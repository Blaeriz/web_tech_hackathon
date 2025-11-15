export const COMICS = [
  {
    id: "CV-001",
    title: "Void Rift: Nexus Rising",
    publisher: "Astral Forge",
    description:
      "Dimension-surfing tactician Cassia Voss leads a strike team through unstable portals to keep an ancient AI from rewriting reality.",
    characters: ["Cassia Voss", "Drake Kade"],
    genre: ["Sci-Fi", "Action"],
    price: 4.99,
    releaseDate: "2025-08-15",
    coverImg: "/covers/void-rift.svg",
    isNew: true,
    isPopular: true,
    featuredHeroRank: 1,
  },
  {
    id: "CV-002",
    title: "Mythic Dawn Protocol",
    publisher: "Titan Quill",
    description:
      "A rogue archivist unseals forgotten pantheon weapons, igniting a race between gods, heroes, and corporations across Neo-Delphi.",
    characters: ["Elara Vane"],
    genre: ["Fantasy", "Thriller"],
    price: 5.49,
    releaseDate: "2025-05-01",
    coverImg: "/covers/mythic-dawn.svg",
    isNew: true,
    isPopular: false,
    featuredHeroRank: 2,
  },
  {
    id: "CV-003",
    title: "Quantum Guardian: Parallax",
    publisher: "Nova Gate",
    description:
      "Time-looped hero Ishan Reyes must recruit his past selves to stop a chronophage feeding on paradoxes.",
    characters: ["Ishan Reyes"],
    genre: ["Sci-Fi", "Superhero"],
    price: 3.99,
    releaseDate: "2024-11-10",
    coverImg: "/covers/quantum-guardian.svg",
    isNew: false,
    isPopular: true,
    featuredHeroRank: 3,
  },
  {
    id: "CV-004",
    title: "Lunar Legion: Eventide",
    publisher: "Astral Forge",
    description:
      "The Lunar Legion uncovers a conspiracy tying the first moon colony to a sentient tide controlling Earth's oceans.",
    characters: ["Commander Nyx", "Kaito Ryu"],
    genre: ["Sci-Fi", "Drama"],
    price: 4.49,
    releaseDate: "2024-07-22",
    coverImg: "/covers/lunar-legion.svg",
    isNew: false,
    isPopular: true,
  },
  {
    id: "CV-005",
    title: "Chrome Samurai: Neon Oath",
    publisher: "Ion Ink",
    description:
      "Cybernetic swordswoman Aiko must defend Neo-Osaka's soul district from memory brokers siphoning emotions.",
    characters: ["Aiko", "Professor Mori"],
    genre: ["Cyberpunk", "Action"],
    price: 5.99,
    releaseDate: "2025-01-18",
    coverImg: "/covers/chrome-samurai.svg",
    isNew: true,
    isPopular: true,
  },
  {
    id: "CV-006",
    title: "Storm Sigil",
    publisher: "Myriad Press",
    description:
      "A weather witch bound to a pirate crew must choose between controlling the storms or freeing the seas.",
    characters: ["Seren Gale"],
    genre: ["Fantasy", "Adventure"],
    price: 3.49,
    releaseDate: "2023-10-05",
    coverImg: "/covers/storm-sigil.svg",
    isNew: false,
    isPopular: false,
  },
  {
    id: "CV-007",
    title: "Arc Reactor Kids",
    publisher: "Nova Gate",
    description:
      "Genius misfit teens reverse-engineer alien biotech to form the most chaotic junior hero squad on Earth.",
    characters: ["Juno", "Lo"],
    genre: ["All Ages", "Superhero"],
    price: 2.99,
    releaseDate: "2024-04-28",
    coverImg: "/covers/arc-reactor.svg",
    isNew: false,
    isPopular: true,
  },
  {
    id: "CV-008",
    title: "Citadel Noir",
    publisher: "Titan Quill",
    description:
      "A detective cursed to relive the same night hunts a shapeshifter through the neon undercities of Vega Prime.",
    characters: ["Detective Vale"],
    genre: ["Noir", "Sci-Fi"],
    price: 4.29,
    releaseDate: "2024-02-14",
    coverImg: "/covers/citadel-noir.svg",
    isNew: false,
    isPopular: false,
  },
  {
    id: "CV-009",
    title: "Verdant Requiem",
    publisher: "Greenlight",
    description:
      "Nature spirits stage a symphonic rebellion against megacities, and one botanist can decode their music.",
    characters: ["Dr. Mira Ansel"],
    genre: ["Eco", "Fantasy"],
    price: 3.79,
    releaseDate: "2023-12-03",
    coverImg: "/covers/verdant-requiem.svg",
    isNew: false,
    isPopular: false,
  },
  {
    id: "CV-010",
    title: "Pulsebreakers",
    publisher: "Ion Ink",
    description:
      "An underground racing crew hacks gravity wells to deliver banned medicine across orbiting cities.",
    characters: ["Mara Flux", "Echo"],
    genre: ["Action", "Sci-Fi"],
    price: 4.79,
    releaseDate: "2024-09-09",
    coverImg: "/covers/pulsebreakers.svg",
    isNew: false,
    isPopular: true,
  },
  {
    id: "CV-011",
    title: "Crown of Static",
    publisher: "Myriad Press",
    description:
      "When broadcast towers awaken as titans, a street DJ weaponizes sound to keep the peace.",
    characters: ["DJ Lumen"],
    genre: ["Urban", "Fantasy"],
    price: 3.29,
    releaseDate: "2023-09-12",
    coverImg: "/covers/crown-of-static.svg",
    isNew: false,
    isPopular: false,
  },
  {
    id: "CV-012",
    title: "Atlas Division: Redshift",
    publisher: "Astral Forge",
    description:
      "Earth's premier defense unit confronts a star eater that feeds on courage, forcing heroes to share fears.",
    characters: ["General Mara", "Atlas Squad"],
    genre: ["Superhero", "Drama"],
    price: 5.29,
    releaseDate: "2025-03-19",
    coverImg: "/covers/atlas-division.svg",
    isNew: true,
    isPopular: true,
  },
];

export const getComicById = (id) => COMICS.find((comic) => comic.id === id);

export const listPublishers = () => [
  ...new Set(COMICS.map((comic) => comic.publisher)),
];

export const listGenres = () => [
  ...new Set(COMICS.flatMap((comic) => comic.genre)),
];

export const featuredComics = () =>
  COMICS.filter((comic) => comic.featuredHeroRank)
    .sort((a, b) => a.featuredHeroRank - b.featuredHeroRank)
    .slice(0, 3);

export const newReleaseComics = () => COMICS.filter((comic) => comic.isNew);

export const popularComics = () => COMICS.filter((comic) => comic.isPopular);
