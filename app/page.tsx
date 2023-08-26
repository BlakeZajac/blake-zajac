import Hero from "@/components/common/Hero";
import heroImage from "../public/img/global/headshots/blake-zajac.png";
import Tabs from "@/components/common/Tabs";
import CustomMarquee from "@/components/common/Marquee";
import FeaturedProjects from "@/components/common/FeaturedProjects";
import FullwidthImage from "@/components/common/FullwidthImage";
import Clients from "@/components/common/Clients";

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

      <FullwidthImage
        relative
        spacingTop
        spacingTopValue="mt-16 md:mt-24"
        imageSrc="/img/photo/bar_beach/bar-beach-01.jpg"
        imageAlt="Bar Beach"
      />

      <Clients title="Clients I've worked with" />

      <Tabs />
    </>
  );
}
