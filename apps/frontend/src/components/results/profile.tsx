import { NavbarIcons } from "../icons/navbar"
import Section from "./section"

export default function Profile() {
  return (
    <Section className="justify-between gap-2.5">
      <div className="inline-flex flex-col gap-2.5">
        <span className="text-sm leading-[21px] text-slate-500">
          Dane Rozwiązującego
        </span>
        <ul>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">Imię: </span>
            <span className="font-semibold leading-tight text-gray-700">
              User
            </span>
          </li>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">
              Nazwisko:{" "}
            </span>
            <span className="font-semibold leading-tight text-gray-700">
              Anonymous
            </span>
          </li>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">
              Adres email:{" "}
            </span>
            <span className="font-semibold leading-tight text-gray-700">
              email@email.email
            </span>
          </li>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">
              Szkoła:{" "}
            </span>
            <span className="font-semibold leading-tight text-gray-700">
              Szkoła
            </span>
          </li>
          <li className="self-stretch">
            <span className="text-sm leading-tight text-gray-700">
              Indentyfikator:{" "}
            </span>
            <span className="font-semibold leading-tight text-gray-700">
              1234567890
            </span>
          </li>
        </ul>
      </div>
      <div className="grid place-items-center">
        <NavbarIcons.profile className="h-[120px] w-[120px] rounded-full border border-black px-2 pt-6" />
      </div>
    </Section>
  )
}
