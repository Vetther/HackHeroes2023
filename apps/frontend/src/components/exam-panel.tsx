"use client";

import { useMultistepForm } from "@/hooks/use-multistep-form";
import { Exam } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ExamWizard from "./exam-wizard";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { Form } from "./ui/form";
import ExamStart from "./exam-start";
import ExamEnd from "./exam-end";

export const examSchema = z.object({
    personalInformation: z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
    }),
    exam: z.array(
        z.object({
            examId: z.string(),
            name: z.string(), // w przyszlosic wyrzucic i dzialac jedynie na id
            selectedAnswerId: z.string().min(1), // jak narazie dzialac na labelu, gdy bedzie backend to uzywac id
        })
    ),
});

export const panelNextFunctionAtom = atom<(() => void) | null>(null);
export const panelBackFunctionAtom = atom<(() => void) | null>(null);

const ExamPanel = ({ exam }: { exam: Exam }) => {
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
    } = useMultistepForm([
        <ExamStart />, // w przyszlosci zrovic warunek sprawdzajacacy localstorage czy juz wypelniono dane osobowe
        <ExamWizard exam={exam} />,
        <ExamEnd />,
    ]);

    const [panelNextFunction, setPanelNextFunction] = useAtom(
        panelNextFunctionAtom
    );
    const [panelBackFunction, setPanelBackFunction] = useAtom(
        panelBackFunctionAtom
    );

    useEffect(() => {
        setPanelNextFunction(() => next);
        setPanelBackFunction(() => back);
    }, []);

    return <>{step}</>;
};

export const ExamProvider = ({
    children,
    exam,
}: {
    children: React.ReactNode;
    exam: Exam;
}) => {
    const form = useForm<z.infer<typeof examSchema>>({
        resolver: zodResolver(examSchema),
        defaultValues: {
            personalInformation: {
                firstName: "",
                lastName: "",
            },
            exam: exam.map((exam) => ({
                examId: exam.name,
                name: exam.name,
                selectedAnswerId: "",
            })),
        },
    });

    return <Form {...form}>{children}</Form>;
};

export default ExamPanel;
