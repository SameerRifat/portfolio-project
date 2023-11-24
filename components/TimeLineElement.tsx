import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/ThemeContextProvider";

type ExperienceElementProps = {
  // theme: string
  item: {
    date: string;
    icon: React.ReactNode;
    title: string;
    location: string;
    description: string;
  };
};

export default function TimelineElement({ item }: ExperienceElementProps) {
  const {theme} = useTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255, 0.05)',
          boxShadow: "none",
          border: "1px solid rgba(0,0,0,0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
          color: theme === 'light' ? "black !important" : "rgba(255,255,255,0.75)",
        }}
        contentArrowStyle={{
          borderRight: theme === 'light' ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.1)",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === 'light' ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem",
        }}
        visible={inView}
      >
        <h3 className="font-semibold capitalize dark:text-white/80">{item.title}</h3>
        <p className="font-normal !mt-0 dark:text-white/75">{item.location}</p>
        <p className="font-normal !mt-1 text-gray-700 dark:text-white/75">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
