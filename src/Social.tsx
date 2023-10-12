import { CalendarClock, MapPin } from "lucide-react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import type { SocialEvent } from "./types";
import { useEffect } from "react";

// social = event
export async function socialLoader({
  params,
}: LoaderFunctionArgs): Promise<SocialEvent> {
  console.log("params.id:", params.id);
  return {
    title: "Event Title",
    location: "The Library",
    city: "Brisbane (AU)",
    date: "Wed, Nov 2",
    time: "10AM - 11:30AM",
    description: "Event description.",
    tags: ["tag", "other tag"],
  };
}

export default function Social() {
  const socialEvent = useLoaderData() as SocialEvent;
  useEffect(() => {
    document.title = `${socialEvent.title} • Local Socials`;
  }, [socialEvent]);
  return (
    <div className="event">
      <h1>{socialEvent.title}</h1>
      <div>
        <MapPin />
        <p>
          {socialEvent.location} • {socialEvent.city}
        </p>
      </div>
      <div>
        <CalendarClock />
        <p>
          {socialEvent.date} • {socialEvent.time}
        </p>
      </div>
      <div>
        <p className="description">{socialEvent.description}</p>
      </div>
      <div className="tags">
        {socialEvent.tags.map((tag) => (
          <p key={tag} className="tag">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}
