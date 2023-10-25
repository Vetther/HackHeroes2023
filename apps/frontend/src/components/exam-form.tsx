const ExamForm = ({
    question,
    answers,
}: {
    question: string;
    answers: { label: string }[];
}) => {
    return (
        <div className="flex w-full flex-col gap-[22px]">
            <div className="rounded-lg bg-white px-[88px] py-[74px] ring-1 ring-gray-100">
                <p className="text-center font-dm-sans text-lg leading-7 text-gray-700">
                    {question}
                </p>
            </div>
            <div className="grid grid-cols-2 gap-x-7 gap-y-[22px]">
                {answers.map((answer) => (
                    <div
                        className="flex w-full items-center justify-center rounded-lg bg-white px-11 py-5 text-base font-medium ring-1 ring-gray-100"
                        key={question}
                    >
                        <p className="font-dm-sans text-base font-medium leading-7 text-gray-700">
                            {answer.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExamForm;
