import { Users, Award, Target, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: 'Women Empowerment',
      description: 'Founded and led entirely by women, we believe in the power of female leadership to create positive change.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Premium millet-based products crafted with care, ensuring the highest nutritional value and taste.'
    },
    {
      icon: Target,
      title: 'Social Impact',
      description: 'Supporting ultra-poor farmers and building sustainable communities through ethical sourcing.'
    },
    {
      icon: Sparkles,
      title: 'Natural Goodness',
      description: 'Pure, wholesome ingredients from nature, free from artificial additives and preservatives.'
    }
  ];

  return (
    <div className="py-20 md:py-32 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Raavni Agrobyte</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Raavni Agrobyte (OPC) Pvt. Ltd. is a pioneering women-led organization dedicated to 
            revolutionizing nutrition through the ancient wisdom of millets. Our brand, Milletmist, 
            represents our commitment to health, sustainability, and community empowerment.
          </p>
        </div>

        {/* Image and Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              Powered by Women, For Everyone
            </h3>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              At the heart of Raavni Agrobyte is an all-women core team of passionate entrepreneurs, 
              nutritionists, and social change-makers. We believe that when women lead, communities thrive.
            </p>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Our journey began with a simple vision: to bring the incredible health benefits of millets 
              to modern consumers while creating sustainable livelihoods for the farmers who grow them.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Every Milletmist product is a testament to our commitment to quality, sustainability, and 
              the empowerment of women and farming communities across India.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-warm">
              <img
                src="/assets/generated/women-farmers.dim_1200x800.png"
                alt="Women farmers and team members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-warm">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
