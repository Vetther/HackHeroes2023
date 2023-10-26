type IconProps = React.HTMLAttributes<SVGElement>;

export const ExamIcons = {
    left: (props: IconProps) => (
        <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M14 15L9 10.5L14 6" stroke="#2D3748" strokeWidth="1.5" />
        </svg>
    ),
    right: (props: IconProps) => (
        <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M9 15L14 10.5L9 6" stroke="#2D3748" strokeWidth="1.5" />
        </svg>
    ),
};
