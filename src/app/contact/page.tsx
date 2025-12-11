
export const metadata = {
    title: 'Contact | MyWebsite',
    description: 'Get in touch with me.',
};

export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Get in Touch</h1>
            <p className="text-xl text-foreground/70 mb-12">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-secondary/30 p-8 rounded-2xl border border-primary/10">
                    <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Email</div>
                            <a href="mailto:hello@example.com" className="text-lg font-medium text-primary hover:text-accent transition-colors">
                                hello@example.com
                            </a>
                        </div>
                        <div>
                            <div className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Socials</div>
                            <div className="flex space-x-4">
                                <a href="#" className="text-foreground hover:text-primary transition-colors">Twitter/X</a>
                                <a href="#" className="text-foreground hover:text-primary transition-colors">GitHub</a>
                                <a href="#" className="text-foreground hover:text-primary transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary/30 p-8 rounded-2xl border border-primary/10">
                    <h2 className="text-2xl font-bold mb-4">Availability</h2>
                    <p className="text-foreground/80 mb-4">
                        I am currently available for freelance work and open to new opportunities.
                    </p>
                    <div className="inline-block bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-medium border border-green-500/20">
                        Open to work
                    </div>
                </div>
            </div>
        </div>
    );
}
