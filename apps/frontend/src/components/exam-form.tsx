"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form"
import { FormControl, FormField, FormItem } from "./ui/form"

const ExamForm = ({
  content,
  answers,
  questionId,
  index,
}: {
  content: string
  answers: {
    answer_a: string
    answer_b: string
    answer_c: string
    answer_d: string
  }
  questionId: number
  index: number
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const { control, getValues, setValue } = useFormContext()

  useEffect(() => {
    let answer = null

    if (getValues(`questions.${index}.selectedAnswer`) !== "") {
      answer = getValues(`questions.${index}.selectedAnswer`)
    } else if (
      JSON.parse(localStorage.getItem("answers")!)?.at(index) !== null
    ) {
      if (
        JSON.parse(localStorage.getItem("answers")!)?.at(index) !== undefined
      ) {
        answer = JSON.parse(localStorage.getItem("answers")!)?.at(index)?.answer
      } else {
        answer = null
      }
    }
    setSelectedAnswer(answer)
  }, [])

  useEffect(() => {
    if (selectedAnswer === null) return
    setValue(`questions.${index}.selectedAnswer`, selectedAnswer)
  }, [selectedAnswer])

  const handleClick = async (
    field: ControllerRenderProps<
      FieldValues,
      `questions.${number}.selectedAnswer`
    >,
    answer: string
  ) => {
    setSelectedAnswer(answer)
    field.onChange(answer)
    let answers = []

    if (localStorage.getItem("answers") === null) {
      answers.push({ content: content, answer: answer, id: questionId })
      localStorage.setItem("answers", JSON.stringify(answers))
    } else {
      answers = JSON.parse(localStorage.getItem("answers")!)
      const index = answers.findIndex(
        (answer: { id: number }) => answer.id === questionId
      )
      if (index !== -1) {
        answers[index] = { content: content, answer: answer, id: questionId }
        localStorage.setItem("answers", JSON.stringify(answers))
      } else {
        localStorage.setItem(
          "answers",
          JSON.stringify([
            ...answers,
            { content: content, answer: answer, id: questionId },
          ])
        )
      }
    }
  }

  return (
    <div className="flex w-full flex-col gap-[22px]">
      <div className="rounded-lg bg-white px-[88px] py-[74px] ring-1 ring-gray-100">
        <p className="select-none text-center font-dm-sans text-xl leading-7 text-gray-700">
          {content}
        </p>
      </div>
      <FormField
        control={control}
        name={`questions.${index}.selectedAnswer`}
        render={({ field, fieldState }) => (
          <FormItem className="grid grid-cols-2 gap-x-7 gap-y-[22px] space-y-0">
            <FormControl>
              <>
                <div
                  className={cn(
                    "flex w-full cursor-pointer select-none items-center justify-center rounded-lg bg-white px-11 py-7 ring-1 ring-gray-100",
                    fieldState.isTouched &&
                      "bg-red-50 ring-2 ring-red-500 transition-all duration-150",
                    selectedAnswer === "a" &&
                      "bg-indigo-50 ring-2 ring-indigo-500 transition-all duration-150"
                  )}
                  onClick={() => handleClick(field, "a")}
                >
                  <p className="text-center font-dm-sans text-xl font-normal leading-7 text-gray-700">
                    {answers.answer_a}
                  </p>
                </div>
                <div
                  className={cn(
                    "flex w-full cursor-pointer select-none items-center justify-center rounded-lg bg-white px-11 py-7 ring-1 ring-gray-100",
                    selectedAnswer === "b" &&
                      "bg-indigo-50 ring-2 ring-indigo-500 transition-all duration-150"
                  )}
                  onClick={() => handleClick(field, "b")}
                >
                  <p className="text-center font-dm-sans text-xl font-normal leading-7 text-gray-700">
                    {answers.answer_b}
                  </p>
                </div>
                <div
                  className={cn(
                    "flex w-full cursor-pointer select-none items-center justify-center rounded-lg bg-white px-11 py-7 ring-1 ring-gray-100",
                    selectedAnswer === "c" &&
                      "bg-indigo-50 ring-2 ring-indigo-500 transition-all duration-150"
                  )}
                  onClick={() => handleClick(field, "c")}
                >
                  <p className="text-center font-dm-sans text-xl font-normal leading-7 text-gray-700">
                    {answers.answer_c}
                  </p>
                </div>
                <div
                  className={cn(
                    "flex w-full cursor-pointer select-none items-center justify-center rounded-lg bg-white px-11 py-7 ring-1 ring-gray-100",
                    selectedAnswer === "d" &&
                      "bg-indigo-50 ring-2 ring-indigo-500 transition-all duration-150"
                  )}
                  onClick={() => handleClick(field, "d")}
                >
                  <p className="text-center font-dm-sans text-xl font-normal leading-7 text-gray-700">
                    {answers.answer_d}
                  </p>
                </div>
              </>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}

export default ExamForm
