import { EgzaminySections } from "@/components/sections/egzaminy";

const ExamPage = ({ params }: { params: { id: string } }) => {
    return (
        <div className="inline-flex h-full items-start justify-start gap-8">
            <EgzaminySections.ExamsBlock />
            <EgzaminySections.CalendarBlock />
        </div>
    );
};

export default ExamPage;
