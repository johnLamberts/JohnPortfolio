type ISeo = {
  page: string;
  description: string;
  keywords: string[];
};

const SEO: ISeo[] = [
  {
    page: "home",
    description: "An Enthusiast JavaScript Developer",
    keywords: ["John Lambert ", "John Lambert A.", "John Lamert Asis"],
  },

  {
    page: "about",
    description: "An Enthusiast JavaScript Developer",
    keywords: ["John Lambert ", "John Lambert A.", "John Lamert Asis"],
  },

  {
    page: "projects",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit iusto totam voluptas saepe? Alias recusandae quod corporis quos, odit eveniet itaque numquam totam est, omnis, vero explicabo odio impedit!
    Earum, voluptatum voluptate. Fuga, corporis labore, odit modi nesciunt facere accusantium aspernatur totam quos sunt, atque suscipit nostrum magnam. Quo deserunt explicabo culpa eum possimus ducimus, facere exercitationem earum sapiente!`,
    keywords: ["John Lambert ", "John Lambert A.", "John Lamert Asis"],
  },
];

export default SEO;
