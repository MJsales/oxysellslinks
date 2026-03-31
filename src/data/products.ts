export type Category = "all" | "shoes" | "jeans" | "tech";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  image: string;
  options?: string[];
  link: string;
}

import jordansImg from "@/assets/jordans.jpg";
import ksubiImg from "@/assets/ksubi.jpg";
import purpleImg from "@/assets/purple-jeans.jpg";
import airpodsImg from "@/assets/airpods.jpg";

export const products: Product[] = [
  {
    id: "jordans-1",
    name: "Jordans",
    brand: "Nike",
    category: "shoes",
    price: 10,
    image: jordansImg,
    link: "#",
  },
  {
    id: "ksubi-1",
    name: "Ksubi Jeans",
    brand: "Ksubi",
    category: "jeans",
    price: 10,
    image: ksubiImg,
    link: "#",
  },
  {
    id: "purple-1",
    name: "Purple Jeans",
    brand: "Purple",
    category: "jeans",
    price: 10,
    image: purpleImg,
    link: "#",
  },
  {
    id: "airpods-1st",
    name: "AirPods 1st Gen",
    brand: "Apple",
    category: "tech",
    price: 10,
    image: airpodsImg,
    options: ["1st Generation"],
    link: "#",
  },
  {
    id: "airpods-2nd",
    name: "AirPods 2nd Gen",
    brand: "Apple",
    category: "tech",
    price: 10,
    image: airpodsImg,
    options: ["2nd Generation"],
    link: "#",
  },
  {
    id: "airpods-3rd",
    name: "AirPods 3rd Gen",
    brand: "Apple",
    category: "tech",
    price: 10,
    image: airpodsImg,
    options: ["3rd Generation"],
    link: "#",
  },
  {
    id: "airpods-pro",
    name: "AirPods Pro",
    brand: "Apple",
    category: "tech",
    price: 10,
    image: airpodsImg,
    options: ["Pro"],
    link: "#",
  },
  {
    id: "airpods-pro2",
    name: "AirPods Pro 2",
    brand: "Apple",
    category: "tech",
    price: 10,
    image: airpodsImg,
    options: ["Pro 2nd Generation"],
    link: "#",
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    brand: "Apple",
    category: "tech",
    price: 10,
    image: airpodsImg,
    options: ["Max"],
    link: "#",
  },
];
