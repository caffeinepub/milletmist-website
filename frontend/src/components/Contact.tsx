import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['#A1402, Chandansar,', 'Virar - 401305, Maharashtra'],
      link: null
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['connect@raavni.com', 'barnali@raavni.com'],
      link: 'mailto:connect@raavni.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 96796 50183'],
      link: 'tel:+919679650183'
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Have questions about our products or want to learn more about our farmer support initiatives? 
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-warm">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  info.link && idx === 0 ? (
                    <a
                      key={idx}
                      href={info.link}
                      className="block text-foreground/70 text-sm hover:text-primary transition-colors"
                    >
                      {detail}
                    </a>
                  ) : info.link && idx === 1 && info.icon === Mail ? (
                    <a
                      key={idx}
                      href={`mailto:${detail}`}
                      className="block text-foreground/70 text-sm hover:text-primary transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="text-foreground/70 text-sm">
                      {detail}
                    </p>
                  )
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl gradient-warm border-2 border-primary/20 max-w-2xl">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Join Our Journey
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Whether you're a health-conscious consumer, a potential partner, or someone who shares our 
              vision for sustainable agriculture and women empowerment, we welcome you to be part of the 
              Milletmist family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
