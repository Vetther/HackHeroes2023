import Section from "./section"

export default function Time() {
  return (
    <Section className="w-full flex-col items-center justify-between">
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
