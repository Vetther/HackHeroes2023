"use client";

import { Question } from "@/types";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ExamForm = ({
    name,
    answers,
    index,
}: {
    name: string;
    answers: {
        label: string;
    }[];
    index: number;
}) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { control, getValues } = useFormContext();

    useEffect(() => {
        setSelectedAnswer(
            getValues(`exam.${index}.selectedAnswerId`) !== ""
                ? getValues(`exam.${index}.selectedAnswerId`)
                : null
        );
    }, []);

    return (
        <div className="flex flex-col w-full gap-[22px]">
            <div className="px-[88px] py-[74px] bg-white rounded-lg ring-1 ring-gray-100">
                <p className="text-gray-700 text-xl font-dm-sans leading-7 text-center select-none">
                    {name}
                </p>
            </div>
            <FormField
                control={control}
                name={`exam.${index}.selectedAnswerId`}
                render={({ field }) => (
                    <FormItem className="grid grid-cols-2 gap-x-7 gap-y-[22px] space-y-0">
                        <FormControl>
                            <>
                                {answers.map((answer, index) => (
                                    <div
                                        className={cn(
                                            "flex justify-center items-center rounded-lg w-full px-11 py-7 bg-white ring-1 ring-gray-100 cursor-pointer select-none",
                                            selectedAnswer === answer.label &&
                                                "ring-2 ring-indigo-500 bg-indigo-50 transition-all duration-150"
                                        )}
                                        onClick={async () => {
                                            setSelectedAnswer(answer.label);
                                            field.onChange(answer.label);
                                        }}
                                        key={index}
                                    >
                                        <p className="text-gray-700 text-xl font-normal font-dm-sans leading-7 text-center">
                                            {answer.label}
                                        </p>
                                    </div>
                                ))}
                            </>
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    );
};

export default ExamForm;
