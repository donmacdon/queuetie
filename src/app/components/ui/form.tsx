import { db } from '@/app/lib/db';
import { FormEvent } from 'react'


export const Form = async () => {
  const resto = await db.restaurant.findFirst({
    where: {},
  });



  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/restaurant//submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <>
      <form>
        <div className="container mx-auto pb-5 md:max-l:flex sm:max-sm:flex">
          <div className="card shadow-xl">
            <div className="card-body">
              <article className="prose max-w-none">
                <h2 className=" text-center"></h2>
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
                      <option disabled defaultValue={0}>
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
                      <option disabled defaultValue={0}>
                        # of children
                      </option>
                      <option>0</option>
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
      </form>
    </>
  );
};
