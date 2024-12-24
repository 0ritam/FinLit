const TrustedBy = () => {
  const companies = [
    { name: "Stripe", className: "w-24" },
    { name: "HubSpot", className: "w-28" },
    { name: "Intercom", className: "w-28" },
    { name: "Asana", className: "w-24" }
  ];

  return (
    <section className="py-24 bg-neutral-200/50">
      <div className="container-padding">
        <p className="text-center text-neutral-600 mb-12">Trusted by popular startups you know</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company) => (
            <div key={company.name} className={`${company.className} h-8 bg-neutral-400/20 rounded-lg`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;