import Button from '../components/ui/Button'

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="bg-surface border-y border-border py-16 sm:py-24 px-4 sm:px-6 text-center"
        >
            <div className="max-w-lg mx-auto">
                <p className="text-amber text-xs font-display font-semibold
                      tracking-[3px] uppercase mb-3">
                    Get In Touch
                </p>
                <h2
                    className="font-display font-extrabold text-white tracking-tight mb-4"
                    style={{ fontSize: 'clamp(1.6rem, 5vw, 2.6rem)' }}
                >
                    List Your Event
                </h2>
                <p className="text-muted mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
                    Have an event to feature? Want to partner with Eventify?
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    Drop us a message — we reply within 24 hours.
                </p>
                <Button variant="outline" size="lg">
                    <a href="mailto:hello@eventify.pk">hello@eventify.pk</a>
                </Button>
            </div>
        </section>
    )
}

export default ContactSection
