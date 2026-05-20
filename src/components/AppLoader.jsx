const AppLoader = () => (
  <div className="app-loader" role="status" aria-live="polite" aria-label="Loading skincare store">
    <div className="loader-scene" aria-hidden="true">
      <div className="loader-orbit loader-orbit-outer" />
      <div className="loader-orbit loader-orbit-inner" />
      <div className="loader-bottle">
        <div className="loader-cap" />
        <div className="loader-neck" />
        <div className="loader-glass">
          <div className="loader-label">
            <span>The</span>
            <strong>Ordinary</strong>
          </div>
          <div className="loader-liquid" />
        </div>
      </div>
      <div className="loader-drop loader-drop-one" />
      <div className="loader-drop loader-drop-two" />
      <div className="loader-shadow" />
    </div>

    <div className="loader-copy">
      <p>Clinical skincare loading</p>
      <div className="loader-progress" aria-hidden="true">
        <span />
      </div>
    </div>
  </div>
);

export default AppLoader;
