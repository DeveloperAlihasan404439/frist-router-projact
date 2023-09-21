import React from "react";

const Singin = () => {
    const loginForm = event=>{
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
    }
  return (
    <div className="hero min-h-screen bg-base-200 pt-20">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={loginForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
              <button className="w-full py-3 text-2xl font-medium text-white bg-gradient-to-r from-[#5756FD] to-[#D040F5] hover:bg-gradient-to-l hover:from-[#1313fa] hover:to-[#ce26f8] rounded-xl mt-4">
              Login
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singin;
