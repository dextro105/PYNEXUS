export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  github?: string;
  category: string;
}

export const projects: Project[] = [
 {
    title: "Sunasa",
    description: "Indian Lhenga and Saree E-commerce platform with custom design options",
    image: "https://images.unsplash.com/photo-1629118477133-b8b1499f2b8a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://sunasa.in/",
    github: "https://github.com",
    category: "Clothing and Fashion"
  },
  {
    title: "No-issue-Packaging",
    description: "US Based E-Commerce of Custom Bakery and Coffee Packaging",
    image: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=900&auto=format&fit=crop&q=60",
    url: "https://noissue.co/",
    github: "https://github.com",
    category: "ecommerce"
  },
  {
    title: "Legora",
    description: "AI based Lawyer and Legal Assistant with document processing",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=900&auto=format&fit=crop&q=60",
    url: "https://legora.com/",
    category: "ai"
  },
  {
    title: "Fyaril-Ecommerce",
    description: "E-commerce platform for buying and selling products with secure checkout",
    image: "https://plus.unsplash.com/premium_photo-1671469876887-b2733ac9c785?w=900&auto=format&fit=crop&q=60",
    url: "https://www.fyaril.se/en/",
    category: "ecommerce"
  },
  {
    title: "Silver Cut",
    description: "Silver Cut is a Swedish Jewelry E-commerce platform for your Pets",
    image: "https://images.unsplash.com/photo-1604306354577-68136efdf03b?q=80&w=2940&auto=format&fit=crop",
    url: "https://silvercut.se/",
    category: "ecommerce"
  },
  {
    title: "The Simply elegant",
    description: "Best Wedding and Event Planning Service",
    image: "https://static.showit.co/1600/XKr8i_f4RBmsvMAq9-GbdQ/114320/chicago_wedding_planners_00018.jpg",
    url: "https://thesimplyelegantgroup.com/",
    github: "https://github.com",
    category: "web"
  },
  {
    title: "Rug View",
    description: "Interior design visualization tool for customizing your own space",
    image: "https://images.unsplash.com/photo-1661099548731-fc8f74fc9dd9?q=80&w=2367&auto=format&fit=crop",
    url: "https://rugview.com/",
    category: "web"
  },
  {
    title: "HR ONE",
    description: "An application for HR management using React and Node.js with analytics",
    image: "https://plus.unsplash.com/premium_photo-1661488439548-a87936c95700?q=80&w=3132&auto=format&fit=crop",
    url: "https://hrone.cloud/",
    category: "web"
  },
  {
    title: "Sinch - E-Bikes",
    description: "New Zealand Based E-bike purchase site with product customization",
    image: "https://images.unsplash.com/photo-1622079133295-c9fb229f3814?w=900&auto=format&fit=crop&q=60",
    url: "https://sinchbikes.co.nz/",
    category: "ecommerce"
  }
];