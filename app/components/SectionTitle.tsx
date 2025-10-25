interface SectionTitleProps {
    title: string;
    description1?: string;
    description2?: string;
}

export default function SectionTitle({ title, description1, description2 }: SectionTitleProps) {
    return (
        <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold">
                {title}
            </h1>
            <h3 className="font-medium mt-3">
                {description1}
            </h3>
            <h3 className="font-medium mt-2">
                {description2}
            </h3>
        </div>
    )
}