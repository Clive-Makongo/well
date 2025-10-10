import {cardio, pilates, yoga_icon, relax, lower, upper} from '@/public/assets'
import { Workout } from '@/types/workout/workout';

export const workoutOptions: Workout[] = [
    {
    id: 0,
    Image: cardio,
    status:'Exercises',
    title: "Cardio",
    description:
      "Cardio is a great way to get your heart rate up, burn calories and improve your health.",
  },
  {
    id: 1,
    Image: upper,
    status:'Exercises',
    title: "Upper Body",
    description:
      "Upper body workouts are great for building strength and toning your arms, chest, and back. ",
  },
  {
    id: 2,
    Image: lower,
    status:'Exercises',
    title: "Lower Body",
    description:
      "Lower body workouts are great for building strength and toning your legs and glutes.",
  },
  {
    id: 3,
    Image: yoga_icon,
    status:'Exercises',
    title: "Yoga",
    description:
      "Yoga is a great way to improve flexibility, strength, and your overall balance.",
  },
  {
    id: 4,
    Image: pilates,
    status:'Exercises',
    title: "Pilates",
    description:
      "Pilates is a great way to improve core strength, flexibility, and especially posture.",
  },
  {
    id: 5,
    Image: relax,
    status:'Exercises',
    title: "Rest",
    description:
      "Rest is an important part of any fitness routine. Make sure you recover fully.",
  }
]