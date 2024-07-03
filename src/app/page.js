import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Interests from "@/components/Interests";

const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </main>
  );
};

export default Home;
