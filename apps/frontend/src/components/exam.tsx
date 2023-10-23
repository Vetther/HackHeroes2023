"use client";

import ExamForm from "./exam-form";
import { useMultistepForm } from "@/hooks/use-multistep-form";
import { Button } from "./ui/button";
import { ExamIcons } from "./icons/exam";

const exams = [
    {
        question:
            "Wskaż kwerendę, która z tabeli klienci wybierze jedynie nazwiska trzech najlepszych klientów, czyli takich, którzy na swoim koncie mają najwięcej punktów (pole całkowite punkty).",
        answers: [
            { label: "SELECT nazwisko FROM klienci LIMIT 9;" },
            { label: "SELECT nazwisko FROM klienci LIMIT 3;" },
            { label: "SELECT nazwisko FROM klienci LIMIT 6;" },
            { label: "SELECT nazwisko FROM klienci LIMIT 1;" },
        ],
    },
    {
        question:
            "Wskaż kwerendę, która z tabeli klienci wybierze jedynie nazwiska trzech najlepszych klientów, czyli takich, którzy na swoim koncie mają najwięcej punktów (pole całkowite punkty).",
        answers: [
            { label: "SELECT nazwisko FROM klienci LIMIT 9;" },
            { label: "SELECT nazwisko FROM klienci LIMIT 3;" },
            { label: "SELECT nazwisko FROM klienci LIMIT 6;" },
            { label: "SELECT nazwisko FROM klienci LIMIT 1;" },
        ],
    },
];

const Exam = () => {
    const {
        currentStepIndex,
        lastMaxStepIndex,
        step,
        steps,
        isFirstStep,
        isLastStep,
        goTo,
        next,
        back,
    } = useMultistepForm(exams.map((exam) => <ExamForm {...exam} />));

    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="flex flex-col justify-center gap-11 h-full w-full max-w-6xl">
                <div className="flex flex-col gap-[22px]">
                    <div className="flex justify-between">
                        <div className="max-w-[240px] w-full select-none flex flex-row items-center justify-between rounded-lg gap-[18px] bg-white py-[14px] px-[18px] text-gray-700 font-bold font-dm-sans text-base ring-1 ring-gray-100">
                            <ExamIcons.left
                                onClick={() => back()}
                                className="cursor-pointer"
                            />
                            <p>
                                Pytanie {currentStepIndex + 1} z {steps.length}
                            </p>
                            <ExamIcons.right
                                onClick={() => next()}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="max-w-[300px] w-full select-none flex flex-row items-center justify-center rounded-lg gap-[18px] bg-white py-[14px] px-[18px] text-gray-700 font-bold font-dm-sans text-base ring-1 ring-gray-100">
                            <div>
                                <span className="text-stone-700 text-[15px] font-medium font-['DM Sans']">
                                    Pozostały czas:{" "}
                                </span>
                                <span className="text-stone-700 text-[15px] font-bold font-['DM Sans']">
                                    59 minut 30 sekund
                                </span>
                            </div>
                        </div>
                    </div>
                    {step}
                </div>
                <div className="flex justify-center">
                    <Button
                        onClick={() => {
                            console.log("123");
                            next();
                        }}
                    >
                        {currentStepIndex + 1}/{steps.length} Nastepne pytanie
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Exam;
