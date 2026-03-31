import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Marcas Famosas",
  tagline: "Materiais de Construção de Alta Qualidade",
  description:
    "Marcas Famosas oferece materiais de construção de primeira linha para atender às necessidades de todos os seus projetos. Explore nosso catálogo e entre em contato para garantir qualidade e confiabilidade em cada etapa da sua obra.",
  description_short:
    "Materiais de construção de alta qualidade para atender às necessidades do seu projeto.",
  url: "https://asmarcasmaisfamosas.com.br",
  author: "Wanderley de Carvalho",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description:
    "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};

export const CONTACT = {
  phone: "(11) 99999-9999",
  email: "wanderley@asmarcasfamosas.com.br",
  address: "Rua das Flores, 123, São Paulo, SP, 01234-567",
  whatsApp: "https://wa.me/5541999386768",
};
