import { atom, useAtom } from "jotai"
import { useEffect } from "react"
import AIRaport from "./ai-report"
import Chart from "./chart"
import Profile from "./profile"
import Score from "./score"
import Time from "./time"

export const dataAtom = atom<any>(null)

export default function Results({ data }: any) {
  const [resultData, setResultData] = useAtom(dataAtom)

  useEffect(() => {
    setResultData(data)
  }, [data])

  return (
    <div className="flex h-full w-full flex-col gap-6">
      {data && (
        <>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex w-full flex-col gap-6 lg:max-w-xl">
              <Profile />
              <Score />
            </div>
            <div className="flex w-full flex-col gap-6">
              <div className="flex h-full w-full flex-col gap-6 2xl:h-auto 2xl:flex-row">
                <AIRaport />
                {resultData?.start_time && resultData?.finish_time && (
                  <Time
                    start={new Date(resultData.start_time)}
                    end={new Date(resultData.finish_time)}
                  />
                )}
              </div>
              <Chart className="hidden xl:flex" />
            </div>
          </div>
          <Chart className="flex xl:hidden" />
        </>
      )}
    </div>
  )
}
