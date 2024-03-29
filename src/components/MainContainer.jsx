import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MovieGallery from "./MovieGallery";

const MainContainer = function () {
  return (
    <div className="container-fluid px-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                variant="secondary"
              >
                Genres
              </button>
              <ul className="dropdown-menu" data-bs-theme="dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
      <h4>Trending Now</h4>
      <MovieGallery seriesToSearch="harry potter" />
      <h4>Watch it Again</h4>
      <MovieGallery seriesToSearch="lord of the rings" />
      <h4>New Releases</h4>
      <MovieGallery seriesToSearch="marvel" />
    </div>
  );
};

export default MainContainer;
