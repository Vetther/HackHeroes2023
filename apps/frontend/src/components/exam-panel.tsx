"use client"

import { useMultistepForm } from "@/hooks/use-multistep-form"
import { Exam } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { atom, useAtom } from "jotai"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import ExamEnd from "./exam-end"
import ExamWizard from "./exam-wizard"
import { Form } from "./ui/form"

export const examSchema = z.object({
  //   personalInformation: z.object({
  //     firstName: z.string(),
  //     lastName: z.string(),
  //   }),
  questions: z.array(
    z.object({
      questionId: z.number(),
      content: z.string(),
      selectedAnswer: z.string().min(1),
    })
  ),
})

export const panelNextFunctionAtom = atom<(() => void) | null>(null)
export const panelBackFunctionAtom = atom<(() => void) | null>(null)

const ExamPanel = ({ exam }: { exam: Exam }) => {
  const {
    currentStepIndex,
    lastMaxStepIndex,
    step,
    steps,
    isFirstStep,
    isLastStep,
    goTo,
    next,
    back,
  } = useMultistepForm([
    // <ExamStart />,
    <ExamWizard exam={exam} />,
    <ExamEnd />,
  ])

  const [panelNextFunction, setPanelNextFunction] = useAtom(
    panelNextFunctionAtom
  )
  const [panelBackFunction, setPanelBackFunction] = useAtom(
    panelBackFunctionAtom
  )

  useEffect(() => {
    setPanelNextFunction(() => next)
    setPanelBackFunction(() => back)
  }, [])

  return <>{step}</>
}

export const ExamProvider = ({
  children,
  exam,
}: {
  children: React.ReactNode
  exam: Exam
}) => {
  const form = useForm<z.infer<typeof examSchema>>({
    resolver: zodResolver(examSchema),
    defaultValues: {
      //   personalInformation: {
      //     firstName: "",
      //     lastName: "",
      //   },
      questions: exam?.questions.map((question) => ({
        questionId: +question.id,
        content: question.content,
        selectedAnswer: "",
      })),
    },
  })

  return <Form {...form}>{children}</Form>
}

export default ExamPanel
