import { supabase } from "../utils/supabase";
import SocialLink from "../components/SocialLink";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Posts from "../components/Posts";
import Footer from "../components/Footer.tsx";
import HeadTag from "../components/HeadTag";
const Index = (props) => {
  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <HeadTag name={props.name} />
      <Header />
      <main>
        <ProfileCard
          name={props.name}
          about={props.about}
          image={props.image}
        />
        <SocialLink
          github={props.github}
          linkedin={props.linkedin}
          twitter={props.twitter}
          medium={props.medium}
        />
        <Projects projects={props.projects} />
        <Posts posts={props.posts} />
      </main>
      <Footer name={props.name} />
    </div>
  );
};
export default Index;
export async function getStaticProps(context) {
  const data = await supabase.from("me.ishaanbedi.in").select("*");
  var website_data = data.data[0].website_data;
  const image = await supabase.storage
    .from("profile-image")
    .getPublicUrl("profile");
  website_data["image"] = image.data.publicURL;
  return {
    props: website_data,
  };
}
