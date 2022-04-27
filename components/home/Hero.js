import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/../public/images/ongo-gablogian.jpg"
          alt="A man a plan a canal panama"
          width={500}
          height={500}
        />
      </div>
      <h1>Ongo Gablogian, The Art Collector</h1>
      <p>Charmed I'm Sure</p>
    </section>
  );
}
