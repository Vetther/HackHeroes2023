import { cn } from "@/lib/utils"
import { useAtom } from "jotai"
import { useMemo } from "react"
import { dataAtom } from "."
import { Card, CardTagLine, CardTitle } from "../ui/card"
import ProgressBar from "./score-progress-bar"

export default function Score({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [resultData, setResultData] = useAtom(dataAtom)
  const points = useMemo(() => {
    return resultData?.questions?.filter(
      (question: any) =>
        question.answer.toLowerCase() === question.correct_answer.toLowerCase()
    )
  }, [resultData])

  return (
    <Card className={cn("flex items-center justify-between", className)}>
      <div className="flex flex-col items-center justify-center gap-[49px]">
        <div className="flex flex-col items-center justify-center gap-1">
          <CardTitle>Uzyskany wynik</CardTitle>
          <CardTagLine className="text-center">
            Zwycięzcy wkrótce zostaną podani
            <br /> w zakładce Tabela Wyników.
          </CardTagLine>
        </div>
        {points && <ProgressBar points={points?.length} />}
      </div>
      <CardTagLine>Dziękujemy za wzięcie udziału w kwalifikacjach.</CardTagLine>
    </Card>
  )
}
