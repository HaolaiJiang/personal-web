
export const metadata = {
    title: "Contact | Lincoln's Blog",
    description: 'Get in touch with me.',
};

export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Get in Touch</h1>
            <p className="text-xl text-foreground/70 mb-12">
                You can always email me, but I don't always have time to respond.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-secondary/30 p-8 rounded-2xl border border-primary/10">
                    <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Email</div>
                            <a className="text-lg font-medium text-primary hover:text-accent transition-colors">
                                haolai [at] yandex.com
                            </a>
                        </div>
                        <div>
                            <div className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Socials</div>
                            <div className="flex space-x-4">
                                {/* <a href="#" className="text-foreground hover:text-primary transition-colors">Twitter/X</a> */}
                                <a href="https://github.com/haolaijiang" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">GitHub</a>
                                <a href="https://www.linkedin.com/in/lincoln-jiang/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary/30 p-8 rounded-2xl border border-primary/10">
                    <h2 className="text-2xl font-bold mb-4">Wisdom</h2>
                    <p className="text-foreground/80 mb-4 italic">
                        "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
                        <span className="block text-right mt-2 not-italic font-medium">– Proverbs 3:5-6</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
