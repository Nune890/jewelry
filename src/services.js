import kolco from "./assets/category/kolco.png";
import kole from "./assets/category/kole.png";
import sergi from "./assets/category/sergi.png";
import braslet from "./assets/products/браслет.jfif";
import braslet1 from "./assets/products/браслет1.jfif";
import kolco1 from "./assets/products/кольцо.jfif";
import kolco2 from "./assets/products/кольцо2.jfif";
import braslet2 from "./assets/products/браслет.jfif";
export const categoriesData = [
  {
    id: 1,
    title: "кольцo",
    img: kolco,
    genderType: 0,
    subCategory: [
      {
        id: 1,
        title: "кольцo",
      },
      {
        id: 2,
        title: "обручальные ",
      },
    ],
  },
  {
    id: 2,
    title: "колье ",
    img: kole,
    genderType: 1,
    subCategory: [
      {
        id: 1,
        title: "колье",
      },
      {
        id: 2,
        title: "колье золотые ",
      },
    ],
  },
  {
    id: 3,
    title: "серьги  ",
    img: sergi,
    genderType: 1,
    subCategory: [
      {
        id: 1,
        title: "серьги",
      },
      {
        id: 2,
        title: "серьги золотые ",
      },
    ],
  },
];

export const productsData = [
  {
    id: 1,
    categoryId: 1,
    subCategoryId: 2,
    title: "браслет",
    artikul: "a555",
    price: "2500$",
    img: braslet,
  },
  {
    id: 2,
    categoryId: 2,
    subCategoryId: 1,
    title: "браслет",
    artikul: "a555",
    price: "2500$",
    img: braslet1,
  },
  {
    id: 3,
    categoryId: 1,
    subCategoryId: 1,
    title: "кольцо",
    artikul: "a555",
    price: "2500$",
    img: kolco1,
  },
  {
    id: 4,
    categoryId: 1,
    subCategoryId: 2,
    title: "кольцо",
    artikul: "a555",
    price: "5000$",
    img: kolco2,
  },
  {
    id: 5,
    categoryId: 3,
    subCategoryId: 2,
    title: "браслет",
    artikul: "a555455",
    price: "500$",
    img: braslet2,
  },
];
