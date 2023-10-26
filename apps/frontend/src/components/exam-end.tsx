import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { examSchema } from "./exam-panel";
import { Button } from "./ui/button";

const ExamEnd = () => {
    const form = useFormContext<z.infer<typeof examSchema>>();

    function onSubmit(values: z.infer<typeof examSchema>) {
        console.log(values);
    }

    return (
        <div>
            koniec
            <Button
                type="button"
                size="lg"
                onClick={() => {
                    form.handleSubmit(onSubmit)();
                }}
            >
                Oddaj egzamin 😉
            </Button>
        </div>
    );
};

export default ExamEnd;
