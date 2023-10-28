import Calendar from "@/components/calendar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTagLine,
  CardTitle,
} from "@/components/ui/card"

const ExamPage = () => {
  return (
    <div className="flex h-full w-full items-start justify-start gap-8">
      <div className="flex h-full w-full max-w-[420px] flex-col items-start gap-8">
        <Card className="h-full w-full">
          <CardHeader>
            <CardTagLine>Egzamin Teoretyczny</CardTagLine>
            <CardTitle>
              EE.09 / INF.03 / E.14
              <br />
              (programowanie i bazy danych)
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <p className="text-sm font-medium leading-[21px] text-slate-500">
              Informacje:
            </p>
            <ul className="flex list-disc flex-col gap-2 text-[13px] font-medium leading-[18px] text-gray-700">
              <li className="ml-5">
                Po udzieleniu odpowiedzi nie można jej zmienić
              </li>
              <li className="ml-5">Na rozwiązanie testu masz 30 minut</li>
              <li className="ml-5">Kolejność pytań jest losowa</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Wykonaj Egzamin</Button>
          </CardFooter>
        </Card>
        <Card className="h-full w-full">
          <CardHeader>
            <CardTagLine>Egzamin Teoretyczny</CardTagLine>
            <CardTitle>
              EE.08 / INF.02
              <br />
              (sprzęt, systemy i sieci komputerowe)
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <p className="text-sm font-medium leading-[21px] text-slate-500">
              Informacje:
            </p>
            <ul className="flex list-disc flex-col gap-2 text-[13px] font-medium leading-[18px] text-gray-700">
              <li className="ml-5">
                Po udzieleniu odpowiedzi nie można jej zmienić
              </li>
              <li className="ml-5">Na rozwiązanie testu masz 30 minut</li>
              <li className="ml-5">Kolejność pytań jest losowa</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Wykonaj Egzamin</Button>
          </CardFooter>
        </Card>
      </div>
      <Calendar />
    </div>
  )
}

export default ExamPage
