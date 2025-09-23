'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import eventsData from '@/lib/data/events.json';
import type { Event } from '@/lib/utils/types';

export function Events() {
  const { events } = eventsData;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
      fullDate: date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
  };

  const getEventTypeStyles = (type: string) => {
    switch (type) {
      case 'worship':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'concert':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'festival':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'private':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="events" className="py-24 bg-stone-50/30">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-stone-900 mb-6 font-serif">Upcoming Events</h2>
            <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
              Join Chukwuemeka for intimate worship experiences and community gatherings
              celebrating faith through music.
            </p>
          </div>

          {events && events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              {events.map((event: any) => {
                const dateInfo = formatDate(event.date);
                const startTime = new Date(event.date).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                });

                return (
                  <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg transition-shadow">
                    {/* Event Image */}
                    <div className="relative h-48 bg-gradient-to-br from-stone-200 to-amber-200/50">
                      {event.image ? (
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-stone-500">
                            <div className="text-4xl mb-2">🎵</div>
                            <p className="text-sm font-light">Event Image</p>
                          </div>
                        </div>
                      )}
                      {event.featured && (
                        <div className="absolute top-3 left-3">
                          <div className="px-2 py-1 bg-amber-600 text-white text-xs font-medium rounded-full">
                            Featured
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Event Content */}
                    <div className="p-6 space-y-4">
                      {/* Date Badge */}
                      <div className="flex items-center gap-3">
                        <div className="text-center bg-stone-100 rounded-lg px-3 py-2 min-w-[60px]">
                          <div className="text-xs text-stone-600 font-medium uppercase">
                            {dateInfo.month}
                          </div>
                          <div className="text-lg font-bold text-stone-900">
                            {dateInfo.day}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-light text-stone-900 font-serif">
                            {event.title}
                          </h3>
                          <p className="text-sm text-stone-600">
                            {startTime} • {event.venue}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-stone-700 text-sm leading-relaxed">
                        {event.description}
                      </p>

                      {/* Action */}
                      <div className="pt-2">
                        {event.ticketUrl ? (
                          <button
                            onClick={() => window.open(event.ticketUrl, '_blank')}
                            className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                          >
                            Get Tickets
                          </button>
                        ) : event.registrationRequired ? (
                          <button
                            onClick={() => window.open(`mailto:${event.contactEmail}`, '_blank')}
                            className="w-full px-4 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors text-sm font-medium"
                          >
                            Register Now
                          </button>
                        ) : (
                          <button
                            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full px-4 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors text-sm font-medium"
                          >
                            Get Updates
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl text-stone-300 mb-4">📅</div>
              <h3 className="text-xl font-light text-stone-900 font-serif mb-2">No Events Scheduled</h3>
              <p className="text-stone-600 mb-6">Check back soon for upcoming worship events and concerts</p>
              <button
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-medium"
              >
                Stay Updated
              </button>
            </div>
          )}

          {/* Call to Action for Booking */}
          <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 rounded-xl p-8 text-center border border-stone-200">
            <h3 className="text-3xl font-light text-stone-900 font-serif mb-4">
              Host Chukwuemeka at Your Event
            </h3>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Invite Chukwuemeka to bring his peaceful, spirit-filled music to your church,
              community event, or special gathering. His cross-cultural appeal makes him
              perfect for diverse audiences seeking authentic worship experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                Booking Inquiry
              </button>
              <button
                onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-medium"
              >
                Listen to Music First
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}