export const Form = () => {
  return (
    <>
      <div className="container mx-auto pb-5 md:max-l:flex">
        <div className="card shadow-xl">
          <div className="card-body">
            <article className="prose max-w-none">
              <h2 className=" text-center">INSERT RESTAURANT NAME HERE</h2>
              <h5 className="text-center">INSERT RESTAURANT ADDRESS HERE</h5>
            </article>

            <div className="divider"></div>
            <div className="mx-auto">
              <div className="flex w-full">
                <div className="grid h-auto card place-items-center">
                  <label className="label">
                    <span className="label-text">How many adults?</span>
                  </label>
                  <select className="select select-bordered">
                    <option disabled selected>
                      # of adults
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </div>
                <div className="divider"> </div>
                <div className="grid h-auto card place-items-center">
                  <label className="label">
                    <span className="label-text">How many children?</span>
                  </label>
                  <select className="select select-bordered">
                    <option disabled selected>
                      # of children
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mx-auto">
              <div className="form-control py-1">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-md w-full max-w-xs"
                />
              </div>
              <div className="form-control py-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered input-md w-full max-w-xs"
                />
              </div>
              <div className="form-control py-1">
                <input
                  type="number"
                  placeholder="Phone"
                  className="input input-bordered input-md w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          <div className="card-actions justify-end mx-auto pb-5">
            <button className="btn btn-primary">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};
