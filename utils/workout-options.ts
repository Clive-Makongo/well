import {cardio, pilates, yoga_icon, relax, lower, upper} from '@/public/assets'
import { StaticImageData } from 'next/image';

interface Workout {
    id: number;
    title: string;
    description: string;
    Image: StaticImageData
}

export const workoutOptions: Workout[] = [
    {
    id: 0,
    Image: cardio,
    title: "Cardio",
    description:
      "Cardio is a great way to get your heart rate up, burn calories and improve your health.",
  },
  {
    id: 1,
    Image: upper,
    title: "Upper Body",
    description:
      "Upper body workouts are great for building strength and toning your arms, chest, and back. ",
  },
  {
    id: 2,
    Image: lower,
    title: "Lower Body",
    description:
      "Lower body workouts are great for building strength and toning your legs and glutes.",
  },
  {
    id: 3,
    Image: yoga_icon,
    title: "Yoga",
    description:
      "Yoga is a great way to improve flexibility, strength, and your overall balance.",
  },
  {
    id: 4,
    Image: pilates,
    title: "Pilates",
    description:
      "Pilates is a great way to improve core strength, flexibility, and especially posture.",
  },
  {
    id: 5,
    Image: relax,
    title: "Rest",
    description:
      "Rest is an important part of any fitness routine. Make sure you recover fully.",
  }
]