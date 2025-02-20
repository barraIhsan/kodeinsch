import { Title } from "@/components/Text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import styles from "./shadow.module.css";
import { cn } from "@/lib/utils";
import Programs from "./ProgramComp";

export default function ProgramActivity() {
  return (
    <section className="container mx-auto py-8 border-x border-gray-200">
      <Programs></Programs>
      <Programs></Programs>
      <Programs></Programs>
    </section>
  );
}
