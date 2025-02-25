import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/Icons";

export type EventStatus = "today" | "upcoming" | "past";

export interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  status: EventStatus;
  capacity?: number;
  attendees?: number;
}

export function EventCard({
  id,
  title,
  description,
  date,
  location,
  imageUrl,
  status,
  capacity,
  attendees,
}: EventCardProps) {
  // Status badge color mapping
  const statusColors = {
    today: "bg-green-500",
    upcoming: "bg-blue-500",
    past: "bg-gray-500",
  };

  // Status label mapping
  const statusLabels = {
    today: "Today",
    upcoming: "Upcoming",
    past: "Past",
  };

  return (
    <article
      role="article"
      aria-labelledby={`event-title-${id}`}
      className="relative flex flex-col bg-card rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:transform-gpu hover:scale-[1.02] animate-fade-up"
    >
      {/* Image Area */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={`Event: ${title}`}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 space-y-4">
        {/* Title */}
        <h3 
          id={`event-title-${id}`}
          className="text-xl font-semibold line-clamp-2"
        >
          {title}
        </h3>

        {/* Metadata */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icons.CalendarIcon className="h-4 w-4" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icons.MapPinIcon className="h-4 w-4" />
          <span>{location}</span>
        </div>
        
        {capacity && attendees !== undefined && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icons.UsersIcon className="h-4 w-4" />
            <span>{attendees} / {capacity}</span>
          </div>
        )}
      </div>

        {/* Description */}
        <p className="text-base text-muted-foreground line-clamp-3">
          {description}
        </p>

        {/* Action */}
        <div className="mt-auto pt-4">
          <Link
            href={`/events/${id}`}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
            aria-label={`View details for ${title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}