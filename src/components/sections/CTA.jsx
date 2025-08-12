"use client";

const CTA = () => {
  return (
    <section className="bg-[#f7f8f3] py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div
          className="rounded-xl bg-cover bg-center p-10 flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            We're ready to start.
          </h2>
          <p className="text-gray-200 mb-5">
            Transform your home to zen garden
          </p>
          <a
            href="#"
            className="bg-lime-400 hover:bg-lime-500 text-green-900 font-semibold px-5 py-2 rounded"
          >
            Make an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
