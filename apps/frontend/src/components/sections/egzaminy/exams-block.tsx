import { Button } from "@/components/ui/button";

export const ExamsBlock = () => {
    return (
        <div className="inline-flex h-full flex-col items-start gap-8">
            <div className="card flex w-[420px] flex-col items-start justify-start gap-8 p-11">
                <div className="flex flex-col items-start justify-start gap-1">
                    <div className="text-sm font-medium leading-[21px] text-slate-500">
                        Egzamin Teoretyczny
                    </div>
                    <div className="text-xl font-bold leading-7 text-gray-700">
                        EE.09 / INF.03 / E.14
                        <br />
                        (programowanie i bazy danych)
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[9px] self-stretch">
                    <p className="self-stretch text-sm font-medium leading-[21px] text-slate-500">
                        Informacje:
                    </p>
                    <div className="text-[13px] font-medium leading-[18px] text-gray-700">
                        <li className="pb-2">
                            Po udzieleniu odpowiedzi nie można jej zmienić
                        </li>
                        <li className="pb-2">
                            Na rozwiązanie testu masz 30 minut
                        </li>
                        <li>Kolejność pytań jest losowa</li>
                    </div>
                </div>
                <Button className="w-full">Wykonaj Egzamin</Button>
            </div>
            <div className="card flex w-[420px] flex-col items-start justify-start gap-8 p-11">
                <div className="flex flex-col items-start justify-start gap-1">
                    <div className="text-sm font-medium leading-[21px] text-slate-500">
                        Egzamin Teoretyczny
                    </div>
                    <div className="text-xl font-bold leading-7 text-gray-700">
                        EE.08 / INF.02
                        <br />
                        (sprzęt, systemy i sieci komputerowe)
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[9px] self-stretch">
                    <p className="self-stretch text-sm font-medium leading-[21px] text-slate-500">
                        Informacje:
                    </p>
                    <div className="text-[13px] font-medium leading-[18px] text-gray-700">
                        <li className="pb-2">
                            Po udzieleniu odpowiedzi nie można jej zmienić
                        </li>
                        <li className="pb-2">
                            Na rozwiązanie testu masz 30 minut
                        </li>
                        <li>Kolejność pytań jest losowa</li>
                    </div>
                </div>
                <Button className="w-full">Wykonaj Egzamin</Button>
            </div>
        </div>
    );
};
