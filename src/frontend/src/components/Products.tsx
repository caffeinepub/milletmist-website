import { Zap, Dumbbell, Leaf, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const products = [
    {
      name: 'Milletmist Protein Bar',
      image: '/assets/generated/protein-bar-product.dim_800x800.png',
      description: 'Packed with plant-based protein from millets, nuts, and seeds. Perfect for post-workout recovery or a nutritious snack on the go.',
      benefits: ['15g Protein', 'High Fiber', 'No Added Sugar', 'Gluten-Free'],
      icon: Dumbbell,
      color: 'primary'
    },
    {
      name: 'Milletmist Energy Boost',
      image: '/assets/generated/energy-product.dim_800x800.png',
      description: 'Natural energy from ancient grains. Sustained release carbohydrates keep you energized throughout the day without the crash.',
      benefits: ['Natural Energy', 'Rich in Iron', 'Antioxidants', 'Low GI'],
      icon: Zap,
      color: 'accent'
    }
  ];

  const milletBenefits = [
    'Rich in essential minerals like iron, calcium, and magnesium',
    'High in dietary fiber for digestive health',
    'Low glycemic index for stable blood sugar',
    'Naturally gluten-free and easy to digest',
    'Packed with antioxidants and B vitamins',
    'Sustainable crop requiring minimal water'
  ];

  return (
    <div className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Discover the power of millets with our carefully crafted range of protein bars and energy products. 
            Each product is designed to fuel your active lifestyle while supporting sustainable agriculture.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-warm">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="font-serif text-2xl">
                    {product.name}
                  </CardTitle>
                  <div className={`h-10 w-10 rounded-lg bg-${product.color}/10 flex items-center justify-center`}>
                    <product.icon className={`h-5 w-5 text-${product.color}`} />
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {product.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Millet Benefits Section */}
        <div className="gradient-sage rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="h-16 w-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h3 className="font-serif text-3xl font-bold text-center text-foreground mb-4">
              Why Millets?
            </h3>
            <p className="text-center text-foreground/70 mb-8 max-w-2xl mx-auto">
              Millets are ancient supergrains that have nourished civilizations for thousands of years. 
              Rediscover their incredible health benefits.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {milletBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
