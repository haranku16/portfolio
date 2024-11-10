export interface Role {
  company: string;
  title: string;
  year: string;
  description: string;
}

export const roles: Role[] = [
  {
    company: "Amazon",
    title: "Senior Software Development Engineer (L6)",
    year: "2021-2024",
    description:
      "I led my team to develop products and services to accelerate Prime content marketing.",
  },
  {
    company: "Amazon",
    title: "Software Development Engineer II (L5)",
    year: "2019-2021",
    description:
      "I led a few engineers on my team to build a Seller Central frontend application that would enable 3rd party sellers to set up Prime exclusive discounts.",
  },
  {
    company: "Amazon",
    title: "Software Development Engineer I (L4)",
    year: "2017-2019",
    description:
      "I built Prime exclusive discount features on the Amazon detail page, for which I was responsible for internal APIs and compliance with major tech stack migrations.",
  },
  {
    company: "Amazon",
    title: "Software Development Engineer Intern",
    year: "2016",
    description:
      "As an intern at Amazon, I worked on a product localization dashboard as part of an I18N initiative.",
  },
  {
    company: "Rutgers University",
    title: "Physics Department Research Intern",
    year: "2015",
    description:
      "As a research intern, I worked on updating an outdated and malfunctioning diphoton production simulator written in Fortran.",
  },
  {
    company: "Rutgers University WINLAB",
    title: "Software Engineering Intern",
    year: "2014",
    description:
      "As a software engineering intern at WINLAB, I worked in a small team to build an application to classify dog barks using digital signal processing techniques.",
  },
];
