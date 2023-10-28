import AIRaport from "./ai-report"
import Chart from "./chart"
import Profile from "./profile"
import Score from "./score"
import Time from "./time"

export default function Results() {
  return (
    <div className="flex h-full w-full gap-6">
      <div className="flex w-full max-w-xl flex-col gap-6">
        <Profile />
        <Score />
      </div>
      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full gap-6">
          <AIRaport />
          <Time />
        </div>
        <Chart />
      </div>
    </div>
  )
}
