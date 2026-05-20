export const ordinaryAsset = (path) => `https://theordinary.com${path}`;

export const products = [
  {
    tag: 'Bestseller',
    name: 'Niacinamide 10% + Zinc 1%',
    rating: '4.4 (2749)',
    benefit: 'Oil Control, Brightens, Smooths',
    price: '$6.60 CAD',
    sizes: ['30ml', '60ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwce8a7cdf/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-30ml.png?sw=640&sh=640&sm=fit',
    badge: ordinaryAsset('/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw75da8b67/awards/sheerluxe-2023.png'),
    badgeClass: 'left-3 bottom-3 h-[78px] w-[78px]',
  },
  {
    tag: 'Bestseller',
    name: 'Hyaluronic Acid 2% + B5 (with Ceramides)',
    rating: '4.4 (1862)',
    benefit: 'Plumps, Smooths',
    price: '$12.00 CAD',
    sizes: ['30ml', '60ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw67286abd/Images/products/The%20Ordinary/ord-hyaluronic-acid-2pct-B5-30ml-Clr-Acu.png?sw=640&sh=640&sm=fit',
    badge: ordinaryAsset('/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwd0f510dc/awards/ORD-team-favs.png'),
    badgeClass: 'left-3 bottom-3 h-[88px] w-[88px]',
  },
  {
    tag: 'Bestseller',
    name: 'Natural Moisturizing Factors + HA',
    rating: '4.3 (1797)',
    benefit: 'Supports Skin Barrier',
    price: '$8.70 CAD',
    sizes: ['30ml', '100ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw51f90af8/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png?sw=640&sh=640&sm=fit',
    badge: ordinaryAsset('/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwf8fc4a19/awards/test-eczema-seal.png'),
    badgeClass: 'left-6 bottom-4 h-[74px] w-[74px]',
  },
  {
    tag: 'Bestseller',
    name: 'Glycolic Acid 7% Exfoliating Toner',
    rating: '4.6 (1221)',
    benefit: 'Evens Texture & Tone, Radiance',
    price: '$10.60 CAD',
    sizes: ['100ml', '240ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw8b57fa2b/Images/products/The%20Ordinary/ord-glyc-acid-7pct-100ml-Aug-UPC.png?sw=640&sh=640&sm=fit',
    badge: ordinaryAsset('/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwa1061449/awards/womens-award-160.png'),
    badgeClass: 'left-4 bottom-5 h-[82px] w-[82px]',
  },
];

export const concerns = [
  {
    name: 'Aging',
    image: 'https://cdn.media.amplience.net/i/deciem/signs-of-aging-concern_1?fmt=auto&$poi$&sm=aspect&w=500&aspect=1:1',
  },
  {
    name: 'Congestion',
    image: 'https://cdn.media.amplience.net/i/deciem/congestion-concerns?fmt=auto&$poi$&sm=aspect&w=500&aspect=1:1',
  },
  {
    name: 'Texture',
    image: 'https://cdn.media.amplience.net/i/deciem/Texture?fmt=auto&$poi$&sm=aspect&w=500&aspect=1:1',
  },
  {
    name: 'Eye Care',
    image: 'https://cdn.media.amplience.net/i/deciem/Dark%20Circles?fmt=auto&$poi$&sm=aspect&w=500&aspect=1:1',
  },
  {
    name: 'Redness',
    image: 'https://cdn.media.amplience.net/i/deciem/Redness-Concern1?fmt=auto&$poi$&sm=aspect&w=500&aspect=1:1',
  },
  {
    name: 'Dryness',
    image: 'https://cdn.media.amplience.net/i/deciem/Dryness-Concern?fmt=auto&$poi$&sm=aspect&w=500&aspect=1:1',
  },
];

export const memberBenefits = [
  {
    text: 'Save your favourite formulations to revisit later.',
    image: 'https://cdn.media.amplience.net/i/deciem/Web-Account-Incentives-Homepage-Module-Save-Your-Faves?fmt=auto&$poi$&sm=aspect&w=400&aspect=1:1',
  },
  {
    text: 'Book in-store consultations with our formulation experts.',
    image: 'https://cdn.media.amplience.net/i/deciem/Web-Account-Incentives-Homepage-Module-In-Store-Consultations?fmt=auto&$poi$&sm=aspect&w=400&aspect=1:1',
  },
  {
    text: 'Save your details for faster checkout.',
    image: 'https://cdn.media.amplience.net/i/deciem/Web-Account-Incentives-Homepage-Faster-Check-Out?fmt=auto&$poi$&sm=aspect&w=400&aspect=1:1',
  },
  {
    text: 'Get a personalized experience, tailored to your skin concerns.',
    image: 'https://cdn.media.amplience.net/i/deciem/Web-Account-Incentives-Homepage-Module-Pers-Experience?fmt=auto&$poi$&sm=aspect&w=400&aspect=1:1',
  },
];

export const socialCards = [
  {
    title: 'Multi-Peptide Serum for Hair Density',
    image: 'https://cdn.media.amplience.net/i/deciem/ORD-Home-Page-Hero-Multi-Peptide-Hair-Density-Mobile-Img?fmt=auto&$poi$&sm=aspect&w=700&aspect=4:5',
    productImage:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb40ccfe2/Images/products/The%20Ordinary/FY25-D41247-ORD-Web-PDP-Mlt-Pptd-Hair-1x1-EN-1.jpg?sw=120&sh=120&sm=fit',
  },
  {
    title: 'Soothing & Barrier Support Serum',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw7781310b/Images/products/The%20Ordinary/application/ord-soothing-barrier-support-serum-model-application-with-benefits.jpg?sh=860&sm=fit&sw=860',
    productImage:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw9e4e9531/Images/products/The%20Ordinary/SBSS%20PackShot.png?sh=120&sm=fit&sw=120',
  },
  {
    title: 'Glycolic Acid 7% Exfoliating Toner',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw1d27b873/Images/products/The%20Ordinary/application/ord-glycolic-acid-exfoliating-toner-model-application-with-benefits.jpg?sh=860&sm=fit&sw=860',
    productImage:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw8b57fa2b/Images/products/The%20Ordinary/ord-glyc-acid-7pct-100ml-Aug-UPC.png?sw=120&sh=120&sm=fit',
  },
];

export const scientists = [
  {
    name: 'Rita Silva',
    title: 'Senior Manager, Science Communications and Brand Engagement',
    image: 'https://cdn.media.amplience.net/i/deciem/Rita-Image-1?fmt=auto&$poi$&sm=aspect&w=580&aspect=5:9',
  },
  {
    name: 'Joe Basham',
    title: 'Senior Manager, Science Communications and Partnership Engagement',
    image: 'https://cdn.media.amplience.net/i/deciem/Joe-Image-2?fmt=auto&$poi$&sm=aspect&w=580&aspect=5:9',
  },
  {
    name: 'Bushra Yusuf',
    title: 'Scientific Communications Associate Manager',
    image: 'https://cdn.media.amplience.net/i/deciem/Bushra-Image-3?fmt=auto&$poi$&sm=aspect&w=580&aspect=5:9',
  },
  {
    name: 'Dina Nicole',
    title: 'Vice President, Scientific',
    image: 'https://cdn.media.amplience.net/i/deciem/Dina-Image-4?fmt=auto&$poi$&sm=aspect&w=580&aspect=5:9',
  },
  {
    name: 'Alejandro Saldarriaga',
    title: 'Applied Research Principal Scientist',
    image: 'https://cdn.media.amplience.net/i/deciem/Alejandro-Image-5?fmt=auto&$poi$&sm=aspect&w=580&aspect=5:9',
  },
  {
    name: 'Kinnari Patel',
    title: 'Microbiology and Quality Control Director',
    image: 'https://cdn.media.amplience.net/i/deciem/Kinnari-Image-6?fmt=auto&$poi$&sm=aspect&w=580&aspect=5:9',
  },
  {
    name: "Carla O'Connor",
    title: 'Clinical Research Director',
    image: 'https://cdn.media.amplience.net/i/deciem/Carla-Image-7?fmt=auto&$poi$&sm=aspect&w=580&aspect=5:9',
  },
];
