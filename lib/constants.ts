export const STORE = {
  name: "Crazy Pet'z Store",
  tagline: "Everything For Pets",
  established: "2018",
  phone1: "6382469764",
  phone2: "",
  whatsapp: "916382469764",
  address: "123 Pet Paradise Lane, Downtown District, Your City - 12345",
  hours: "Open daily · 9am – 8pm",
  rating: 4.9,
  reviews: 127,
  mapUrl: "https://maps.app.goo.gl/example",
};

export const SERVICES = [
  {
    icon: "✂️",
    title: "Pet Grooming",
    desc: "Professional grooming for dogs and cats — baths, haircuts, nail trimming and more.",
    color: "from-orange-400 to-amber-300",
  },
  {
    icon: "🦮",
    title: "Puppies Available",
    desc: "Healthy, vaccinated puppies from trusted breeders. Find your perfect companion.",
    color: "from-yellow-400 to-orange-300",
  },
  {
    icon: "🛍️",
    title: "Pet Accessories",
    desc: "Collars, leashes, beds, toys and everything your pet deserves.",
    color: "from-pink-400 to-rose-300",
  },
  {
    icon: "🍖",
    title: "Pet Food",
    desc: "Premium nutrition brands — Pedigree, Royal Canin, Purepet and more.",
    color: "from-green-400 to-emerald-300",
  },
  {
    icon: "🏠",
    title: "Pet Boarding",
    desc: "Safe, comfortable boarding while you're away. Your pet is in good hands.",
    color: "from-blue-400 to-sky-300",
  },
];

export const REVIEWS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely love this place! The grooming service is top-notch and my golden retriever always comes out looking amazing. Staff is incredibly gentle and caring.",
    pet: "Golden Retriever owner",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Best pet store in town! Great selection of premium foods and accessories. The staff really knows their stuff and always gives helpful advice.",
    pet: "Labrador owner",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "We got our kitten here and she's the healthiest, happiest cat! They provided all vaccination records and great aftercare advice. Highly recommend!",
    pet: "Cat owner",
  },
];

export const CHATBOT_FLOWS = {
  welcome: {
    message:
      "Hey there! 🐾 Welcome to Crazy Pet'z Store! How can I help you today?",
    options: [
      "🐶 Puppies Available",
      "✂️ Grooming Services",
      "🏠 Pet Boarding",
      "📍 Visit Us",
      "📞 Call Now",
    ],
  },
  "🐶 Puppies Available": {
    message:
      "We have adorable, vaccinated puppies available! 🐕 Breeds change frequently. To see what's available right now, chat with us on WhatsApp!",
    options: ["💬 Chat on WhatsApp", "⬅️ Back to Menu"],
  },
  "✂️ Grooming Services": {
    message:
      "Our grooming includes bath, haircut, nail trimming, ear cleaning & more! 🛁 Prices start from $35. Want to book an appointment?",
    options: ["📅 Book Appointment", "⬅️ Back to Menu"],
  },
  "🏠 Pet Boarding": {
    message:
      "We offer safe & comfortable boarding for dogs and cats 🏡 Your pet gets proper meals, care and lots of love while you're away!",
    options: ["💬 Ask About Pricing", "⬅️ Back to Menu"],
  },
  "📍 Visit Us": {
    message:
      "We're at 123 Pet Paradise Lane, Downtown District 🗺️ Open daily from 9am to 8pm. Come visit us!",
    options: ["🗺️ Get Directions", "⬅️ Back to Menu"],
  },
  "📞 Call Now": {
    message:
      "You can reach us at:\n📱 (555) 123-4567\n📱 (555) 987-6543\n\nOr just tap below to call directly!",
    options: ["📞 (555) 123-4567", "⬅️ Back to Menu"],
  },
  "📅 Book Appointment": {
    message: "Great! Send us a WhatsApp message and we'll confirm your slot 🐾",
    options: ["💬 Chat on WhatsApp", "⬅️ Back to Menu"],
  },
  "💬 Ask About Pricing": {
    message:
      "Boarding prices depend on pet size and duration. WhatsApp us for a quick quote! 😊",
    options: ["💬 Chat on WhatsApp", "⬅️ Back to Menu"],
  },
  "💬 Chat on WhatsApp": {
    message: "Opening WhatsApp now! 🚀",
    options: [],
    action: "whatsapp",
  },
  "🗺️ Get Directions": {
    message: "Opening Google Maps! 📍",
    options: [],
    action: "maps",
  },
  "📞 (555) 123-4567": {
    message: "Calling now! 📞",
    options: [],
    action: "call",
  },
  "⬅️ Back to Menu": {
    message: "Sure! What else can I help you with? 🐾",
    options: [
      "🐶 Puppies Available",
      "✂️ Grooming Services",
      "🏠 Pet Boarding",
      "📍 Visit Us",
      "📞 Call Now",
    ],
  },
};
