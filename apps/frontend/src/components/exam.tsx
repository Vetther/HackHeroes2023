"use client";

import { useMultistepForm } from "@/hooks/use-multistep-form";
import ExamForm from "./exam-form";
import { ExamIcons } from "./icons/exam";
import { Button } from "./ui/button";

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
    } = useMultistepForm(
        exams.map((exam) => <ExamForm {...exam} key={exam.question} />)
    );

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex h-full w-full max-w-6xl flex-col justify-center gap-11">
                <div className="flex flex-col gap-[22px]">
                    <div className="flex justify-between">
                        <div className="flex w-full max-w-[240px] select-none flex-row items-center justify-between gap-[18px] rounded-lg bg-white px-[18px] py-[14px] font-dm-sans text-sm font-medium text-gray-700 ring-1 ring-gray-100">
                            <ExamIcons.left
                                onClick={() => back()}
                                className="cursor-pointer"
                            />
                            <p>
                                <b>Pytanie {currentStepIndex + 1}</b> z{" "}
                                <b>{steps.length}</b>
                            </p>
                            <ExamIcons.right
                                onClick={() => next()}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="flex w-full max-w-[300px] select-none flex-row items-center justify-center gap-[18px] rounded-lg bg-white px-[18px] py-[14px] font-dm-sans text-sm font-bold text-gray-700 ring-1 ring-gray-100">
                            <div>
                                <span className="font-['DM Sans'] text-sm font-medium text-stone-700">
                                    Pozostały czas:{" "}
                                </span>
                                <span className="font-['DM Sans'] text-sm font-bold text-stone-700">
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
