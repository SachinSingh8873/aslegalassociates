export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <img
              src="/professional-office-desk-legal-documents.jpg"
              alt="Legal practice"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Professional Profile</h3>
              <p className="text-foreground/80">
                As a 2024 Law Graduate and Legal Associate, I bring fresh perspectives combined with rigorous legal training to provide comprehensive legal solutions. My practice focuses on delivering client-centric services with meticulous attention to detail.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Specializations</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl font-bold">•</span>
                  <div>
                    <h4 className="font-semibold text-primary">Corporate Law</h4>
                    <p className="text-sm text-foreground/70">Business structuring, contracts, and compliance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl font-bold">•</span>
                  <div>
                    <h4 className="font-semibold text-primary">Civil Litigation</h4>
                    <p className="text-sm text-foreground/70">Civil disputes and legal representation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl font-bold">•</span>
                  <div>
                    <h4 className="font-semibold text-primary">Family Law</h4>
                    <p className="text-sm text-foreground/70">Marriage, divorce, and family matters</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Key Attributes</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">Detail-oriented</span>
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">Client-focused</span>
                <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">Results-driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
