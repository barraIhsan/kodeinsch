import Programs from "./ProgramComp";

export default function ProgramActivity() {
  return (
    <section className="container mx-auto py-8 border-x border-gray-200">
      <Programs />
      <Programs reverse/>
      <Programs />
    </section>
  );
}
