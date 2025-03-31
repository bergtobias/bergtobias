"use client";
import React from "react";
import { formatDate, i } from "./data";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

const Main = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const data = i(lang);

  return (
    <div className="p-6">
      {/* Main Content Header */}
      <div className="mb-6 relative md:grid hidden">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-lg text-muted-foreground">
          Business Analyst & Developer
        </p>
      </div>
      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Briefcase className="h-5 w-5 mr-2" /> Experience
        </h2>
        <div className="space-y-4">
          {data.experience.map((exp, index) => (
            <Card key={index} className="border-muted">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.company}</h3>
                    <p className="font-medium">{exp.title}</p>
                    {exp.location && (
                      <p className="text-muted-foreground text-sm">
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(exp.startTime)} - {formatDate(exp.endTime)}
                  </p>
                </div>
                {exp.description && (
                  <p className="mt-2 text-sm">{exp.description}</p>
                )}
                {exp.achievements && (
                  <div className="mt-2">
                    <p className="text-sm font-medium">Key Achievements:</p>
                    <ul className="list-disc list-inside text-sm mt-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <GraduationCap className="h-5 w-5 mr-2" /> Education
        </h2>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <Card key={index} className="border-muted">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{edu.school}</h3>
                    <p className="text-muted-foreground text-sm">
                      {edu.location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(edu.startTime)} - {formatDate(edu.endTime)}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="font-medium">{edu.type}</p>
                  <p className="text-muted-foreground">{edu.program}</p>
                  {edu.description && (
                    <p className="mt-2 text-sm">{edu.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;
