import Hero from "@/components/common/hero";
import heroImage from "../public/img/global/headshots/blake-zajac.png";
import Tabs from "@/components/common/tabs";
import CustomMarquee from "@/components/common/marquee";
import FeaturedProjects from "@/components/common/featured-projects";

export default async function Home() {
  return (
    <>
      <Hero
        headingBeforeText="Blake Zajac"
        heroImage={heroImage}
        headingAfterText="is a Newcastle-based Front End Developer and UX Designer specialising in creating distinctive and lasting website experiences."
      />

      {/* <FeaturedProjects /> */}

      <CustomMarquee dupeAndReverse>
        <div className="mx-8 md:mx-16 block w-[0.5rem] h-[0.5rem] md:w-[1rem] md:h-[1rem] bg-black rounded-full"></div>
        <p className="heading-lg">Amplifying brands through design</p>
      </CustomMarquee>

      <Tabs />
    </>
  );
}
