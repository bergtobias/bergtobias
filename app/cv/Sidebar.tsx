"use client";
import React from "react";
import {
  Code,
  Coffee,
  Globe,
  Heart,
  Languages,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "nextra-theme-docs";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { i } from "./data";
import { useSearchParams } from "next/navigation";

export const Sidebar = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  const data = i(lang);

  return (
    <div className="bg-primary-foreground p-6 flex flex-col space-y-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-3">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={96}
            height={96}
            className="rounded-full"
          />
        </div>
        <h1 className="text-xl font-bold">{data.name}</h1>
        <p className="text-sm text-muted-foreground">
          Business Analyst & Developer
        </p>
      </div>

      <Separator />

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center">
          <Mail className="h-4 w-4 mr-2" /> Contact
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{data.contactInfo.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{data.contactInfo.email}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{data.contactInfo.location}</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
            <Link href={"/"} className="hover:text-blue-700">
              {data.contactInfo.website}
            </Link>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center">
          <Code className="h-4 w-4 mr-2" /> Skills
        </h2>
        <div className="space-y-3">
          {data.skills?.map((skill, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm">{skill.name}</span>
                <span className="text-xs text-muted-foreground">
                  {skill.level}/5
                </span>
              </div>
              <Progress value={(skill.level / 5) * 100} className="h-1.5" />
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center">
          <Languages className="h-4 w-4 mr-2" /> Languages
        </h2>
        <div className="space-y-3">
          {data.languages?.map((language, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm">{language.language}</span>
                <span className="text-xs text-muted-foreground">
                  {language.level}/5
                </span>
              </div>
              <Progress value={(language.level / 5) * 100} className="h-1.5" />
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center">
          <Heart className="h-4 w-4 mr-2" /> Interests
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.interests?.map((interest, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-white">
              {interest}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Hobbies */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center">
          <Coffee className="h-4 w-4 mr-2" /> Hobbies
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.hobbies?.map((hobby, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-white">
              {hobby}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
