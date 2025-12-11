import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

// Revalidate every hour
export const revalidate = 3600;

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
            <p className="text-xl text-foreground/70 mb-12">
                Thoughts, tutorials, and insights.
            </p>

            <div className="space-y-10">
                {allPostsData.length > 0 ? (
                    allPostsData.map(({ id, date, title, description }) => (
                        <article key={id} className="flex flex-col group">
                            <Link href={`/blog/${id}`} className="block">
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {title}
                                </h2>
                            </Link>
                            <div className="text-sm text-foreground/50 mb-3">{date}</div>
                            <p className="text-foreground/80 leading-relaxed mb-4">
                                {description}
                            </p>
                            <Link href={`/blog/${id}`} className="text-primary font-medium hover:text-accent inline-flex items-center transition-colors">
                                Read more <span className="ml-1">&rarr;</span>
                            </Link>
                        </article>
                    ))
                ) : (
                    <p>No posts found.</p>
                )}
            </div>
        </div>
    );
}
