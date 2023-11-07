import axios from "axios"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { z } from "zod"
import { examSchema } from "./exam-panel"
import Results from "./results"
import { Button } from "./ui/button"

const ExamEnd = () => {
  const [endPanel, setEndPanel] = useState(false)
  const form = useFormContext<z.infer<typeof examSchema>>()

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
        setEndPanel(true)
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(function () {})
  }

  return (
    <div>
      {endPanel ? (
        <Results />
      ) : (
        <Button
          type="button"
          size="lg"
          onClick={() => {
            form.handleSubmit(onSubmit)()
          }}
        >
          Oddaj egzamin 😉
        </Button>
      )}
    </div>
  )
}

export default ExamEnd
