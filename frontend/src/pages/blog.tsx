import DefaultLayout from "@/layouts/default";
import { Divider, ScrollShadow, Card, CardHeader, Image } from "@heroui/react";
import { Content } from "@/components/contents";

export default function DocsPage() {
  return (
    <DefaultLayout>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Our Events 
        </h1>
        <p className="text-small text-default-400 mt-2">
          Students Events, Various Kind of events and activities 2025.
        </p>

        <Divider className="my-4" />

        <div className="flex flex-wrap items-center gap-4 text-small">
          <span>Academic Events</span>
          <Divider orientation="vertical" />
          <span>Cultural Events</span>
          <Divider orientation="vertical" />
          <span>Technical Events</span>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE - ScrollShadow */}
        <div className="w-full lg:w-[320px]">
          <ScrollShadow
            hideScrollBar
            className="h-[300px] lg:h-[620px]"
            offset={100}
          >
            <Content />
          </ScrollShadow>
        </div>

        {/* RIGHT SIDE - Cards */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">

            <Card className="lg:col-span-4 h-[250px] sm:h-[300px] relative">
              <CardHeader className="absolute z-10 top-3 flex flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Academic
                </p>
                <h4 className="text-white font-medium text-large">
                  Stream the Acme event
                </h4>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper
                alt="Event"
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/1200x/eb/1b/f7/eb1bf755894396a35e970c3fd625236c.jpg"
              />
            </Card>

            <Card className="lg:col-span-4 h-[250px] sm:h-[300px] relative">
              <Image
                isZoomed
                removeWrapper
                alt="Event"
                className="w-full h-full object-cover"
                src="https://www.jagannath.org/images/events/freshers-2024-b.webp"
              />
            </Card>

            <Card className="lg:col-span-4 h-[250px] sm:h-[300px] relative">
              <Image
                isZoomed
                removeWrapper
                alt="Event"
                className="w-full h-full object-cover"
                src="https://tancam.in/frontend/blog/high/_195.jpg"
              />
            </Card>

            <Card className="lg:col-span-5 h-[250px] sm:h-[300px] relative">
              <Image
                isZoomed
                removeWrapper
                alt="Event"
                className="w-full h-full object-cover"
                src="https://smvec.ac.in/wp-content/uploads/2025/08/79th-Independence-Day.png"
              />
            </Card>

            <Card className="lg:col-span-7 h-[250px] sm:h-[300px] relative">
              <Image
                isZoomed
                removeWrapper
                alt="Event"
                className="w-full h-full object-cover"
                src="https://blog.spantechnologyservices.com/wp-content/uploads/2025/08/Campus-Recruitment-Drive-Sri-Eshwar-.png"
              />
            </Card>

          </div>
        </div>

      </section>
    </DefaultLayout>
  );
}