"use client"

import { useMultistepForm } from "@/hooks/use-multistep-form"
import { Exam } from "@/types"
import axios from "axios"
import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { useTimer } from "react-timer-hook"
import { z } from "zod"
import ExamForm from "./exam-form"
import { examSchema, panelNextFunctionAtom } from "./exam-panel"
import { ExamIcons } from "./icons/exam"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

const ExamWizard = ({ exam }: { exam: Exam }) => {
  const [panelNextFunction] = useAtom(panelNextFunctionAtom)
  const [endDialog, setEndDialog] = useState(false)

  const { control, handleSubmit, trigger, getValues } =
    useFormContext<z.infer<typeof examSchema>>()

  const router = useRouter()

  const { fields } = useFieldArray({
    control,
    name: "questions",
  })

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
  } = useMultistepForm(
    fields.map((field, index) => {
      const { answer_a, answer_b, answer_c, answer_d } = exam.questions.find(
        ({ id }) => +id === field.questionId
      )!

      return (
        <ExamForm
          content={field.content}
          answers={{ answer_a, answer_b, answer_c, answer_d }}
          questionId={field.questionId}
          index={index}
          key={index}
        />
      )
    })
  )

  const expiryTimestamp = new Date(new Date().getTime() + 1000 * 60 * 60 - 1000) // godzina
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("expired"),
  })

  function onSubmit(values: z.infer<typeof examSchema>) {
    const secret = JSON.parse(localStorage.getItem("exam")!).secret

    const data = {
      secret: secret,
      finish_time: new Date().toISOString(),
      questions: values.questions.map((question) => ({
        id: question.questionId,
        answer: question.selectedAnswer,
      })),
    }

    axios
      .post("http://localhost:3000/api/v1/exam", data)
      .then(function (response) {
        localStorage.removeItem("exam")
        localStorage.removeItem("answers")
        console.log(response)

        const secret = JSON.parse(localStorage.getItem("secret")!).find(
          ({ secret }: { secret: any }) => secret === exam.secret
        )!
        secret.solved = true

        console.log(secret)

        const id = JSON.parse(localStorage.getItem("secret")!).find(
          ({ secret }: { secret: any }) => secret === exam.secret
        )!.id
        router.push(`/egzaminy/${id}/wynik`)
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(function () {})
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex h-full w-full max-w-6xl flex-col justify-center gap-11">
        <div className="flex flex-col gap-[22px]">
          <div className="flex justify-between">
            <div className="flex w-full max-w-[240px] select-none flex-row items-center justify-between gap-[18px] rounded-lg bg-white px-[18px] py-[14px] font-dm-sans text-sm font-medium text-gray-700 ring-1 ring-gray-100">
              <ExamIcons.left
                onClick={() => back()}
                className="cursor-pointer"
              />
              <p>
                Pytanie {currentStepIndex + 1} z {steps.length}{" "}
              </p>
              <ExamIcons.right
                onClick={() => {
                  if (currentStepIndex < lastMaxStepIndex) next()
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="flex w-full max-w-[300px] select-none flex-row items-center justify-center gap-[18px] rounded-lg bg-white px-[18px] py-[14px] font-dm-sans text-sm font-bold text-gray-700 ring-1 ring-gray-100">
              <div>
                <span className="font-['DM Sans'] text-sm font-medium text-stone-700">
                  Pozostały czas:{" "}
                </span>
                <span className="font-['DM Sans'] text-sm font-bold text-stone-700">
                  {minutes} minut {seconds} sekund
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>{step}</form>
        </div>
        <div className="flex justify-center">
          <Button
            type="button"
            onClick={async () => {
              if (
                isLastStep &&
                (await trigger(`questions.${currentStepIndex}.selectedAnswer`))
              )
                return setEndDialog(true)
              if (
                await trigger(`questions.${currentStepIndex}.selectedAnswer`)
              ) {
                next()
              }
            }}
          >
            {currentStepIndex + 1}/{steps.length} Nastepne pytanie
          </Button>
        </div>
        <Dialog open={endDialog} onOpenChange={setEndDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Czy chcesz już oddać egzamin?</DialogTitle>
              <DialogDescription>
                Po zakończenu egzaminu nie będzie możliwości powrotu do niego.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                type="button"
                size="lg"
                className="w-full"
                onClick={() => {
                  handleSubmit(onSubmit)()
                }}
              >
                Zakończ egzamin
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default ExamWizard
