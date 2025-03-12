/* eslint-disable jsx-a11y/alt-text */
import { Title } from "@/components/Text";
import { affiliates } from "@/data/affiliate";
import Image from "next/image";

export default function Affiliate() {
  return (
    <section className="container mx-auto border-x pt-10 pb-20">
      <Title className="text-center py-2.5 border-b">Afiliasi Kami</Title>
      <div className="grid justify-items-center gap-y-24 grid-cols-2 lg:grid-cols-4 py-24">
        {affiliates.map((affiliate, index) => (
          <Image key={index} {...affiliate} className="h-20 object-contain" />
        ))}
      </div>
    </section>
  );
}
