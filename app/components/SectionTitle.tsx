interface SectionTitleProps {
    title: string;
    description1?: string;
    description2?: string;
}

export default function SectionTitle({ title, description1, description2 }: SectionTitleProps) {
    return (
        <div className="section-title-container">
            <h1 className="section-title-h1">
                {title}
            </h1>
            <h3 className="section-title-h3">
                {description1}
            </h3>
            <h3 className="section-title-h3">
                {description2}
            </h3>
        </div>
    )
}