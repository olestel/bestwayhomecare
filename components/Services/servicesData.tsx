import { Service } from "@/types/service";

const servicesData: Service[] = [
  {
    id: 1,
    icon: "/images/icon/user-circle.svg",
    title: "Personal Care Services",
    items: [
      'Activities of Daily Living (ADL)',
      'Live-in, hourly or overnight',
      'Bathing, grooming, dressing',
      'Post-surgery care',
      'Respite Care',
      'Hospice Care and 24hr',
      "Alzheimer's and Dementia Care"
    ],
  },
  {
    id: 2,
    icon: "/images/icon/shopping-cart.svg",
    title: "Homemaking",
    items: [
      'Meal Preparation & Serving',
      'Grocery Shopping',
      'Light Housekeeping',
      'Accompany to Doctor Visits',
      'Medication Management & Reminders',
      'Errands & Appoitment Attending',
      'We can bill Long Term Care insurance'
    ],
  },
  {
    id: 3,
    icon: "/images/icon/puzzle-piece.svg",
    title: "Companionship",
    items: [
      'Games',
      'Socializing',
      'Visiting Family and Friends',
      'Going for Walks',
      'Shopping'
    ],
  },
];

export default servicesData;
