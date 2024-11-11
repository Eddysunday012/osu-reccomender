import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleDot } from "lucide-react";

interface beatmap {
  difficulty_rating: number;
  url: string;
}

interface BeatmapCardProps {
  key: number;
  title: string;
  creator: string;
  artist: string;
  cover: string;
  beatmaps: beatmap[];
}

export default function BeatmapCard(props: BeatmapCardProps) {
  return (
    <Card
      style={{
        backgroundImage: `url(${props.cover})`,
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <CardHeader className="relative h-40 w-full">
        <div>
          <CardTitle className="text-xl text-white">{props.title}</CardTitle>
          <CardDescription className="text-white">
            {props.artist}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-center bg-[#2D192E] pt-5 text-center">
        <p className="text-white">Mapped by {props.creator}</p>
      </CardContent>
      <CardFooter className="flex flex-row items-center justify-start rounded-b-xl bg-[#2D192E]">
        {props.beatmaps
          .sort((a, b) => {
            return a.difficulty_rating - b.difficulty_rating;
          })
          .slice(0, 7)
          .map((beatmap) => (
            <div key={beatmap.url} className="mx-1">
              <BeatmapRatingCircle
                difficultyRating={beatmap.difficulty_rating}
              />
            </div>
          ))}
        <p className="ml-2 text-lg text-white">
          {props.beatmaps.length > 7 ? `+${props.beatmaps.length - 7}` : ""}
        </p>
      </CardFooter>
    </Card>
  );
}

function BeatmapRatingCircle(props: { difficultyRating: number }) {
  return (
    <div>
      <CircleDot className={difficultyColor(props.difficultyRating)} />
    </div>
  );
}

function difficultyColor(difficulty: number) {
  // You can adjust the difficulty ranges and colors as needed
  console.log(difficulty);
  if (difficulty <= 3) {
    return "text-green-400"; // Easy
  } else if (difficulty <= 5) {
    return "text-blue-400"; // Normal
  } else if (difficulty <= 7) {
    return "text-yellow-300"; // Hard
  } else if (difficulty <= 9) {
    return "text-red-400"; // Insane
  } else {
    return "text-purple-500"; // Expert+
  }
}
