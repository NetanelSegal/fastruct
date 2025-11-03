import { IFeaturesGrid, IFeatureItem } from '@/types/about';

const FeatureCard = ({ title, text }: IFeatureItem) => {
  return (
    <div className="bg-light p-8 rounded-lg">
      <h3 className="text-h4 font-bebas text-dark">{title}</h3>
      <p className="text-body text-dark opacity-70 mt-2">{text}</p>
    </div>
  );
};

const FeaturesGridSection = ({ items }: IFeaturesGrid) => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;
