const ExamForm = ({
    question,
    answers,
}: {
    question: string;
    answers: { label: string }[];
}) => {
    return (
        <div className="flex flex-col w-full gap-[22px]">
            <div className="px-[88px] py-[74px] bg-white rounded-lg ring-1 ring-gray-100">
                <p className="text-gray-700 text-xl font-dm-sans leading-7 text-center">
                    {question}
                </p>
            </div>
            <div className="grid grid-cols-2 gap-x-7 gap-y-[22px]">
                {answers.map((answer) => (
                    <div className="flex justify-center items-center rounded-lg w-full px-11 py-7 bg-white ring-1 ring-gray-100">
                        <p className="text-gray-700 text-xl font-normal font-dm-sans leading-7">
                            {answer.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExamForm;
