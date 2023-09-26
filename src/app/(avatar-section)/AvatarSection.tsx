import Image from "next/image";
import { generalInfo } from "@/data/info";

const AvatarSection = () => {
  return (
    <>
      <Image
        alt="Author"
        src={generalInfo.avatar}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />
      <div className="ml-4">
        <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100">
          {generalInfo.name}
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          {generalInfo.jobTitle}
        </p>
        {generalInfo.website ? (
          <span className="text-sm text-slate-400 dark:text-slate-400">
            <a
              href={generalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {generalInfo.website
                .replace(/(^\w+:|^)\/\//, "")
                .replace("www.", "")}
            </a>
          </span>
        ) : null}
      </div>
    </>
  );
};

export default AvatarSection;
