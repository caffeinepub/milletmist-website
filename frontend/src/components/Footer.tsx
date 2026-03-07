import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const getAppIdentifier = () => {
    if (typeof window !== 'undefined') {
      return encodeURIComponent(window.location.hostname);
    }
    return 'milletmist-app';
  };

  return (
    <footer className="bg-muted/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/RaavniLogoWB.png"
              alt="Raavni Agrobyte Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <p className="font-serif text-lg font-bold text-foreground">Raavni Agrobyte</p>
              <p className="text-xs text-foreground/60">by Raavni Agrobyte (OPC) Pvt. Ltd.</p>
            </div>
          </div>

          {/* Copyright & Attribution */}
          <div className="text-center md:text-right">
            <p className="text-sm text-foreground/70 mb-1">
              © {currentYear} Raavni Agrobyte (OPC) Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60 flex items-center justify-center md:justify-end gap-1">
              Built with{' '}
              <Heart className="h-3.5 w-3.5 text-primary fill-primary inline" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
