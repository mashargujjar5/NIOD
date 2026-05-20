import OLibrarySection from '../components/OLibrarySection';
import CategoryListingPage from './CategoryListingPage';

const newFeaturedProducts = [
  {
    tag: '',
    name: 'Caffeine 3% + Escin 1% Face Serum',
    rating: '4.8 (24)',
    benefit: 'Energizes, Visibly Sculpts',
    price: '$11.70 CAD',
    sizes: ['30ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw33ea054d/Images/products/The%20Ordinary/ord-caffeine-3pct-escin-1pct-face-serum-30ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: 'New',
    name: 'Rice Lipids + Ectoin Microemulsion',
    rating: '4.7 (437)',
    benefit: '24-Hour Hydration, Repairs Barrier',
    price: '$17.80 CAD',
    sizes: ['60ml', '120ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw97ea82d2/Images/products/The%20Ordinary/ord-rice-lipids-ectoin-microemulsion-60ml.png?sw=640&sh=640&sm=fit',
    badge: 'https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwf8fc4a19/awards/test-eczema-seal.png',
    badgeClass: 'left-[26px] bottom-[17px] h-[74px] w-[74px]',
  },
  {
    tag: 'New',
    name: 'Lash Curl Finisher',
    rating: '4.4 (339)',
    benefit: 'Defines Lashes, Holds Curl',
    price: '$13.50 CAD',
    sizes: ['10ml'],
    action: 'EMAIL ME WHEN IN STOCK',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwe59f1b93/Images/products/The%20Ordinary/ord-lash-curl-finisher-10ml.png?sw=640&sh=640&sm=fit',
    imageClass: 'h-[72%] w-[72%]',
  },
  {
    tag: 'Trending',
    name: 'Volufiline 92% + Pal-Isoleucine 1%',
    rating: '4.0 (432)',
    benefit: 'Targets Visible Volume Loss',
    price: '$30.40 CAD',
    sizes: ['15 mL'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwcc943d10/Images/products/The%20Ordinary/ord-volufiline-92-pal-isoleucine-1-15ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: 'O. Exclusive',
    name: 'Serum Foundation',
    rating: '4.4 (1281)',
    benefit: 'Lightweight, Medium Coverage',
    price: '$8.20 CAD',
    sizes: ['30ml'],
    action: 'Select Shade',
    underlined: true,
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw60f28d4c/Images/products/The%20Ordinary/Colours/rdn-serum-foundation-31-y-30ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: 'New',
    name: 'The Face & Body Set',
    rating: '4.8 (56)',
    benefit: 'Smooth, Brighten, And Hydrate',
    price: '$22.50 CAD',
    sizes: ['1 set'],
    action: 'EMAIL ME WHEN IN STOCK',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb86544f3/Images/products/The%20Ordinary/ord-the-face-and-body-set.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: '',
    name: 'Soothing & Barrier Support Serum Set',
    rating: '4.4 (1758)',
    benefit: 'Barrier Repair On-The-Go',
    price: '$14.50 CAD',
    sizes: ['15ml'],
    action: 'EMAIL ME WHEN IN STOCK',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw46324f4d/Images/products/The%20Ordinary/ord-soothing-barrier-support-serum-gift-set.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: '',
    name: 'Ingredients',
    rating: '4.2 (5)',
    benefit: '',
    price: '$42.00 CAD',
    sizes: ['Hardcover'],
    underlined: true,
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw3d51c1d7/Images/products/The%20Ordinary/rdn-ingredients-book.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: '',
    name: 'PHA 5% Exfoliating Lip Serum',
    rating: '4.5 (171)',
    benefit: 'Exfoliates And Smoothes Lips',
    price: '$8.90 CAD',
    sizes: ['15ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwce4d9afa/Images/products/The%20Ordinary/ord-pha-5pct-lip-exfoliating-serum-15ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: '',
    name: 'The Mini Icons Set',
    rating: '4.4 (5839)',
    benefit: 'Exfoliates, Smooths, Hydrates.',
    price: '$23.20 CAD',
    sizes: ['1 set'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw51379046/Images/products/The%20Ordinary/ord-the-mini-icons-set.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: '',
    name: 'Sulfur 10% Powder-to-Cream Concentrate',
    rating: '4.5 (341)',
    benefit: 'Treats Acne, Soothes Redness',
    price: '$13.00 CAD',
    sizes: ['5g'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw86d342b0/Images/products/The%20Ordinary/ord-sulfur-10pct-powder-to-cream-concentrate-5g.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: '',
    name: 'The Bright Set',
    rating: '4.4 (4668)',
    benefit: 'Radiance-Boosting Regimen',
    price: '$32.00 CAD',
    sizes: ['1 set'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw473e829e/Images/products/The%20Ordinary/ord-the-bright-set.png?sw=640&sh=640&sm=fit',
  },
];

const NewFeaturedPage = () => (
  <CategoryListingPage
    hero={{
      breadcrumb: 'New & Featured',
      title: 'Wake Up Your Skin with Caffeine.',
      copy: 'A new energizing face serum formulated with lab-made caffeine and escin, for skin that looks healthier and well-rested.',
      cta: 'Explore Now',
      image:
        'https://cdn.media.amplience.net/i/deciem/2026-02-06-D51239-ORD-Caffeine-Face-New-PLP-Desktop-Img?fmt=auto&$poi$&sm=aspect&w=1920&aspect=3:1',
    }}
    resultCount={24}
    products={newFeaturedProducts}
  >
    <OLibrarySection />
  </CategoryListingPage>
);

export default NewFeaturedPage;
