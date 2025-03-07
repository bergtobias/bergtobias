import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  MapPin,
  Mic,
  Music,
  Piano,
  Car,
  Coffee,
  Sprout,
} from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="py-16 ">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Beyond the Code
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            When I&#39;m not building applications or configuring Kubernetes
            clusters, here&#39;s what you&#39;ll find me doing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Info Column */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-primary/10 mb-6 relative">
                    <Image
                      src="/profile.jpg"
                      alt="Tobias Berg"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    Hello, I&#39;m Tobias Berg
                  </h3>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Gothenburg, Sweden</span>
                  </div>

                  <p className="text-sm mb-6">
                    Business Analyst & Full-stack developer by day, and music
                    enthusiast by night. Currently crafting digital experiences
                    at Volvo Cars.
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Car className="h-3 w-3" />
                      <span>Volvo Cars</span>
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Code className="h-3 w-3" />
                      <span>Developer</span>
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Music className="h-3 w-3" />
                      <span>Musician</span>
                    </Badge>
                  </div>

                  <div className="w-full border-t pt-4">
                    <h4 className="font-medium text-sm mb-3">Quick Facts</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 mr-2 text-primary" />
                        <span>Fueled by coffee and curiosity</span>
                      </li>
                      <li className="flex items-center">
                        <Piano className="h-4 w-4 mr-2 text-primary" />
                        <span>Selftought musician</span>
                      </li>
                      <li className="flex items-center">
                        <Car className="h-4 w-4 mr-2 text-primary" />
                        <span>Passionate about automotive tech</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-primary" />
                        <span>Selftought programmer</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interests Tabs Column */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6">
                <Tabs defaultValue="music" className="h-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="music">Music</TabsTrigger>
                    <TabsTrigger value="sports">Sports</TabsTrigger>
                    <TabsTrigger value="coding">Coding</TabsTrigger>
                  </TabsList>

                  {/* Music Tab */}
                  <TabsContent value="music" className="mt-0 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                      <div className="space-y-4">
                        <div className="relative z-10 text-center p-6 col-span-2">
                          <h3 className="font-bold text-lg mb-2">
                            Music Journey
                          </h3>
                          <p className="text-sm">
                            Music has been my creative outlet since childhood. I
                            perform at student events, local venues, and private
                            parties, combining my love for indie pop, rock, and
                            pop with .
                          </p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                          <Piano className="h-10 w-10 text-primary mr-4" />
                          <div>
                            <h4 className="font-medium">Piano</h4>
                            <p className="text-sm text-muted-foreground">
                              Playing since 15 years old, self-taught
                            </p>
                          </div>
                        </div>

                        <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                          <Mic className="h-10 w-10 text-primary mr-4" />
                          <div>
                            <h4 className="font-medium">Singing</h4>
                            <p className="text-sm text-muted-foreground">
                              Singing since 18 years old, self-taught
                            </p>
                          </div>
                        </div>

                        <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                          <Music className="h-10 w-10 text-primary mr-4" />
                          <div>
                            <h4 className="font-medium">Songwriting</h4>
                            <p className="text-sm text-muted-foreground">
                              Creating original music in my home studio
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/artist.jpg"
                            alt="artist"
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Sports Tab */}
                  <TabsContent value="sports" className="mt-0 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                      <div className="space-y-4">
                        <div className="relative z-10 text-center p-6">
                          <h3 className="font-bold text-lg mb-2">
                            Active Lifestyle
                          </h3>
                          <p className="text-sm">
                            Living in Gothenburg provides the perfect balance of
                            urban life and access to nature. I take advantage of
                            Sweden&#39;s beautiful landscapes through golfing.
                          </p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                          <Sprout className="h-10 w-10 text-primary mr-4" />
                          <div>
                            <h4 className="font-medium">Hockey</h4>
                            <p className="text-sm text-muted-foreground">
                              Played since childhood, quited 2022 due to studies
                            </p>
                          </div>
                        </div>

                        <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                          <svg
                            className="h-10 w-10 text-primary mr-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                          </svg>{" "}
                          <div>
                            <h4 className="font-medium">Golf</h4>
                            <p className="text-sm text-muted-foreground">
                              Discovering Sweden&#39;s beautiful natural
                              landscapes looking for my golf ball
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/sport.jpeg"
                            alt="artist"
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Coding Tab */}
                  <TabsContent value="coding" className="mt-0 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                      <div className="space-y-4">
                        <div className="relative z-10 text-center p-6">
                          <h3 className="font-bold text-lg mb-2">
                            Coding Passion
                          </h3>
                          <p className="text-sm">
                            Programming isn&#39;t just my profession—it&#39;s my
                            hobby too. I enjoy working on personal projects that
                            solve real problems, from home automation to music
                            production tools.
                          </p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                          <Code className="h-10 w-10 text-primary mr-4" />
                          <div>
                            <h4 className="font-medium">Side Projects</h4>
                            <p className="text-sm text-muted-foreground">
                              Building tools and applications I find useful
                            </p>
                          </div>
                        </div>

                        <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                          <svg
                            className="h-10 w-10 text-primary mr-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                          </svg>
                          <div>
                            <h4 className="font-medium">Learning</h4>
                            <p className="text-sm text-muted-foreground">
                              Constantly exploring new technologies and
                              frameworks
                            </p>
                          </div>
                        </div>

                        <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                          <svg
                            className="h-10 w-10 text-primary mr-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <div>
                            <h4 className="font-medium">Community</h4>
                            <p className="text-sm text-muted-foreground">
                              Contributing to open source and local tech meetups
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/programing.jpg"
                            alt="programing"
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volvo Cars Section */}
        <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Car className="h-5 w-5 mr-2 text-primary" />
                  Working at Volvo Cars
                </h3>
                <p className="text-muted-foreground mb-4">
                  Being part of Volvo Cars in Gothenburg has been an incredible
                  journey, combining my passion for technology with the
                  automotive industry.
                </p>
                <p className="text-sm mb-4">
                  At Volvo, I work on innovative digital solutions that shape
                  the future of mobility. The company&#39;s commitment to
                  safety, sustainability, and innovation aligns perfectly with
                  my personal values. Working with talented teams from diverse
                  backgrounds has expanded my perspective and technical skills.
                </p>
                <p className="text-sm">
                  Gothenburg&#39;s unique blend of Scandinavian design,
                  technological innovation, and quality of life makes it the
                  perfect place to build my career while enjoying a balanced
                  lifestyle.
                </p>
              </div>
              <div className="bg-muted relative h-64 md:h-auto">
                <div className="absolute inset-0">
                  <Image
                    src="/volvo-cars.jpg"
                    alt="Volvo Cars"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="relative z-10 h-full w-full flex items-center justify-center p-6">
                  <div className="text-center text-white">
                    <svg
                      className="h-16 w-16 mx-auto mb-4 text-white/80"
                      viewBox="0 0 165 165"
                      fill="currentColor"
                    >
                      <path d="M82.5,0C36.9,0,0,36.9,0,82.5C0,128.1,36.9,165,82.5,165C128.1,165,165,128.1,165,82.5C165,36.9,128.1,0,82.5,0z M82.5,145.9 c-35,0-63.4-28.4-63.4-63.4c0-35,28.4-63.4,63.4-63.4c35,0,63.4,28.4,63.4,63.4C145.9,117.5,117.5,145.9,82.5,145.9z" />
                      <path d="M82.5,37.8c-9.7,0-17.6,7.9-17.6,17.6c0,9.7,7.9,17.6,17.6,17.6c9.7,0,17.6-7.9,17.6-17.6C100.1,45.7,92.2,37.8,82.5,37.8z" />
                      <path d="M64.9,82.5c-9.7,0-17.6,7.9-17.6,17.6c0,9.7,7.9,17.6,17.6,17.6c9.7,0,17.6-7.9,17.6-17.6C82.5,90.4,74.6,82.5,64.9,82.5z" />
                      <path d="M100.1,82.5c-9.7,0-17.6,7.9-17.6,17.6c0,9.7,7.9,17.6,17.6,17.6c9.7,0,17.6-7.9,17.6-17.6C117.7,90.4,109.8,82.5,100.1,82.5z" />
                    </svg>
                    <p className="font-medium text-lg">Volvo Cars</p>
                    <p className="text-sm text-white/80">Gothenburg, Sweden</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Gothenburg Section */}
        <div className="mt-8">
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="bg-muted order-2 md:order-1 relative h-64 md:h-auto">
                <div className="absolute inset-0">
                  <Image
                    src="/gothenburg.jpg"
                    alt="Gothenburg"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="relative z-10 h-full w-full flex items-center justify-center p-6">
                  <div className="text-center text-white">
                    <svg
                      className="h-16 w-16 mx-auto mb-4 text-white/80"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="font-medium text-lg">Gothenburg</p>
                    <p className="text-sm text-white/80">
                      Sweden&#39;s second-largest city
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 order-1 md:order-2">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Life in Gothenburg
                </h3>
                <p className="text-muted-foreground mb-4">
                  Living in Gothenburg offers the perfect balance between urban
                  culture and natural beauty.
                </p>
                <p className="text-sm mb-4">
                  Gothenburg&#39;s vibrant music scene has been instrumental in
                  my development as a musician, providing venues to perform and
                  connect with other artists. The city&#39;s compact size makes
                  it easy to bike around, whether I&#39;m heading to work at
                  Volvo Cars, meeting friends at a café, or going to a local
                  tech meetup.
                </p>
                <p className="text-sm">
                  The archipelago just outside the city offers a peaceful
                  retreat when I need inspiration or relaxation. Swedish
                  work-life balance allows me to pursue my passions for music
                  and coding projects while maintaining a fulfilling career in
                  tech.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
