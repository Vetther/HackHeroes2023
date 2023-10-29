import { NavbarIcons } from "../icons/navbar"
import { Card, CardTagLine } from "../ui/card"

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
      <NavbarIcons.profile className="h-[120px] w-[120px] rounded-full border border-black px-2 pt-6" />
    </Card>
  )
}
