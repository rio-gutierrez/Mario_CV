import { generalInfo } from "@/data/info";

const AboutSection = () => {
  return (
    <>
      <h3 className="mb-1 text-slate-900 dark:text-slate-100">About</h3>
      <div className="text-slate-600 dark:text-slate-300">
        <p>{generalInfo.about}</p>
      </div>
    </>
  );
};

export default AboutSection;
