import { Heart, Sprout, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FarmerSupport = () => {
  const impacts = [
    {
      icon: Users,
      title: 'Direct Partnership',
      description: 'We work directly with ultra-poor farmers, eliminating middlemen and ensuring fair prices for their hard work.'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Income',
      description: 'Long-term contracts provide farmers with stable, predictable income, helping them plan for the future.'
    },
    {
      icon: Sprout,
      title: 'Training & Support',
      description: 'We provide agricultural training, quality seeds, and ongoing support to improve yields and sustainability.'
    },
    {
      icon: Heart,
      title: 'Community Building',
      description: 'Creating strong farming communities where knowledge, resources, and success are shared collectively.'
    }
  ];

  return (
    <div className="py-20 md:py-32 gradient-sage">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Supporting <span className="text-secondary">Millet Farmers</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            At the heart of Milletmist is our commitment to the farmers who grow these incredible grains. 
            We believe that sustainable business means uplifting the communities that make our products possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-sage">
              <img
                src="/assets/generated/farmer-hands-millet.dim_1000x667.png"
                alt="Farmer hands holding millet grains"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              Empowering Ultra-Poor Farmers
            </h3>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Many millet farmers in India belong to economically disadvantaged communities. Despite growing 
              one of the world's most nutritious crops, they often struggle with poverty due to unfair market practices.
            </p>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Milletmist is changing this narrative. We partner directly with ultra-poor farmers, offering them 
              fair prices, advance payments, and the dignity they deserve. Every product you purchase directly 
              supports these farming families.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Together, we're not just building a business—we're building a movement for social justice, 
              environmental sustainability, and economic empowerment.
            </p>
          </div>
        </div>

        {/* Impact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <Card key={index} className="border-2 hover:border-secondary/50 transition-all hover:shadow-sage">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <impact.icon className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                  {impact.title}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-background/50 border-2 border-secondary/20">
            <p className="text-xl font-medium text-foreground mb-2">
              Every purchase makes a difference
            </p>
            <p className="text-foreground/70">
              When you choose Milletmist, you're choosing to support sustainable farming and empower communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerSupport;
