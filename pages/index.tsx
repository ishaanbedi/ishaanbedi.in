import SocialLink from "../components/SocialLink";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import HeadTag from "../components/HeadTag";

const Index = () => {
  let data = {
    github: "https://github.com/ishaanbedi",
    medium: "https://ishaanbedi.medium.com/",
    twitter: "https://twitter.com/ishnbedi",
    linkedin: "https://www.linkedin.com/in/ishaanbedi13/",
    projects: [
      {
        web: "https://supatype.vercel.app/",
        name: "SupaType: Unlimited Online Typing Tests",
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
        web: null,
        name: "👑 Chipify: Exploring M Series Chips",
        tech: ["Swift", "SwiftUI", "iOS/iPadOS/MacOS"],
        github: "https://github.com/ishaanbedi/Chipify-WWDC22",
      },
      {
        web: "https://www.ishaanbedi.in/",
        name: "ishaanbedi.in: Portfolio Website",
        tech: ["Next.js", "TailwindCSS", "Typescript", "Web"],
        github: "https://github.com/ishaanbedi/ishaanbedi.in",
      },
    ],
    posts: [
      {
        title: "Breaking down George Pólya’s methods of problem-solving.",
        link: "https://ishaanbedi.medium.com/breaking-down-george-p%C3%B3lyas-methods-of-problem-solving-2dc0ba94ef79",
        platform: "Medium",
      },
      {
        title: "Make your own calculator in HTML, CSS, JAVASCRIPT",
        link: "https://medium.com/swlh/make-your-own-calculator-in-html-css-javascript-1319dd93a742",
        platform: "Medium",
      },
      {
        title: "Understanding Variables in Swift",
        link: "https://tealfeed.com/understanding-variables-swift-i32po",
        platform: "Tealfeed",
      },
      {
        title: "Understanding Constants in Swift",
        link: "https://tealfeed.com/understanding-constants-swift-0mbpz",
        platform: "Tealfeed",
      },
      {
        title: "Understanding Strings in Swift",
        link: "https://tealfeed.com/understanding-strings-swift-pbhbw",
        platform: "Tealfeed",
      },
      {
        title: "String Interpolation in Swift",
        link: "https://tealfeed.com/string-interpolation-swift-zw7tc",
        platform: "Tealfeed",
      },
    ],
    image:
      "https://kcldtzblfykiwwltfouv.supabase.co/storage/v1/object/public/profile-image/profile",
  };
  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <HeadTag name="Ishaan Bedi" />
      <Header />
      <main>
        <ProfileCard
          name="Ishaan Bedi"
          about={
            "Welcome to my small corner on the web. I'm a 19-year-old student from Delhi, India. I love working with technologies & frameworks to create and design applications for the web and mobile-computers. Reach me at hi@ishaanbedi.in"
          }
          image={data.image}
        />
        <SocialLink
          github={data.github}
          linkedin={data.linkedin}
          twitter={data.twitter}
          medium={data.medium}
        />
        <Projects projects={data.projects} />
        <Posts posts={data.posts} />
      </main>
      <Footer name="Ishaan Bedi" />
    </div>
  );
};
export default Index;
