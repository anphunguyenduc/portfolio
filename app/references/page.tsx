interface ReferenceCardProps {
  name: string;
  role: string;
  email: string;
  projects: string[];
  blurb: string;
}

function ReferenceCard({ name, role, email, projects, blurb }: ReferenceCardProps) {
  return (
    <div
      className="hover-lift rounded-2xl p-8 flex flex-col gap-4"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid rgba(255, 122, 122, 0.10)",
      }}
    >
      <p
        className="text-text-primary text-sm font-semibold"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {name}
      </p>

      <p className="text-text-muted text-xs -mt-2">{role}</p>

      <a
        href={`mailto:${email}`}
        className="text-text-subtle text-xs -mt-2 hover:text-accent transition-colors duration-200"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {email}
      </a>

      <div className="flex flex-wrap gap-2">
        {projects.map((tag) => (
          <span
            key={tag}
            className="text-accent text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: "rgba(255, 122, 122, 0.10)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-text-muted text-sm leading-[1.65] text-justify">{blurb}</p>
    </div>
  );
}

const peerCards: ReferenceCardProps[] = [
  {
    name: "Nguyen Khanh An",
    role: "Friend, classmate",
    email: "ngkhanhan0805@gmail.com",
    projects: ["GVC Event Vice-Lead", "Donut Bully", "Class projects"],
    blurb: "“I had the pleasure of knowing him since high school and was especially struck by his capabilities during our IGCSE Business Studies presentations. In those collaborative projects, he consistently took the lead, proactively diving into research, organizing our findings, and steering the group to thoroughly examine financial elements like costs, profitability, and strategic planning. He didn’t just excel at his own responsibilities, he also actively assisted his partners, ensuring our presentations were not only coherent but also remarkably compelling. Beyond academics, his enthusiasm for Finance shines through in our daily discussions. He often brings up and dissects current events, economic matters, and market shifts, offering insightful and well-informed viewpoints. His sharp analytical mind, coupled with his dedication to continuous learning, makes me confident that he is an exceptional candidate with significant promise for future growth.”",
  },
  {
    name: "Nguyen Ngoc Ha",
    role: "Mentor at TALKTOPUS",
    email: "nngocha.work25@gmail.com",
    projects: ["TALKTOPUS Vice Organiser", "MC partner", "Class projects"],
    blurb: "“As a mentor at TALKTOPUS under An Phu’s management as Head of Human Resources, I was genuinely impressed by the dedication and initiative he brought to the team. He consistently supported contestants by helping them improve their communication skills, providing useful materials, and creating a clear tracking system for their progress. He also took the initiative to organize offline mentoring sessions and introduced Calendly as a scheduling tool for mentor-mentee feedback meetings, which made our workflow much more efficient. He showed great patience, a willingness to learn from others, and strong problem-solving skills, always proactive in finding solutions and making sure tasks were completed on time. Working alongside him as an MC, I witnessed how he managed pressure, reviewing the script while reminding staff to look after contestants at the same time. It was a small but memorable moment that reflected his strong sense of responsibility and genuine effort for the competition.”",
  },
];

const teacherCard: ReferenceCardProps = {
  name: "Uyen Kieu Ngoc",
  role: "Community Service teacher",
  email: "uyen.ktn@greenfield.edu.vn",
  projects: ["TALKTOPUS Advisor", "Community Service"],
  blurb: "“One of the qualities that defines An Phu, in my eyes, is his positive attitude. Throughout the journey of TALKTOPUS, our school’s student speaker competition, he served as Head of Human Resources, a role that was new to him. At first, there was understandable hesitation, but his openness, eagerness to learn, and proactive spirit left a deep impression on me. The role demanded skills in people management, planning, teamwork, and the ability to work intensively during high-pressure final stretches, and he proved himself capable of all of it. TALKTOPUS was a large-scale competition, and not only An Phu but the entire organizing team faced moments of difficulty, even crisis. Yet with his positive mindset, multifaceted thinking, and clear judgment, An Phu helped his team regain their spirit and refocus on solving problems with a steadiness that did not waver. I believe that on the road ahead, whether facing challenges in his projects or in life, he will always remain positive and in command of any situation. Working skills matter, but more than anything, the resilience this 18-year-old already possesses is something truly admirable.”",
};

export default function ReferencesPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
        <span className="text-accent">05</span> · REFERENCES
      </p>

      {/* Two-line H1 */}
      <h1
        className="text-5xl font-semibold leading-tight text-text-primary mb-1"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        REFERENCES
      </h1>
      <p
        className="text-5xl text-accent mb-16"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        The Voices Around Me
      </p>

      {/* Top row — teacher card, full width */}
      <div className="mb-5">
        <ReferenceCard {...teacherCard} />
      </div>

      {/* Bottom row — 2 peer cards side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
        {peerCards.map((card) => (
          <ReferenceCard key={card.name} {...card} />
        ))}
      </div>

      {/* Closing decoration */}
      <div className="flex flex-col items-center mt-16">
        <div
          className="h-px w-20 mb-6"
          style={{ backgroundColor: "rgba(255, 122, 122, 0.25)" }}
        />
        <p
          className="text-text-muted text-sm"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          More references available on request.
        </p>
      </div>
    </div>
  );
}
