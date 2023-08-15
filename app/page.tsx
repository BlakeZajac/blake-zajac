import Hero from "@/components/hero";
import heroImage from "../public/img/global/headshots/blake-zajac.png";
import Tabs from "@/components/tabs";
import CustomMarquee from "@/components/marquee";
import FeaturedProjects from "@/components/featured-projects";

export default async function Home() {
  return (
    <>
      <Hero
        headingBeforeText="Blake Zajac"
        heroImage={heroImage}
        headingAfterText="is a Newcastle-based Front End Developer and UX Designer specialising in creating distinctive and lasting website experiences."
      />

      <FeaturedProjects />

      <CustomMarquee dupeAndReverse>
        <div className="mx-8 md:mx-16 block w-[0.5rem] h-[0.5rem] md:w-[1rem] md:h-[1rem] bg-black rounded-full"></div>
        <p className="heading-lg">Amplifying brands through design</p>
      </CustomMarquee>

      <Tabs />
    </>
  );
}
