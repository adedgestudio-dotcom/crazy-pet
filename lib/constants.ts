export const STORE = {
  name: "Crazy Pet'z Store",
  tagline: "Everything For Pets",
  established: "2021",
  phone1: "78711 53333",
  phone2: "81247 53333",
  whatsapp: "917871153333",
  address: "49/1, Park Road, Welcome Colony, Anna Nagar West Extension, Chennai - 600101",
  hours: "Open daily · 10am – 10pm",
  rating: 4.8,
  reviews: 23,
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
    name: "Priya R.",
    rating: 5,
    text: "Got my golden retriever groomed here — honestly the best grooming in Anna Nagar. Staff is so gentle with animals!",
    pet: "Golden Retriever owner",
  },
  {
    name: "Karthik S.",
    rating: 5,
    text: "Amazing collection of pet food and accessories. Prices are reasonable and the owner really knows his stuff.",
    pet: "Labrador owner",
  },
  {
    name: "Meera V.",
    rating: 4,
    text: "Got my kitten here. She's healthy and so playful! They gave all the vaccination details too. Very trustworthy.",
    pet: "Cat owner",
  },
];

export const CHATBOT_FLOWS = {
  welcome: {
    message: "Hey there! 🐾 Welcome to Crazy Pet'z Store! How can I help you today?",
    options: ["🐶 Puppies Available", "✂️ Grooming Services", "🏠 Pet Boarding", "📍 Visit Us", "📞 Call Now"],
  },
  "🐶 Puppies Available": {
    message: "We have adorable, vaccinated puppies available! 🐕 Breeds change frequently. To see what's available right now, chat with us on WhatsApp!",
    options: ["💬 Chat on WhatsApp", "⬅️ Back to Menu"],
  },
  "✂️ Grooming Services": {
    message: "Our grooming includes bath, haircut, nail trimming, ear cleaning & more! 🛁 Prices start from ₹400. Want to book an appointment?",
    options: ["📅 Book Appointment", "⬅️ Back to Menu"],
  },
  "🏠 Pet Boarding": {
    message: "We offer safe & comfortable boarding for dogs and cats 🏡 Your pet gets proper meals, care and lots of love while you're away!",
    options: ["💬 Ask About Pricing", "⬅️ Back to Menu"],
  },
  "📍 Visit Us": {
    message: "We're at 49/1, Park Road, Anna Nagar West Extension, Chennai 🗺️ Open daily from 10am to 10pm. Easy to find near Surya Apartments!",
    options: ["🗺️ Get Directions", "⬅️ Back to Menu"],
  },
  "📞 Call Now": {
    message: "You can reach us at:\n📱 78711 53333\n📱 81247 53333\n\nOr just tap below to call directly!",
    options: ["📞 78711 53333", "⬅️ Back to Menu"],
  },
  "📅 Book Appointment": {
    message: "Great! Send us a WhatsApp message and we'll confirm your slot 🐾",
    options: ["💬 Chat on WhatsApp", "⬅️ Back to Menu"],
  },
  "💬 Ask About Pricing": {
    message: "Boarding prices depend on pet size and duration. WhatsApp us for a quick quote! 😊",
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
  "📞 78711 53333": {
    message: "Calling now! 📞",
    options: [],
    action: "call",
  },
  "⬅️ Back to Menu": {
    message: "Sure! What else can I help you with? 🐾",
    options: ["🐶 Puppies Available", "✂️ Grooming Services", "🏠 Pet Boarding", "📍 Visit Us", "📞 Call Now"],
  },
};
