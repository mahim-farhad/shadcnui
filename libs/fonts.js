import { Poppins, Roboto_Condensed, Fira_Code } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  variable: "--font-poppins",
  display: "swap"
});

const montserrat = Roboto_Condensed({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  variable: "--font-montserrat",
  display: "swap"
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  variable: "--font-firaCode",
  display: "swap"
});

export { poppins, montserrat, firaCode };
