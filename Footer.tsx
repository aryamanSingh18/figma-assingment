const footerColumns = [
  {
    title: "Company",
    links: ["Home", "Studio", "Services", "Blog"],
  },
  {
    title: "Terms & Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Fashion", "Accessibility"],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-sm font-bold text-black mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-black/60 hover:text-black transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div>
            <h4
              className="text-sm font-bold text-black mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Terms & Policies
            </h4>
            <address
              className="not-italic text-sm text-black/60 space-y-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p>1499a Fulton Ave, STE 20</p>
              <p>Chicago, IL 63607</p>
              <p className="mt-3">023-44578900</p>
              <p>
                <a href="mailto:info@elementum.com" className="hover:text-black transition-colors">
                  info@elementum.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/10 text-center">
          <p
            className="text-sm text-black/40"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2022 Elementum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
