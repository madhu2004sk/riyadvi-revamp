export default function Heading({
    eyebrow,
    title,
    description,
    center = false,
}) {
    return (
        <div
            className={`mb-12 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
                }`}
        >
            {eyebrow && (
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em]
text-[#d4af37]">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}