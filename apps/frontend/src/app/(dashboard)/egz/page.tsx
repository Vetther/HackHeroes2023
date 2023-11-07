import { ChevronRight, PlayCircle } from "lucide-react"
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

  const recommendations = [
    {
      title: "Zadanie optymalizacyjne - poziom rozszerzony",
      thumbnail: "optimization.png",
      channel: "Matemaks",
      views: 956,
    },
    {
      title: "Zlozenia funkcji - zadanie - poziom rozszerzony",
      thumbnail: "function-assemblies.png",
      channel: "Matemaks",
      views: 1654,
    },
    {
      title: "Logarytmy - KURS - MATURA ROZSZERZONE",
      thumbnail: "logarithms.png",
      channel: "Matemaks",
      views: 2511,
    },
    {
      title: "Zlozenia funkcji - zadanie - poziom rozszerzony",
      thumbnail: "function-assemblies.png",
      channel: "Matemaks",
      views: 1654,
    },
    {
      title: "Zlozenia funkcji - zadanie - poziom rozszerzony",
      thumbnail: "function-assemblies.png",
      channel: "Matemaks",
      views: 1654,
    },
    {
      title: "Zadanie optymalizacyjne - poziom rozszerzony",
      thumbnail: "optimization.png",
      channel: "Matemaks",
      views: 956,
    },
    {
      title: "Zadanie optymalizacyjne - poziom rozszerzony",
      thumbnail: "optimization.png",
      channel: "Matemaks",
      views: 956,
    },
  ]

  return (
    <div className="flex gap-16">
      <section className="@container flex-1">
        <ul className="@4xl:grid-cols-4 @2xl:grid-cols-3 @md:grid-cols-2 grid flex-1 gap-2.5">
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
      </section>
      <section className="w-full max-w-md">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-700">
            Polecane Materialy
          </h3>
          <Link
            href="/egz"
            className="flex items-center text-sm text-slate-500"
          >
            Zobacz Wszystko <ChevronRight />
          </Link>
        </div>
        <span className="text-sm text-slate-500">
          Przydatne matrialy, pomagajace przy nauce
        </span>
        <ul className="space-y-[28px]">
          {recommendations.map((recommendation, i) => (
            <li key={i}>
              <Link href="/egz" className="flex gap-[11px] text-[13px]">
                <div className="relative aspect-video w-[100px]">
                  <Image
                    src={`/images/${recommendation.thumbnail}`}
                    alt={recommendation.title}
                    fill
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-1">
                  <span className="text-slate-500">
                    {recommendation.channel}
                  </span>
                  <h4 className="font-semibold text-gray-700">
                    {recommendation.title}
                  </h4>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <PlayCircle /> {recommendation.views} views
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
