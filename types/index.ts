export interface Service {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  pet: string;
}

export interface ChatNode {
  message: string;
  options: string[];
  action?: "whatsapp" | "maps" | "call";
}
