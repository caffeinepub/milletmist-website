import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const CoreTeam = () => {
  const teamMembers = [
    {
      name: 'Barnali Chakraborty',
      role: 'Founder & CEO',
      image: '/assets/generated/barnali-founder.dim_400x400.png',
      description: 'Visionary leader with 10 years in sustainable agriculture and women empowerment initiatives.'
    },
    {
      name: 'Anjali Verma',
      role: 'Operations Lead',
      image: '/assets/generated/team-member-2.dim_400x400.png',
      description: 'Expert in supply chain management and ethical sourcing, ensuring quality at every step.'
    },
    {
      name: 'Meera Patel',
      role: 'Product Development Lead',
      image: '/assets/generated/team-member-3.dim_400x400.png',
      description: 'Nutritionist and food scientist passionate about creating healthy, delicious millet-based products.'
    },
    {
      name: 'Kavita Reddy',
      role: 'Farmer Relations Coordinator',
      image: '/assets/generated/team-member-4.dim_400x400.png',
      description: 'Dedicated to building strong partnerships with farming communities and ensuring fair practices.'
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Core Team</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            The passionate women leaders driving Milletmist's mission to revolutionize nutrition 
            and empower communities through sustainable agriculture.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all hover:shadow-warm group"
            >
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="mb-6 relative overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5d5c3" width="400" height="400"/%3E%3Ctext fill="%23a67c52" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ETeam Member%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  {/* Social Link Placeholder */}
                  <div className="flex justify-center">
                    <button 
                      className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Statement */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
            <p className="text-lg text-foreground/80 leading-relaxed italic">
              "Together, we're not just building a brand—we're creating a movement that celebrates 
              women's leadership, honors traditional wisdom, and builds a healthier, more sustainable future."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
