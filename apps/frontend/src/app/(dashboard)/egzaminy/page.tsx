import { EgzaminySections } from "@/components/sections/egzaminy";

const ExamPage = () => {
    return (
        <div className="flex h-full w-full items-start justify-start gap-8">
            <EgzaminySections.ExamsBlock />
            <EgzaminySections.CalendarBlock />
        </div>
    );
};

export default ExamPage;
