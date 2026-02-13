import { useState, useEffect } from "react";
import "../blocks/header.css";

function Header({
  enterHandler,
  isEntered,
  resetHandler,
  artworkHandler,
  websitesHandler,
  aboutHandler,
  isMenu,
  isWebsites,
  isArtwork,
  isAbout,
  isMoving,
}) {
  const [headerStyle, setHeaderStyle] = useState({ opacity: "1" });

  useEffect(() => {
    if (!isMoving) {
      setHeaderStyle({ opacity: "1" });
    } else {
      setHeaderStyle({ opacity: "0" });
    }
  }, [isMoving]);
  return (
    <div className="header__container">
      <p className="header__name">© Christian To</p>
      {isEntered ? (
        <div className="header__hero">
          {isArtwork ? (
            <h1 className="header__title" style={headerStyle}>
              Visual Arts.
            </h1>
          ) : isWebsites ? (
            <h1 className="header__title" style={headerStyle}>
              Featured.
            </h1>
          ) : isAbout ? (
            <h1 className="header__title" style={headerStyle}>
              About Me.
            </h1>
          ) : (
            <h1 className="header__title header__menu" style={headerStyle}>
              Projects.
            </h1>
          )}
          {isMenu ? (
            <button
              className="header__start-button header__start-button_menu"
              style={headerStyle}
              onClick={resetHandler}
            >
              Back to Start →
            </button>
          ) : (
            <button
              className="header__start-button"
              style={headerStyle}
              onClick={resetHandler}
            >
              Back to Start →
            </button>
          )}

          {isMoving ? (
            <></>
          ) : (
            <div className="header__selections">
              <button className="header__button" onClick={websitesHandler}>
                Featured
              </button>
              <button className="header__button" onClick={artworkHandler}>
                Visual Arts
              </button>
              <button className="header__button" onClick={aboutHandler}>
                About
              </button>
            </div>
          )}

          {isArtwork || isWebsites || isAbout ? (
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
