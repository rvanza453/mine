export type MemoryType = 'image' | 'video';

export interface Memory {
  type: MemoryType;
  src: string;
  title?: string;
  text?: string;
  surprise?: {
    question?: string;
    answer?: string;
    emoji?: string;
  };
}

const BASE_PATH = "/mine";

export const memories: Memory[] = [

  {
    type: 'video',
    src: `${BASE_PATH}/assets/mp4/02.mp4`,
    title: "Our Vibe",
    text: "Kadang random, kadang serius, tapi selalu seru sama sayang."
  },
  {
    type: 'video',
    src: `${BASE_PATH}/assets/mp4/03.mp4`,
    title: "Moving Forward",
    text: "Setiap langkah jadi lebih ringan karena ada partner terbaik di sebelahku."
  },

  { type: 'image', src: `${BASE_PATH}/assets/img/01.jpeg`, title: "Chapter 1", text: "Awal dari segalanya." },
  { type: 'image', src: `${BASE_PATH}/assets/img/05.jpeg`, title: "POV", text: "Cara aku melihatmu (memang seindah itu)." },
  { type: 'image', src: `${BASE_PATH}/assets/img/04.jpeg`, title: "Comfort", text: "Nyaman itu sederhana." },
  {
    type: 'image',
    src: `${BASE_PATH}/assets/img/03.jpeg`,
    title: "Mine!",
    text: "Coba tebak apa yang aku pikirin pas foto ini?",
    surprise: {
      question: "Apa hayo?",
      answer: "Aku bersyukur banget punya kamu.",
      emoji: "🥰"
    }
  },
  { type: 'image', src: `${BASE_PATH}/assets/img/02.jpeg`, title: "Us", text: "Best team." },
  { type: 'image', src: `${BASE_PATH}/assets/img/06.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/07.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/08.jpeg`, text: "Lagi Sok imut." },
  { type: 'image', src: `${BASE_PATH}/assets/img/09.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/10.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/13.jpeg`, title: "Little Moments", text: "Hal-hal kecil yang bikin kangen." },
  { type: 'image', src: `${BASE_PATH}/assets/img/12.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/11.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/14.jpeg` },
  {
    type: 'image',
    src: `${BASE_PATH}/assets/img/15.jpeg`,
    surprise: {
      question: "Klik untuk rahasia",
      answer: "You are my favorite notification.",
      emoji: "💌"
    }
  },
  { type: 'image', src: `${BASE_PATH}/assets/img/16.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/17.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/18.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/19.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/20.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/21.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/22.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/23.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/24.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/25.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/26.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/27.jpeg` },
  {
    type: 'image',
    src: `${BASE_PATH}/assets/img/28.jpeg`,
    surprise: {
      question: "Kenapa aku sayang kamu?",
      answer: "Karena kamu bisa jadi pacar sekaligus sahabat terbaikku.",
      emoji: "🤝❤️"
    }
  },
  { type: 'image', src: `${BASE_PATH}/assets/img/29.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/30.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/31.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/32.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/33.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/34.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/35.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/36.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/37.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/38.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/39.jpeg` },
  { type: 'image', src: `${BASE_PATH}/assets/img/40.jpeg`, title: "To Be Continued...", text: "I Will Do Everything With You." },
];
