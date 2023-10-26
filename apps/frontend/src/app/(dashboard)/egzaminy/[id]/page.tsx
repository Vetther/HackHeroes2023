import ExamPanel, { ExamProvider } from "@/components/exam-panel";
import { Exam } from "@/types";

const ExamPage = ({ params }: { params: { id: string } }) => {
    const examData: Exam = [
        {
            name: "123Wskaż kwerendę, która z tabeli klienci wybierze jedynie nazwiska trzech najlepszych klientów, czyli takich, którzy na swoim koncie mają najwięcej punktów (pole całkowite punkty).",
            answers: [
                { label: "1SELECT nazwisko FROM klienci LIMIT 9;" },
                { label: "1SELECT nazwisko FROM klienci LIMIT 3;" },
                { label: "1SELECT nazwisko FROM klienci LIMIT 6;" },
                { label: "1SELECT nazwisko FROM klienci LIMIT 1;" },
            ],
        },
        {
            name: "312Wskaż kwerendę, która z tabeli klienci wybierze jedynie nazwiska trzech najlepszych klientów, czyli takich, którzy na swoim koncie mają najwięcej punktów (pole całkowite punkty).",
            answers: [
                { label: "2SELECT nazwisko FROM klienci LIMIT 9;" },
                { label: "2SELECT nazwisko FROM klienci LIMIT 3;" },
                { label: "2SELECT nazwisko FROM klienci LIMIT 6;" },
                { label: "2SELECT nazwisko FROM klienci LIMIT 1;" },
            ],
        },
        {
            name: "Jak stworzyć zmienną w języku Python i przypisać jej wartość 42?",
            answers: [
                { label: "my_variable = 42" },
                { label: "int my_variable = 42" },
                { label: "my_variable: int = 42" },
                { label: "my_variable = '42'" },
            ],
        },
        {
            name: "Co to jest pętla 'for' w programowaniu i jakie są jej podstawowe zastosowania?",
            answers: [
                {
                    label: "Pętla 'for' służy do iteracji po kolekcjach, takich jak listy lub krotki, i wykonuje określony blok kodu dla każdego elementu w kolekcji.",
                },
                {
                    label: "Pętla 'for' jest używana do tworzenia funkcji w języku Python.",
                },
                { label: "Pętla 'for' jest tylko dostępna w języku Java." },
                {
                    label: "Pętla 'for' służy do tworzenia warunków logicznych w języku C++.",
                },
            ],
        },
        {
            name: "Jakie są różnice między językiem Java a językiem JavaScript?",
            answers: [
                {
                    label: "Java jest językiem programowania o obiektowym charakterze, podczas gdy JavaScript jest językiem skryptowym.",
                },
                {
                    label: "Java jest używana tylko do tworzenia aplikacji webowych, a JavaScript jest używany tylko do tworzenia aplikacji mobilnych.",
                },
                {
                    label: "Java i JavaScript to tożsame języki programowania bez różnic.",
                },
                {
                    label: "JavaScript jest kompilowany, a Java jest interpretowana.",
                },
            ],
        },
        {
            name: "Co oznacza termin 'API' w kontekście programowania?",
            answers: [
                {
                    label: "API to skrót od 'Application Programming Interface' i jest to zestaw reguł i protokołów, które umożliwiają jednym programom komunikację z innymi programami.",
                },
                {
                    label: "API to język programowania używany do tworzenia aplikacji.",
                },
                { label: "API to narzędzie do debugowania kodu źródłowego." },
                { label: "API to rodzaj bazy danych." },
            ],
        },
    ];

    return (
        <ExamProvider exam={examData}>
            <ExamPanel exam={examData} />
        </ExamProvider>
    );
};

export default ExamPage;
