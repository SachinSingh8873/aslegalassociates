import { Linkedin, Twitter, Facebook, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Advocate Avinash Singh</h3>
            <p className="text-white/80">Professional legal services and consultation</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-accent transition">About</a></li>
              <li><a href="#services" className="hover:text-accent transition">Services</a></li>
              <li><a href="#statistics" className="hover:text-accent transition">Statistics</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition">Corporate Law</a></li>
              <li><a href="#" className="hover:text-accent transition">Civil Litigation</a></li>
              <li><a href="#" className="hover:text-accent transition">Family Law</a></li>
              <li><a href="#" className="hover:text-accent transition">Document Review</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-accent transition"><Twitter size={24} /></a>
              <a href="https://www.facebook.com/profile.php?id=100009485733390" className="hover:text-accent transition"><Facebook size={24} /></a>
              <a href="#" className="hover:text-accent transition"><Github size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2025 Advocate Avinash Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
