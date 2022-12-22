export default function Page({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <main>
            <div>
                ./app/article/[slug]/page.tsx - slug: {params.slug}
            </div>
        </main>
    )
}
