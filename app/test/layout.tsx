import Test from './Test'

export default function TestLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <Test />
      <main>
        {children}
      </main>
    </section>
  );
}
