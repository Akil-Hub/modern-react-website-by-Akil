import slack from '../assets/slack.png';
import amazon from '../assets/amazon.png';
import woocommerce from '../assets/woocommerce.png';
import meundies from '../assets/meundies.png';
import sitepoint from '../assets/sitepoint.png';

const BrandLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="w-full container mx-auto py-20 flex flex-col sm:flex-row sm:items-center items-start gap-8">
      {/* Left text section with blue border */}
      <div className="w-[250px] shrink-0 px-5 ml-6 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud partner at <br /> Hubspot & Segment
      </div>

      {/* Marquee container with overflow hidden */}
      <div className="flex-1 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center gap-12 pr-12">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="mx-10 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
