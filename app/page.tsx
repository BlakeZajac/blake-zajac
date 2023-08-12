import Hero from "@/components/section/section-hero";
import heroImage from "../public/img/global/headshots/blake-zajac.png";

export default async function Home() {
  return (
    <Hero
      headingBeforeText="Blake Zajac"
      heroImage={heroImage}
      headingAfterText="is a Newcastle-based Front End Developer and UX Designer specialising in creating distinctive and lasting website experiences."
    />
  );
}
