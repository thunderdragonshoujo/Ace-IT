import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });
const Footer = dynamic(() => import("@/components/footer/footer"));

export const metadata = {
  title: {
    default: "AceMQ Consulting | Expert RabbitMQ Messaging & Queuing Solutions",
    template: "%s | AceMQ",
  },
  description: "AceMQ Consulting specializes in RabbitMQ solutions, including consulting, support, and professional services. Optimize your systems with our expert RabbitMQ services.",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

