import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import service1 from "@/assets/service-3.png";
import service2 from "@/assets/service-2.png";

const Features = () => {
  const features = [
    {
      title: "Financial Planning",
      description: "Master your finances with our comprehensive financial planning tools and resources.",
      points: ["Budget Tracking", "Expense Management", "Goal Setting"],
      image: service1,
    },
    {
      title: "Investment Insights",
      description: "Gain valuable insights into investment opportunities and strategies to grow your wealth.",
      points: ["Market Analysis", "Portfolio Management", "Risk Assessment"],
      image: service2,
    },
  ];

  return (
    <section className="py-24">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-color-3 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            TWO-COL FEATURES
          </span>
          <h2 className="heading-lg mt-6">Supercharge Your Knowledge</h2>
          <p className="text-n-1 mt-4 max-w-2xl mx-auto">
            Unlock your team's true potential with our state-of-the-art Education platform.
          </p>
        </div>

        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-n-1">{feature.title}</h3>
              <p className="text-n-1 mb-6">{feature.description}</p>
              <ul className="space-y-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-n-1">
                    <div className="w-5 h-5 rounded-full bg-color-4 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-purple" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <button className="button-primary">Start 14-day trial</button>
                <button className="px-6 py-3 text-color-6 hover:text-primary transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Card className="glass-panel p-6 rounded-2xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto rounded-lg"
                />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
