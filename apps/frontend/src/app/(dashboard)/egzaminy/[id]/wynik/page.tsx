"use client"

import Results from "@/components/results"
import { useChat } from "ai/react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const ResultPage = ({ params }: { params: { id: string } }) => {
  const [secret, setSecret] = useState("")
  const { input, handleInputChange, handleSubmit, messages } = useChat()
  const router = useRouter()
  //   console.log(messages)
  //   console.log(input)

  useEffect(() => {
    if (!localStorage.getItem("secret")) {
      router.push(`/egzaminy/${params.id}`)
    } else {
      const find = JSON.parse(localStorage.getItem("secret")!).find(
        (item: { id: string }) => item.id === params.id
      )
      if (find === undefined) {
        router.push(`/egzaminy/${params.id}`)
      }
      setSecret(find.secret)
      console.log(find.secret)
    }
  }, [])

  const { isLoading, data } = useQuery(
    "exam",
    () =>
      axios
        .post(`http://localhost:3000/api/v1/exam/solved`, {
          secret: secret,
        })
        .then((res) => res.data),
    { refetchOnWindowFocus: false }
  )

  return <Results />
}

export default ResultPage
