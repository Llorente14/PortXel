import { useState } from "react";
const FormContact = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <FormHeader></FormHeader>
        <FormBody></FormBody>
      </div>
    </>
  );
};

const FormHeader = () => {
  return (
    <div className="mb-[1em] lg:mb-0">
      <h1 className="text-2xl lg:text-4xl text-gray-100 font-light">
        Let's Create Something{" "}
        <span className="relative inline-block">
          {/* Efek neon bayangan (blur) */}
          <span className="absolute inset-0 flex items-center justify-center blur-sm opacity-75 text-blue-800">
            Amazing
          </span>
          {/* Teks utama dengan efek drop-shadow */}
          <span className="relative flex items-center justify-center text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
            Amazing
          </span>
        </span>
      </h1>

      <h2 className="text-lg lg:text-2xl text-gray-200 font-light leading-normal lg:mt-2">
        With Me!
      </h2>
    </div>
  );
};

export const FormBody = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    noPhone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data form:", formData);

    // Opsional: reset form setelah submit
    setFormData({
      name: "",
      email: "",
      noPhone: "",
      budget: "",
      message: "",
    });
  };

  return (
    <>
      <form
        action=""
        className="grid grid-cols-1 grid-rows-6 gap-3 lg:mt-4 lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name-input" className="text-sm text-gray-100">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="Enter your name  here . . ."
            className="bg-transparent border-b border-gray-500 outline-none text-gray-50 text-sm py-1 focus:border-blue-600 transition duration-300 ease-in-out"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email-input" className="text-sm text-gray-100">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Enter your email here . . ."
            className="bg-transparent border-b border-gray-500 outline-none text-gray-50 text-sm py-1 focus:border-blue-600 transition duration-300 ease-in-out"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="noPhone-input" className="text-sm text-gray-100">
            No. Phone
          </label>
          <input
            type="tel"
            name="noPhone"
            id="noPhone-input"
            placeholder="Enter your no telp  here . . ."
            className="bg-transparent border-b border-gray-500 outline-none text-gray-50 text-sm py-1 focus:border-blue-600 transition duration-300 ease-in-out"
            required
            value={formData.noPhone}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="budget-input" className="text-sm text-gray-100">
            Budget
          </label>
          <input
            type="number"
            name="budget"
            id="budget-input"
            placeholder="Enter your budget here . . ."
            className="bg-transparent border-b border-gray-500 outline-none text-gray-50 text-sm py-1  focus:border-blue-600 transition duration-300 ease-in-out appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]"
            required
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col gap-2 row-span-2   lg:col-span-2 w-full ">
          <label htmlFor="message-input" className="text-sm text-gray-100  ">
            Message
          </label>

          <textarea
            name="message"
            id="message-input"
            placeholder="Enter your message for yout project or anything here . . ."
            className="overflow-hidden bg-transparent border-b border-gray-500 outline-none text-gray-50 text-sm h-[20vh] w-full resize-none placeholder-gray-400 focus:border-blue-600 transition duration-300 ease-in-out"
            minLength={5}
            maxLength={700}
            rows={10} // Bisa diubah sesuai kebutuhan agar tetap terlihat panjang
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </form>
      <FormFoot handleSubmit={handleSubmit}></FormFoot>
    </>
  );
};

export const FormFoot = ({ handleSubmit }) => {
  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className="rounded-full self-start py-2 px-8  bg-blue-600 outline-none border border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ease-in-out lg:mt-4 "
    >
      Submit
    </button>
  );
};

export default FormContact;

{
  /* <div className="flex flex-col gap-2 row-span-2  lg:col-span-2">
<label htmlFor="message-input" className="text-sm text-gray-100">
  Message
</label>
<input
  type="text"
  name="message"
  id="message-input"
  placeholder="Enter your message for yout project or anything here . . ."
  className="bg-transparent border-b border-gray-500 outline-none text-gray-50 text-sm pb-14 lg:pb-20"
  minLength={5}
  maxLength={300}
  required
  value={formData.message}
  onChange={handleChange}
/>
</div> */
}
