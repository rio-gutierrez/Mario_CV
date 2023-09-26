import ThemeSwitch from "@/components/ThemeSwitch";
import { contentData } from "@/data/content-data";
import Content from "@/app/(main-content)/Content";
import Contact from "@/app/(contact-section)/Contact";
import AvatarSection from "@/app/(avatar-section)/AvatarSection";
import AboutSection from "@/app/(about-section)/AboutSection";

export default function Home() {
  return (
    <>
      <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-li">
        {/* AVATAR SECTION */}
        <section className="flex items-center">
          <AvatarSection />
        </section>
        {/* END OF AVATAR SECTION */}

        {/* ABOUT SECTION */}
        <section className="my-9 text-sm">
          <AboutSection />
        </section>
        {/* END OF ABOUT SECTION */}

        {/* MAIN CONTENT SECTION */}
        <section>
          {contentData.map((content, index) => {
            return <Content {...content} key={index} />;
          })}
        </section>
        {/* END OF MAIN CONTENT SECTION */}

        {/* CONTACT SECTION */}
        <section className="my-14 text-sm">
          <Contact />
        </section>
        {/* END OF CONTACT SECTION */}

        {/* THEME SWITCH SECTION */}
        <div className="px-6 absolute left-0 bottom-6">
          <ThemeSwitch />
        </div>
        {/* END OF THEME SWITCH SECTION */}
      </main>
    </>
  );
}
