const TrustedBy = () => {
  const features = [
    {
      title: "Learn",
      description: "4 modules of Financial Knowledge -Budegting, Investing, Saving, Fraud Prevention; each including 5 chapters of various subjects.",
      icon: "📘",
    },
    {
      title: "Practice",
      description: "Practice with our hundreds of multiple-choice and scenario based questions covering every topic needed.",
      icon: "⤴️",
    },
  ];

  return (
    <section className="py-24 mt-10 bg-n-8">
      <div className="container-padding">
        <div className="flex flex-wrap justify-center items-start gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-color-4 text-n-1 rounded-lg mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-lg text-n-1 font-semibold mb-2">{feature.title}</h3>
              <p className="text-n-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
