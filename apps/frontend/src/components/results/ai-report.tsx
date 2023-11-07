import { cn } from "@/lib/utils"
import { useCompletion } from "ai/react"
import { useAtom } from "jotai"
import { Loader2 } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { dataAtom } from "."
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export default function AIRaport({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [resultData, setResultData] = useAtom(dataAtom)
  const [raport, setRaport] = useState<string>("")
  const { complete, isLoading } = useCompletion({
    api: "/api/chat",
  })

  const sendRaport = useCallback(
    async (c: string) => {
      const completion = await complete(c)
      setRaport(completion!)
    },
    [complete]
  )

  useEffect(() => {
    if (!resultData) return
    console.log(resultData?.questions)
    const prompt = resultData?.questions.map((question: any, index: number) => {
      if (
        question.answer.toLowerCase() !== question.correct_answer.toLowerCase()
      ) {
        return {
          question: question.content,
          index: index,
        }
      } else {
        return null
      }
    })

    const promptString = prompt
      .filter((p: any) => p !== null)
      .map((p: { index: any; question: any; answer: any }) => {
        return `${p?.question}`
      })

    sendRaport(promptString)
  }, [resultData])

  return (
    <Card
      className={cn(
        "h-full w-full items-center justify-center gap-[22px] xl:h-auto",
        className
      )}
    >
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-center">Raport AI</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-sm leading-[21px] text-slate-500">
        {isLoading && (
          <div className="flex h-full  w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        <div>{raport}</div>
      </CardContent>
    </Card>
  )
}
