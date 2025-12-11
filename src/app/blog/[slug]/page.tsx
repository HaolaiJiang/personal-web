import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

// Generate params for static export if needed, or just caching
export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);
    return {
        title: `${postData.title} | `,
        description: postData.description,
    };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/blog" className="text-primary hover:text-accent mb-8 inline-flex items-center transition-colors">
                &larr; Back to blog
            </Link>
            <article className="prose prose-lg dark:prose-invert prose-primary max-w-none">
                <h1 className="mb-2">{postData.title}</h1>
                <div className="text-foreground/50 mb-8">{postData.date}</div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
            </article>
        </div>
    );
}
