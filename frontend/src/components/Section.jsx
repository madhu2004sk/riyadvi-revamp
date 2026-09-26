export default function Section({
 children,
 className = "",
}) {
  return (
    <section
       className={`mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28 ${className}`}
    >
     {children}
    </section>
  );
}