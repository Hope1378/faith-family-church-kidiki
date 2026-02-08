import Image from "next/image"
import { Crown } from "lucide-react"

export function AboutPage() {
  return (
    <main className="w-full">
      {/* SECTION 1 — A Community Built on Faith */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-14 pb-16">
          <div className="text-center">
            <h1 className="font-serif font-semibold tracking-wide text-4xl md:text-5xl text-slate-900">
              A Community Built on Faith
            </h1>
            <div className="mx-auto mt-3 h-[4px] w-[86px] rounded-full bg-purple-600" />
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div className="max-w-xl text-[15px] leading-7 text-slate-600">
              <p>
                Faith Family Church Kidiki was established in 2024 with a divine calling
                to serve the community of Kidiki Village, Kamuli District. Born out of a
                deep desire to bring the Gospel to the people and demonstrate Christ&apos;s
                love through tangible action, our church has quickly become a beacon of
                hope and spiritual transformation in the region.
              </p>

              <p className="mt-6">
                From our humble beginnings, we have remained steadfast in our commitment
                to winning souls for Christ and nurturing believers in their spiritual
                journey. Every Sunday service, community outreach, and fellowship
                gathering reflects our passion for God and His people.
              </p>
            </div>

            {/* Image */}
            <div className="w-full">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/community.jpg"
                  alt="Faith Family Church Kidiki community"
                  width={1100}
                  height={650}
                  className="h-[260px] w-full object-cover md:h-[300px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Under Divine Leadership */}
      <section className="w-full bg-[#F7F0E4]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-14 pb-16">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2 text-white shadow-sm">
              <Crown className="h-4 w-4" />
              <span className="text-sm font-medium">Spiritual Covering</span>
            </div>

            <h2 className="mt-6 font-serif font-semibold tracking-wide text-4xl md:text-5xl text-slate-900">
              Under Divine Leadership
            </h2>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-4xl rounded-2xl bg-white border border-slate-200/70 shadow-xl">
              <div className="grid items-center gap-8 p-8 md:p-10 md:grid-cols-[240px_1fr]">
                {/* Leader Image */}
                <div className="flex justify-center md:justify-start">
                  <div className="overflow-hidden rounded-2xl border-4 border-purple-300 shadow-md">
                    <Image
                      src="/images/papa-20denis.jpg"
                      alt="Apostle Denis Kasirye"
                      width={240}
                      height={240}
                      className="h-[220px] w-[220px] object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Leader Text */}
                <div>
                  <h3 className="font-serif font-semibold text-3xl text-slate-900">
                    Apostle Denis Kasirye
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Latter Glory Ministries
                  </p>

                  <p className="mt-5 text-[15px] leading-7 text-slate-600 max-w-2xl">
                    Faith Family Church Kidiki operates under the spiritual oversight of
                    Apostle Denis Kasirye of Latter Glory Ministries, who provides
                    apostolic covering and guidance to all Faith Family Church Centers
                    worldwide. His visionary leadership and commitment to the Great
                    Commission continues to inspire and direct our ministry endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
