import React from "react";
import Timeline, {
  TimelineItem,
  TimelineItemDate,
  TimelineItemDescription,
  TimelineItemTitle,
} from "../ui/timeline";
import { educationData } from "../../assets/assets";
import { achievementData} from "../../assets/assets";

function Education() {
  return (
    <section id="education" className="py-12 mb-16 px-6 max-w-6xl mx-auto">
      
        {/* Section Header */}
        <p className="font-pixel text-sm tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-6">
        EDUCATION
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Educational Milestones and Achivements.
        </h2>

        <p className="text-neutral-500 dark:text-neutral-400 mb-16">
          A couple of steps i have made in Journey.
        </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <Timeline orientation="vertical" vertItemSpacing={36} noCards>
            {educationData.map((item, idx) => (
              <TimelineItem key={idx} variant={item.variant}>
                <div className="rounded-xl border border-dashed border-neutral-200 hover:border-neutral-400 dark:border-white/10 dark:hover:border-white/25 p-4 transition-colors duration-200">
                  <TimelineItemDate>{item.date}</TimelineItemDate>
                  <TimelineItemTitle>{item.title}</TimelineItemTitle>
                  <TimelineItemDescription>{item.description}</TimelineItemDescription>
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Achievements</h3>
          <Timeline orientation="vertical" vertItemSpacing={36} noCards>
            {achievementData.map((item, idx) => (
              <TimelineItem key={idx} variant={item.variant}>
                <div className="rounded-xl border border-dashed border-neutral-200 hover:border-neutral-400 dark:border-white/10 dark:hover:border-white/25 p-4 transition-colors duration-200">
                  <TimelineItemDate>{item.date}</TimelineItemDate>
                  <TimelineItemTitle>{item.title}</TimelineItemTitle>
                  <TimelineItemDescription>{item.description}</TimelineItemDescription>
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}

export default Education;
