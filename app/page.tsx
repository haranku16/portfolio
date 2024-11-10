import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/photos/photo1.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Engineer, leader, story teller,<br/>caffeine addict
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Seasoned Software Engineer with 7 years of experience at Amazon, including 4 years as a team lead.
        I’m known for building strong team bonds, diving deep into complex problems, and constantly learning new tricks of the trade.
        I bring a creative spark to the table and take my responsibilities seriously (but never myself).
        I’m currently working on mastering engineering and product innovation in the field of Artificial Intelligence at Duke University.
        I’m ever committed to delivering top-notch solutions while keeping the team spirit high and the coffee flowing.
        </p>
        <p>
        My mission: to embody the entrepreneurial spirit wherever I go and develop breathtaking products leveraging AI that create lasting impact.
        </p>
      </div>
    </section>
  );
}
