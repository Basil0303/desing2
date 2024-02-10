import React from "react";

function Home() {
  return (
    <div className="container">
      <div
        className="bg-light d-flex align-items-center justify-content-center"
        style={{ width: "100vw", margin: "0", padding: "0" }}
      >
        <img
          src="src\assets\real-estate-house.png"
          style={{ width: "80px", height: "80px", marginRight: "auto" }}
          alt="Company Logo"
        />
        <h3 className="" style={{ fontSize: "14px", marginRight: "55%" }}>
          XYZ SYSTEMS LLP.
        </h3>
      </div>

      <section className="">
        <div>
          <h2 className="text-info mt-5">Unlock Exclusive Benefits </h2>
        </div>
        <div className="row">
          <div className="col-md-6" style={{ marginTop: "10%" }}>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Phone Number</label>
                <div className="row">
                  <div className="col">
                    <div className="input-group">
                      <select
                        style={{
                          borderTopLeftRadius: "20px",
                          borderBottomLeftRadius: "20px",
                        }}
                        className="form-control"
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                      </select>
                      <input
                        type="tel"
                        name="mob"
                        pattern="[0-9]{10}"
                        className="form-control"
                        style={{
                          borderTopRightRadius: "20px",
                          borderBottomRightRadius: "20px",
                        }}
                        id="mobileNumber1"
                        placeholder="India"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <input
                      type="tel"
                      name="mob"
                      pattern="[0-9]{10}"
                      className="form-control"
                      style={{ borderRadius: "20px" }}
                      id="mobileNumber2"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email [optional]</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ borderRadius: "20px" }}
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-4"
                style={{ width: "100%", borderRadius: "20px" }}
              >
                Continue
              </button>
              <h4 className="mt-2 mx-5" style={{ fontSize: "20px" }}>
                Get ready to receive a secret code (OTP) on your phone
              </h4>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="src\assets\celeb.png"
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
