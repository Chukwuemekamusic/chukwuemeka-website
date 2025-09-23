"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import pressData from "@/lib/data/press.json";

export function Media() {
  const { pressItems } = pressData;

  return (
    <section id="media" className="py-24 bg-stone-50/30">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-stone-900 mb-6 font-serif">
              Media
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
              Photos, press coverage, and behind-the-scenes glimpses into
              Chukwuemeka&apos;s musical journey and ministry.
            </p>
          </div>

          {/* Press Coverage */}
          {pressItems && pressItems.length > 0 && (
            <div>
              <h3 className="text-3xl font-light text-stone-900 font-serif mb-8">
                Press Coverage
              </h3>

              <div className="space-y-6">
                {pressItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-stone-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-light text-stone-900 font-serif mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-amber-600 font-medium">
                          {item.publication}
                        </p>
                      </div>
                      <span className="text-sm text-stone-500 ml-4 whitespace-nowrap">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <p className="text-stone-700 leading-relaxed mb-6 italic">
                      &quot;{item.excerpt}&quot;
                    </p>

                    {item.url && (
                      <button
                        onClick={() => window.open(item.url, "_blank")}
                        className="inline-flex items-center text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
                      >
                        Read Full Review →
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Photo Gallery Preview */}
          <div className="mt-16">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/gallery/onPiano_2.JPEG"
                    alt="Chukwuemeka playing at album concert"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/gallery/withBandMembers_2018.jpg"
                    alt="Chukwuemeka with band members 2018"
                    fill
                    className="object-cover object-left-top"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/gallery/2019_unusualPraise_black&white.JPEG"
                    alt="Chukwuemeka at Unusual Praise 2019"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/gallery/singing.JPEG"
                    alt="Chukwuemeka performing on stage with piano"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media Kit Download */}
        {/* <div className="mt-16 bg-white rounded-xl p-8 text-center shadow-sm border border-stone-200">
          <h3 className="text-3xl font-light text-stone-900 font-serif mb-4">
            Media Kit
          </h3>
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
            Download high-resolution photos, biography, and press materials for
            event promotion and media coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium">
              Download Press Kit
            </button>
            <button
              className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-medium"
              onClick={() =>
                document
                  .getElementById("connect")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request Materials
            </button>
          </div>
        </div> */}
      </Container>
    </section>
  );
}
