"use client"

import Results from "@/components/results"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const ResultPage = ({ params }: { params: { id: string } }) => {
  const [secret, setSecret] = useState("")
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
      console.log(find.secret)
      setSecret(find.secret)
    }
  }, [])

  useEffect(() => {
    if (secret) {
      refetch()
    }
  }, [secret])

  const { isLoading, data, refetch } = useQuery(
    ["solved"],
    () =>
      axios
        .post(`http://130.61.191.69:3000//api/v1/exam/solved`, {
          secret: JSON.parse(localStorage.getItem("secret")!).find(
            (item: { id: string }) => item.id === params.id
          ).secret,
        })
        .then((res) => res.data),
    { refetchOnWindowFocus: false, enabled: false }
  )

  return (
    <>
      {isLoading ? (
        <div className="flex h-full  w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <Results data={data} />
      )}
    </>
  )
}

export default ResultPage
