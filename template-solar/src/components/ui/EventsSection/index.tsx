"use client"

import { Button } from "@/components/Button"
import { useState } from "react"
import { EventCard, EventCardProps } from "./EventCard"

// Mock data for events
// Mock data for events
const mockEvents: EventCardProps[] = [
  {
    id: "1",
    title: "AI Ethics Workshop",
    description:
      "Join us for a comprehensive workshop on ethical considerations in AI development and deployment. Learn about bias, fairness, and transparency.",
    date: "March 15, 2025",
    location: "Tech Hub Medellín",
    imageUrl: "/images/ai-events.jpg",
    status: "upcoming",
    capacity: 50,
    attendees: 32,
  },
  {
    id: "2",
    title: "Machine Learning Fundamentals",
    description:
      "A beginner-friendly introduction to machine learning concepts, algorithms, and practical applications in today's world.",
    date: "March 10, 2025",
    location: "Universidad de Antioquia",
    imageUrl: "/images/ai-events-001.jpg",
    status: "today",
    capacity: 100,
    attendees: 78,
  },
  {
    id: "3",
    title: "AI in Healthcare Symposium",
    description:
      "Explore how artificial intelligence is transforming healthcare with leading experts from around the world.",
    date: "April 5, 2025",
    location: "Hospital Universitario San Vicente Fundación",
    imageUrl: "/images/ai-events-003.jpg",
    status: "upcoming",
    capacity: 75,
    attendees: 45,
  },
]
interface EventsSectionProps {
  className?: string
}

export function EventsSection({ className = "" }: EventsSectionProps) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <section
      className={`bg-background min-h-screen px-4 py-20 ${className}`}
      aria-labelledby="events-heading"
    >
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <h2
            id="events-heading"
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Featured Events
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Discover the latest AI events happening in Medellín. Connect with
            experts, learn new skills, and be part of the growing AI community.
          </p>
        </div>

        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-full animate-pulse flex-col overflow-hidden rounded-lg"
              >
                <div className="bg-muted h-48" />
                <div className="flex-1 space-y-4 p-6">
                  <div className="bg-muted h-6 w-3/4 rounded" />
                  <div className="space-y-2">
                    <div className="bg-muted h-4 w-1/2 rounded" />
                    <div className="bg-muted h-4 w-1/3 rounded" />
                  </div>
                  <div className="bg-muted h-4 w-full rounded" />
                  <div className="bg-muted h-4 w-full rounded" />
                  <div className="bg-muted h-4 w-2/3 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Event cards grid
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Button variant="primary" aria-label="View all events" asChild>
            <a href="/events">View All Events</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
