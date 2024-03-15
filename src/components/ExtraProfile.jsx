import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const ExtraProfile = function () {
  return (
    <Container>
      <Row>
        <div className="profile-container col-12 col-md-10 col-lg-7 col-xl-6 mx-auto">
          <h1 className="border-bottom pb-2">Edit Profile</h1>

          <div className="profile-content gap-3 d-flex mt-4">
            <div className="img-container position-relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
              <div className="editPen position-absolute badge border border-light rounded-circle text-bg-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                </svg>
              </div>
            </div>

            <div className="text-container d-flex flex-grow-1 flex-column">
              <div className="text-section-1 d-flex flex-column flex-grow-1 justify-content-between border-bottom pb-4">
                <div className="section-title p-2 ps-3 mb-3 fs-5">Strive Student</div>

                <div className="mt-auto mb-1 fs-5">Language:</div>
                <div className="dropdown">
                  <button
                    className="btn-profile dropdown-toggle bg-black text-white px-3 py-1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Italian
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        French
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dutch
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        View more
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-section-2 pt-4 border-bottom pb-4">
                <p className="fs-5">Maturity settings:</p>
                <button className="btn-profile2 p-2 px-3 mb-3 fs-6 border border-0 fw-bold">
                  ALL MATURITY RATINGS
                </button>
                <p>
                  Show titles of <span className="fw-bold">all maturity ratings</span> for this profile.
                </p>
                <button className="btn-profile">EDIT</button>
              </div>

              <div className="text-section-3 pt-4">
                <p className="fs-5">Autoplay controls</p>
                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label ms-2" for="defaultCheck1">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                  <label className="form-check-label ms-2" for="defaultCheck2">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-section border-top mt-4 p-4 d-flex justify-content-between fs-5">
            <button className="btn-profile bg-white text-black">SAVE</button>
            <button className="btn-profile">CANCEL</button>
            <button className="btn-profile">DELETE PROFILE</button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default ExtraProfile;
