import bigTree from "../../assets/big-tree.png";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div>
          <h1 className="hero__title">Logan Masniuk</h1>
          <h2 className="hero__subtitle">
            Full Stack Developer, Good Times Enthusiast.
          </h2>
        </div>
        <img
          className="hero__image"
          src={bigTree}
          alt="Logan standing on a wooden boardwalk next to a very large tree"
        />
      </div>
    </section>
  );
}
