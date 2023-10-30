import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardTagLine } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

export default function Profile({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card
      className={cn(
        "flex-row flex-wrap-reverse items-center justify-center gap-2.5 md:flex-nowrap",
        className
      )}
    >
      <div className="inline-flex flex-1 flex-col gap-2.5">
        <CardTagLine>Dane Rozwiązującego</CardTagLine>
        <ul className="whitespace-nowrap">
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
      <div className="flex aspect-square  items-center justify-center self-center p-4 sm:p-0">
        <Avatar className="h-full w-full bg-transparent bg-white ring-2 ring-primary ring-offset-4 sm:h-32 sm:w-32">
          <AvatarImage src={`https://placehold.it/128`} />
          <AvatarFallback className="bg-transparent">
            <Skeleton className="h-32 w-32 rounded-full" />
          </AvatarFallback>
        </Avatar>
      </div>
    </Card>
  )
}
