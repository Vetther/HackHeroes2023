import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardTagLine } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

export default function Profile() {
  return (
    <Card className="flex-row items-center justify-between gap-2.5">
      <div className="inline-flex flex-col gap-2.5">
        <CardTagLine>Dane Rozwiązującego</CardTagLine>
        <ul>
          <li className="text-sm leading-relaxed">
            <span className="font-medium text-gray-700">Imię: </span>
            <span className="font-bold text-gray-700">User</span>
          </li>
          <li className="text-sm leading-relaxed">
            <span className="font-medium text-gray-700">Nazwisko: </span>
            <span className="font-bold text-gray-700">Anonymous</span>
          </li>
          <li className="text-sm leading-relaxed">
            <span className="font-medium text-gray-700">Adres email: </span>
            <span className="font-bold text-gray-700">email@email.email</span>
          </li>
          <li className="text-sm leading-relaxed">
            <span className="font-medium text-gray-700">Szkoła: </span>
            <span className="font-bold text-gray-700">Szkoła</span>
          </li>
          <li className="text-sm leading-relaxed">
            <span className="font-medium text-gray-700">Indentyfikator: </span>
            <span className="font-bold text-gray-700">1234567890</span>
          </li>
        </ul>
      </div>
      {/* <Avatar className="h-32 w-32 bg-transparent bg-white ring-2 ring-primary ring-offset-4"> */}
      <Avatar className="h-32 w-32 bg-transparent bg-white ring-2 ring-primary ring-offset-4">
        <AvatarImage src={`https://placehold.it/128`} />
        <AvatarFallback className="bg-transparent">
          <Skeleton className="h-32 w-32 rounded-full" />
        </AvatarFallback>
      </Avatar>
    </Card>
  )
}
