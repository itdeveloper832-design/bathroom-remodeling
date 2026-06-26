export const siteConfig = {
  name: "ARZ Home Remodeling",
  owner: "Alex Rivers",
  tagline: "Licensed Bathroom Remodeling in Chandler, AZ",
  description: "Licensed bathroom remodeling in Chandler, Arizona. Walk-in showers, tub-to-shower conversions, tile, vanities, and master bath remodels. ROC338304. Free estimates.",
  foundedYear: 2024,
  // Set to real values ONLY after a verified Google Business Profile exists.
  // Kept as 0/empty to avoid emitting fabricated review data in schema.
  googleReviewsCount: 0,
  googleRating: 0,
  warranty: "2-Year Workmanship Warranty",
  url: "https://arzhomeremodeling.com",
  googleBusinessLink: "https://www.google.com/maps/search/?api=1&query=ARZ+Home+Remodeling+Chandler+AZ",
  phone: "(520) 569-3339",
  phoneClean: "+15205693339",
  email: "estimates@arzhomeremodeling.com",
  // Verified Arizona Registrar of Contractors license number
  license: "ROC338304 - Arizona Licensed Contractor",
  address: {
    street: "6710 W Chicago St",
    city: "Chandler",
    state: "AZ",
    zip: "85226",
    full: "6710 W Chicago St, Chandler, AZ 85226",
    coordinates: {
      lat: 33.3009334,
      lng: -111.9605964,
    },
  },
  zipCodes: ["85224", "85225", "85226", "85244", "85246", "85248", "85249", "85286"],
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
  },
  social: {
    facebook: "https://www.facebook.com/arzhomeremodeling",
    instagram: "https://www.instagram.com/arzhomeremodeling/",
    youtube: "https://youtube.com/arzhomeremodeling",
    linkedin: "https://www.linkedin.com/company/arz-home-remodeling/",
    twitter: "", // Add if available
    pinterest: "", // Add if available
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
    { name: "Services", href: "/services/" },
    { name: "Blog", href: "/blog/" },
    { name: "Contact", href: "/contact/" },
  ],
  serviceAreas: [
    "Chandler",
    "Ahwatukee",
    "Sun Lakes",
    "Ocotillo",
    "Dobson Ranch",
    "Fulton Ranch",
    "Queen Creek",
    "Apache Junction",
    "Chandler Heights",
    "Andersen Springs",
    "Layton Lakes",
    "The Islands",
    "Pecos Ranch",
  ],
  umamiWebsiteId: "", // Add your Umami website ID here (e.g. "9a38f712-...") to enable tracking
  umamiShareUrl: "", // Add your Umami public share URL here to display the dashboard in your admin panel
};
