import { useState, useEffect } from "react";
import "../blocks/header.css";

function Header({
  enterHandler,
  isEntered,
  resetHandler,
  artworkHandler,
  websitesHandler,
  isWebsites,
  isArtwork,
}) {
  const [headerStyle, setHeaderStyle] = useState({ color: "" });
  useEffect(() => {
    if (isEntered) {
      setHeaderStyle({ color: "#fff" });
    } else if (!isEntered) {
      setHeaderStyle({ color: "#000" });
    }
    if (isWebsites || isArtwork) {
      setHeaderStyle({ color: "#000" });
    }
  }, [isEntered, isWebsites, isArtwork]);
  return (
    // <div className="header space">
    <div className="header__container">
      <p className="header__name">Christian To</p>
      {isEntered ? (
        <div className="header__hero">
          {isArtwork ? (
            <h1 className="header__title" style={headerStyle}>
              Artwork.
            </h1>
          ) : isWebsites ? (
            <h1 className="header__title" style={headerStyle}>
              Websites & Tech.
            </h1>
          ) : (
            <h1 className="header__title" style={headerStyle}>
              Projects.
            </h1>
          )}

          <button
            className="header__start-button"
            style={headerStyle}
            onClick={resetHandler}
          >
            Back to Start →
          </button>
          <div className="header__selections">
            <button className="header__button" onClick={websitesHandler}>
              Websites
            </button>
            <button className="header__button" onClick={artworkHandler}>
              Artwork
            </button>
            <button className="header__button">About </button>
          </div>

          {isArtwork || isWebsites ? (
            <div className="header__cta" style={headerStyle}>
              <p className="header__cta-text">explore below</p>
              <p className="header__cta-icon">﹀</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="header__hero">
          <h1 className="header__title" style={headerStyle}>
            Welcome.
          </h1>

          <button
            className="header__start-button"
            style={headerStyle}
            onClick={enterHandler}
          >
            Enter →
          </button>
        </div>
      )}

      {isEntered ? <div className=""></div> : <></>}
    </div>
  );
}

export default Header;
