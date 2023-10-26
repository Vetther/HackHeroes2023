import { useFormContext } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { panelNextFunctionAtom } from "./exam-panel";
import { useAtom } from "jotai";

const ExamStart = () => {
    const [panelNextFunction] = useAtom(panelNextFunctionAtom);

    const form = useFormContext();

    return (
        <div className="flex flex-col gap-2">
            <h1>(TA SEKCJA JESZCZE NIE JEST WYSTYLIZOWANA)</h1>
            <FormField
                control={form.control}
                name="personalInformation.firstName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Imię</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="personalInformation.lastName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Imię</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <Button
                size="lg"
                onClick={async () => {
                    if (await form.trigger("personalInformation")) {
                        panelNextFunction!();
                    }
                }}
            >
                Przejdź do egzaminu
            </Button>
        </div>
    );
};
export default ExamStart;
