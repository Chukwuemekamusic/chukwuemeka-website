import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="about" className="py-24 bg-stone-50/30">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/profile_withoutDreads.PNG"
                    alt="Chukwuemeka"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300/20 rounded-full -z-10"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-4xl font-light text-stone-900 mb-6 font-serif">
                  About
                </h2>
              </div>

              <div className="space-y-6 text-stone-700 leading-relaxed">
                <p className="text-lg font-light">
                  A Christian psalmist reflecting on life in its fullness
                  through God&apos;s lens.
                </p>

                <p>
                  Born in Nigeria and based in Aberdeen, Scotland, Chukwuemeka
                  creates music that illuminates hearts and minds with the love
                  of God.
                </p>

                <p>
                  Through songs that embrace both beauty and struggle, he shares
                  a journey of honest vulnerability that always finds strength
                  in God&apos;s unfailing provision.
                </p>

                <p>
                  Drawing from classical, jazz, and worship influences, his
                  &quot;simple, deep, and spirit-filled&quot; music appeals to
                  everyone seeking life&apos;s deeper meaning, creating bridges
                  through hope and peace.
                </p>

                {/* Subtle review integration */}
                <div className="pt-4 border-l-2 border-yellow-200 pl-6">
                  <p className="text-stone-600 italic">
                    &quot;A beautiful album which has a great balance of simple
                    worship, challenges and just the right touch in
                    production.&quot;
                  </p>
                  <p className="text-sm text-stone-500 mt-2">
                    — One Man in the Middle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
