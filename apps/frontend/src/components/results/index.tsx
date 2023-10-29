import AIRaport from "./ai-report"
import Chart from "./chart"
import Profile from "./profile"
import Score from "./score"
import Time from "./time"

export default function Results() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex w-full flex-col gap-6 lg:max-w-xl">
          <Profile />
          <Score />
        </div>
        <div className="flex w-full flex-col gap-6">
          <div className="flex h-full w-full flex-col gap-6 2xl:h-auto 2xl:flex-row">
            <AIRaport />
            <Time />
          </div>
          <Chart className="hidden xl:flex" />
        </div>
      </div>
      <Chart className="flex xl:hidden" />
    </div>
  )
}
