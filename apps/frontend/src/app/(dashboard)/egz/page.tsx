import Image from "next/image"
import Link from "next/link"

export default function Exams() {
  const exams = [
    {
      title: "Egzamin Zawodowy",
      subtitle: "EE.09 / INF.03 / E.14",
      image: "practical-exam.png",
    },
    {
      title: "Matematyka",
      subtitle: "EE.09 / INF.03 / E.14",
      image: "maths.png",
    },
    {
      title: "Jezyk Angielski",
      subtitle: "EE.09 / INF.03 / E.14",
      image: "english.png",
    },
    {
      title: "Jezyk Polski",
      subtitle: "EE.09 / INF.03 / E.14",
      image: "polish.png",
    },
    {
      title: "Informatyka",
      subtitle: "EE.09 / INF.03 / E.14",
      image: "it.png",
    },
    {
      title: "Fizyka",
      subtitle: "EE.09 / INF.03 / E.14",
      image: "physics.png",
    },
  ]

  return (
    <>
      <ul className="grid grid-cols-4 gap-2.5">
        {exams.map((exam, i) => (
          <li
            key={i}
            className="relative aspect-video overflow-hidden rounded-lg text-white shadow"
          >
            <Link
              href="/egz"
              className="relative grid h-full place-items-center text-center"
            >
              <Image
                src={`/images/${exam.image}`}
                alt={exam.title}
                fill
                className="absolute"
              />
              <div className="absolute h-full w-full bg-zinc-800/60" />
              <div className="z-10">
                <h2 className="font-semibold">{exam.title}</h2>
                <span>{exam.subtitle}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div></div>
    </>
  )
}
