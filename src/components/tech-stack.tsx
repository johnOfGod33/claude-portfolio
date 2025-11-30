import Image from "next/image";

const technologies = [
  {
    name: "Revit",
    icon: "/revit.png", // Using the image provided
  },
  {
    name: "AutoCAD",
    icon: "/autocad.png",
  },
  {
    name: "Archicad",
    icon: "/archicad.jpg",
  },
  {
    name: "ETABS",
    icon: "/etabs.png",
  },
];

export function TechStack() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center space-y-12">
        <h2 className="text-3xl font-bold tracking-tight">
          Outils & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-colors duration-300 space-y-4 group"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image
                  src={tech.icon as string}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xs md:text-sm ">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
