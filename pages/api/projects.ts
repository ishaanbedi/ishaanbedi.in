var socials = (req, res) => {
  res.status(200).json([
    {
      web: "https://supatype.vercel.app/",
      name: "SupaType: Unlimited Typing Tests",
      tech: ["Next.js", "TailwindCSS", "Supabase", "Web"],
      github: "https://github.com/ishaanbedi/supatype",
    },
    {
      web: "https://quizify.ishaanbedi.in/",
      name: "Quizify: Online quiz platform.",
      tech: ["Next.js", "TailwindCSS", "Axios", "Web"],
      github: "https://github.com/ishaanbedi/quizify",
    },
    {
      web: "https://www.wwdcscholars.com/s/ADD233CE-6526-4096-AA8F-C6A6203918CC/2022",
      name: "Chipify: Exploring M Series Chips",
      tech: ["Swift", "SwiftUI", "iOS/iPadOS/MacOS"],
      github: "https://github.com/ishaanbedi/Chipify-WWDC22",
    },
    {
      web: "https://www.ishaanbedi.in/",
      name: "ishaanbedi.in: Portfolio Website",
      tech: ["Next.js", "TailwindCSS", "Typescript", "Web"],
      github: "https://github.com/ishaanbedi/ishaanbedi.in",
    },
  ]);
};
export default socials;
