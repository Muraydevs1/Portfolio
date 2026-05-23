import React from "react";
import Timeline, {
  TimelineItem,
  TimelineItemDate,
  TimelineItemDescription,
  TimelineItemTitle,
} from "../ui/timeline";

const educationData = [
  {
    date: "2022 - Present",
    title: "BSc. Computer Science",
    description: "University for Development Studies (UDS)",
    variant: "default",
  },
  
];

const achievementData = [
  {
    date: "2021",
    title: "VB.Net Certification",
    description: "CKT-UTAS Bootcamp",
    variant: "secondary",
  },
  
];

function Education() {
  return (
    <section id="education" className="py-12 mb-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Education & Achievements</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <Timeline orientation="vertical" vertItemSpacing={36}>
            {educationData.map((item, idx) => (
              <TimelineItem key={idx} variant={item.variant}>
                <TimelineItemDate>{item.date}</TimelineItemDate>
                <TimelineItemTitle>{item.title}</TimelineItemTitle>
                <TimelineItemDescription>{item.description}</TimelineItemDescription>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Achievements</h3>
          <Timeline orientation="vertical" vertItemSpacing={36}>
            {achievementData.map((item, idx) => (
              <TimelineItem key={idx} variant={item.variant}>
                <TimelineItemDate>{item.date}</TimelineItemDate>
                <TimelineItemTitle>{item.title}</TimelineItemTitle>
                <TimelineItemDescription>{item.description}</TimelineItemDescription>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}

export default Education;
