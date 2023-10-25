import { cn } from "@/lib/utils"
import { NavbarIcons } from "./icons/navbar"

export default function Results() {
  return (
    <div className="inline-flex h-screen gap-6 self-stretch px-8">
      <div className="inline-flex flex-col gap-6">
        <ProfileSection />
        <ScoreSection />
      </div>
      <div className="inline-flex flex-col gap-6">
        <div className="inline-flex gap-6">
          <AIReportSection />
          <TimeSection />
        </div>
        <ChartSection />
      </div>
    </div>
  )
}

function ProfileSection() {
  return (
    <Section className="justify-between gap-2.5">
      <div className="inline-flex flex-col gap-2.5">
        <span className="text-sm leading-[21px] text-slate-500">
          Dane Rozwiązującego
        </span>
        <ul>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">Imię: </span>
            <span className="font-semibold leading-tight text-gray-700">
              User
            </span>
          </li>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">
              Nazwisko:{" "}
            </span>
            <span className="font-semibold leading-tight text-gray-700">
              Anonymous
            </span>
          </li>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">
              Adres email:{" "}
            </span>
            <span className="font-semibold leading-tight text-gray-700">
              email@email.email
            </span>
          </li>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">
              Szkoła:{" "}
            </span>
            <span className="font-semibold leading-tight text-gray-700">
              Szkoła
            </span>
          </li>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">
              Indentyfikator:{" "}
            </span>
            <span className="font-semibold leading-tight text-gray-700">
              1234567890
            </span>
          </li>
        </ul>
      </div>
      <div className="grid place-items-center">
        <NavbarIcons.profile className="h-[120px] w-[120px] rounded-full border border-black px-2 pt-6" />
      </div>
    </Section>
  )
}

function AIReportSection() {
  return (
    <Section className="max-w-md flex-col items-center justify-center gap-[22px]">
      <h3 className="text-xl font-semibold leading-7 text-gray-700">
        Raport AI
      </h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, optio!
        Ipsam minima eos fugit deleniti distinctio ducimus, neque autem quisquam
        suscipit labore. Voluptates animi sapiente inventore? At delectus sint
        consequatur fugiat facere eum aperiam ab blanditiis dolores eligendi.
        Odio, et ullam dolore debitis perferendis commodi maxime quod iste
        maiores non nam reiciendis voluptatibus perspiciatis incidunt delectus
        consequuntur aspernatur? Quaerat sint voluptatem reprehenderit quisquam,
        veritatis nesciunt, neque fuga et illo alias blanditiis vel,
        perspiciatis laudantium quod!
      </p>
    </Section>
  )
}

function TimeSection() {
  return (
    <Section className="flex-col items-center justify-between">
      <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-2.5">
        <h3 className="text-xl font-semibold leading-7 text-gray-700">
          Czas ukończenia
        </h3>
        <div>
          <span className="text-[56px] font-semibold leading-[78.4px] text-gray-700">
            00
          </span>
          <span className="text-[32px] font-semibold leading-[44.8px] text-gray-700">
            h
          </span>
          <span className="text-[56px] font-semibold leading-[78.4px] text-gray-700">
            00
          </span>
          <span className="text-[32px] font-semibold leading-[44.8px] text-gray-700">
            m
          </span>
          <span className="text-[56px] font-semibold leading-[78.4px] text-gray-700">
            00
          </span>
          <span className="text-[32px] font-semibold leading-[44.8px] text-gray-700">
            s
          </span>
        </div>
      </div>
      <div className="inline-flex w-full items-center justify-between text-sm">
        <div className="inline-flex shrink grow basis-0 flex-col justify-center gap-2">
          <span className="leading-[21px] text-slate-500">
            Data rozpoczęcia
          </span>
          <span className="font-semibold leading-tight text-gray-700">
            DD.MM.YYYY, 00:00
          </span>
        </div>
        <div className="inline-flex shrink grow basis-0 flex-col items-end justify-center gap-2">
          <span className="leading-[21px] text-slate-500">
            Data zakończenia
          </span>
          <span className="font-semibold leading-tight text-gray-700">
            DD.MM.YYYY, 00:00
          </span>
        </div>
      </div>
    </Section>
  )
}

function ScoreSection() {
  return (
    <Section className="h-full flex-col items-center justify-center gap-[98px]">
      <div className="flex flex-col items-center justify-center gap-[49px]">
        <div className="flex flex-col items-center justify-center gap-1">
          <h3 className="text-xl font-semibold leading-7 text-gray-700">
            Uzyskany wynik
          </h3>
          <span className="text-center text-sm leading-[21px] text-slate-500">
            Zwycięzcy wkrótce zostaną podani
            <br /> w zakładce Tabela Wyników.
          </span>
        </div>
        {/* Wynik */}
        <span>0%</span>
      </div>
      <span className="text-sm leading-[21px] text-slate-500">
        Dziękujemy za wzięcie udziału w kwalifikacjach.
      </span>
    </Section>
  )
}

function ChartSection() {
  return (
    <Section className="h-full flex-col gap-11">
      <h3 className="text-xl font-semibold leading-7 text-gray-700">
        Czas udzielenia odpowiedzi / pytanie
      </h3>
      <div></div>
    </Section>
  )
}

function Section({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("inline-flex rounded-lg bg-white p-11 shadow", className)}
      {...props}
    >
      {children}
    </section>
  )
}
