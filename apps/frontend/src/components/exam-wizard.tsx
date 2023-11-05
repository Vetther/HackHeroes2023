"use client"

import { useMultistepForm } from "@/hooks/use-multistep-form"
import { Exam } from "@/types"
import { useAtom } from "jotai"
import { useFieldArray, useFormContext } from "react-hook-form"
import { useTimer } from "react-timer-hook"
import { z } from "zod"
import ExamForm from "./exam-form"
import { examSchema, panelNextFunctionAtom } from "./exam-panel"
import { ExamIcons } from "./icons/exam"
import { Button } from "./ui/button"

const ExamWizard = ({ exam }: { exam: Exam }) => {
  const [panelNextFunction] = useAtom(panelNextFunctionAtom)

  const { control, handleSubmit, trigger, getValues } =
    useFormContext<z.infer<typeof examSchema>>()

  const { fields } = useFieldArray({
    control,
    name: "exam",
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
    fields.map((field, index) => (
      <ExamForm
        name={field.name}
        answers={exam.find(({ name }) => name === field.name)!.answers}
        index={index}
        key={index}
      />
    ))
  )

  const expiryTimestamp = new Date(new Date().getTime() + 1000 * 60 * 60 - 1000) // godzina
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("expired"),
  })

  function onSubmit(values: z.infer<typeof examSchema>) {
    console.log(values)
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
              if (isLastStep) return panelNextFunction!()
              if (await trigger(`exam.${currentStepIndex}.selectedAnswerId`)) {
                next()
              }
            }}
          >
            {currentStepIndex + 1}/{steps.length} Nastepne pytanie
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ExamWizard
