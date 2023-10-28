import ProgressBar from "./score-progress-bar"
import Section from "./section"

export default function Score() {
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
        <div className="text-xl">
          <ProgressBar points={20} />
        </div>
      </div>
      <span className="text-sm leading-[21px] text-slate-500">
        Dziękujemy za wzięcie udziału w kwalifikacjach.
      </span>
    </Section>
  )
}
