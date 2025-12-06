import "../blocks/siteInfo.css";

function SiteInfo({
  recipeImage,
  recipeName,
  recipeLink,
  recipeDescription,
  toggleSiteInfo,
}) {
  return (
    <div className="site-info__container">
      <div className="site-info__box">
        <img
          className="site-info__image"
          src={recipeImage}
          alt={recipeName}
        ></img>
        <div className="site-info__nav">
          <p className="site-info__description">{recipeDescription}</p>
          <a className="site-info__button" href={recipeLink} target="_blank">
            Visit Site ➔
          </a>
          <button className="site-info__button" onClick={toggleSiteInfo}>
            Back ↺
          </button>
        </div>
      </div>
    </div>
  );
}

export default SiteInfo;
