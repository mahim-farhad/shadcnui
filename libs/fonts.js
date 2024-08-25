import { Poppins, Montserrat, Fira_Code } from "next/font/google";

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
  variable: "--font-poppins"
});

const montserrat = Montserrat({
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
  variable: "--font-montserrat"
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
  variable: "--font-firaCode"
});

export { poppins, montserrat, firaCode };
