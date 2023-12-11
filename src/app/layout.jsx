import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { DataProvider } from "@/context/DataContext";


export const metadata = {
  title: "ZenFlex",
  description: "Gym For Maintain Fitness",
};

export default function RootLayout({ children }) {
  return (
    <DataProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </DataProvider>
  );
}
