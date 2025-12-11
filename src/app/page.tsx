import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-20 pt-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-foreground">
          Building the <span className="text-primary">future</span>, <br />
          one line at a time.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-10 leading-relaxed">
          I'm a developer passionate about modern web technologies.
          Here I share my thoughts, learnings, and experiments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/blog" className="inline-flex justify-center items-center bg-primary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
            Read My Blog
          </Link>
          <Link href="/contact" className="inline-flex justify-center items-center border border-primary/30 text-primary px-8 py-3 rounded-full font-medium text-lg hover:bg-primary/10 transition-all hover:scale-105">
            Get in Touch
          </Link>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-3xl font-bold text-foreground">Recent Posts</h2>
          <Link href="/blog" className="text-accent hover:text-accent/80 font-medium transition-colors">
            View all &rarr;
          </Link>
        </div>

        <div className="space-y-8">
          {/* Placeholder for blog posts - will be replaced with real data later */}
          {[1, 2, 3].map((i) => (
            <article key={i} className="bg-secondary/40 rounded-none border-b border-primary/20 pb-8 hover:bg-secondary/60 transition-colors group">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-3">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  Coming Soon: Blog Post Title
                </h3>
                <span className="text-sm text-foreground/40 font-mono">Dec 10, 2025</span>
              </div>
              <p className="text-foreground/70 mb-4 text-lg">
                This is a placeholder for a blog post description. Soon you will see real content here fetched from Markdown files. It will take up the full width of the container.
              </p>
              <Link href="/blog" className="text-primary hover:text-accent font-medium inline-flex items-center">
                Read full article <span className="ml-2">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
