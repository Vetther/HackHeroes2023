"use client";

import ExamForm from "./exam-form";
import { useMultistepForm } from "@/hooks/use-multistep-form";
import { Button } from "./ui/button";
import { ExamIcons } from "./icons/exam";
import { Exam } from "@/types";
import { useFieldArray, useFormContext } from "react-hook-form";
import { z } from "zod";
import { examSchema, panelNextFunctionAtom } from "./exam-panel";
import { useAtom } from "jotai";

const ExamWizard = ({ exam }: { exam: Exam }) => {
    const [panelNextFunction] = useAtom(panelNextFunctionAtom);

    const { control, handleSubmit, trigger, getValues } =
        useFormContext<z.infer<typeof examSchema>>();

    const { fields } = useFieldArray({
        control,
        name: "exam",
    });

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
        fields.map((field, index) => (
            <ExamForm
                name={field.name}
                answers={exam.find(({ name }) => name === field.name)!.answers}
                index={index}
                key={index}
            />
        ))
    );

    function onSubmit(values: z.infer<typeof examSchema>) {
        console.log(values);
    }

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
                                Pytanie {currentStepIndex + 1} z {steps.length}{" "}
                            </p>
                            <ExamIcons.right
                                onClick={() => {
                                    if (currentStepIndex < lastMaxStepIndex)
                                        next();
                                }}
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
                    <form onSubmit={handleSubmit(onSubmit)}>{step}</form>
                </div>
                <div className="flex justify-center">
                    <Button
                        type="button"
                        onClick={async () => {
                            if (isLastStep) return panelNextFunction!();
                            if (
                                await trigger(
                                    `exam.${currentStepIndex}.selectedAnswerId`
                                )
                            ) {
                                next();
                            }
                        }}
                    >
                        {currentStepIndex + 1}/{steps.length} Nastepne pytanie
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ExamWizard;
