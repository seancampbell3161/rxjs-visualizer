interface OperatorDescriptionProps {
    name: string;
    tagline: string;
    description: string;
}

export default function OperatorDescription({ name, tagline, description }: OperatorDescriptionProps) {
    return (
        <div className="operator-description">
            <h2 className="operator-description-name">{name}</h2>
            <p className="operator-description-tagline">{tagline}</p>
            <p className="operator-description-body">{description}</p>
        </div>
    );
}
