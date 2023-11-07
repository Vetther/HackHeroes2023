"use client"

import ExamPanel, { ExamProvider } from "@/components/exam-panel"
import { Exam } from "@/types"
import axios from "axios"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useQuery } from "react-query"

const examAtom = atomWithStorage<Exam | null>("exam", null)

const ExamPage = ({ params }: { params: { id: string } }) => {
  const [exam, setExam] = useAtom(examAtom)
  const router = useRouter()

  const { isLoading, isError, data, error, refetch } = useQuery(
    "exam",
    () =>
      axios
        .get(`http://130.61.191.69:3000/api/v1/exam/${params.id}`)
        .then((res) => res.data),
    { refetchOnWindowFocus: false, enabled: false }
  )

  useEffect(() => {
    if (localStorage.getItem("secret")) {
      const secret = JSON.parse(localStorage.getItem("secret")!).find(
        (item: { id: string }) => item.id === params.id
      )
      console.log(secret.result)
      if (secret) {
        return router.push(`/egzaminy/${params.id}/wynik`)
      }
    }
    if (localStorage.getItem("exam")) {
      console.log("localstorage")
    } else {
      console.log("refetch")
      refetch()
    }
  }, [])

  useEffect(() => {
    if (data) {
      setExam(data)
      localStorage.setItem(
        "secret",
        JSON.stringify([{ id: params.id, secret: data.secret }])
      )
    }
  }, [data])

  return isLoading ? (
    <div className="flex h-full  w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  ) : (
    <div>
      {exam && (
        <ExamProvider exam={exam}>
          <ExamPanel exam={exam} />
        </ExamProvider>
      )}
    </div>
  )
}

export default ExamPage
