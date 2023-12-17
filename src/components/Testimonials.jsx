import React from "react";

const Testimonials = () => (
  <div
    id="testimonials"
    className="min-h-screen bg-[#F5F5DC] flex items-center justify-center"
  >
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#2F4F4F]">
        <span className="border-b-4 border-[#3CB371] pb-1">Testimonials</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-md shadow-md cursor-default">
          <p className="text-left text-[#2F4F4F] font-bold">Dr Sebastian Rumsby, Author</p>
          <h2 className="text-left text-[#2F4F4F] mb-4">
            Development in Spirit: Religious Transformation and Everyday
            Politics in Vietnam's Highlands
          </h2>
          <p className="text-gray-800">
            Dear Mamta, Thanks for your swift delivery, it looks really good.
            I'm impressed by your work and will be happy to recommend you to any
            colleagues who are writing a book.
          </p>
        </div>
        <div className="bg-white p-10 rounded-md shadow-md cursor-default">
          <p className="text-left text-[#2F4F4F] font-bold">Martin Goldberg, Author</p>
          <h2 className="text-left text-[#2F4F4F] mb-4">Workplace Trap</h2>
          <p className="text-gray-800">
            Mamta, Thank you so much. I am super happy with this, both the
            product and the process, you making this easy for me.
          </p>
        </div>
        <div className="bg-white p-10 rounded-md shadow-md cursor-default">
          <p className="text-left text-[#2F4F4F] font-bold">John Wilson, Author</p>
          <h2 className="text-left text-[#2F4F4F] mb-4">Ecocide</h2>
          <p className="text-gray-800">
            Hi Mamta, I am very impressed, very pleased. Thank you for your
            excellent Index. I do like the layout, so clear simple, direct, and
            self-explanatory. I love the extra information in brackets. It is
            indeed a very helpful index.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;