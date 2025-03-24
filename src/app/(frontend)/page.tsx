export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-black to-[#2C2C2C] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B87333]">
          Struggling with patchy beard or thinning hair?
        </h1>
        <p className="text-2xl font-semibold text-white mb-4">
          BeGro is your go-to solution!
        </p>
        <img
          src="/images/hand-holding-begro.jpg"
          alt="Hand holding BeGro serum"
          className="w-full max-w-sm rounded-xl shadow-2xl border border-[#B87333] mb-6"
        />
        <p className="text-lg text-gray-300 max-w-xl mb-4">
          Use it and watch your hair grow shinier and stronger 💪
        </p>
        <p className="text-xl text-[#B87333] font-medium mb-8">
          Order now and let your transformation begin!! 🔥👌
        </p>
        <button className="bg-[#B87333] hover:bg-[#A25E2B] text-black px-8 py-3 rounded-full text-lg font-bold transition duration-300 shadow-md">
          Order Now
        </button>
      </section>

      {/* Trust Badges */}
      <section className="flex flex-wrap justify-center gap-6 py-12 bg-[#2C2C2C]">
        {['Free Shipping over 800 EGP', '100% Natural Ingredients', '365-Day Guarantee'].map((badge, index) => (
          <div key={index} className="bg-black px-6 py-4 rounded-xl border border-[#B87333] text-sm md:text-base">
            {badge}
          </div>
        ))}
      </section>

      {/* Featured Product Banner */}
      <section className="py-16 px-6 text-center bg-black border-t border-[#B87333]">
        <h2 className="text-3xl font-bold text-[#B87333] mb-4">
          Free Delivery on Orders Over 800 EGP
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Enjoy quick, cost-free shipping when you spend 800 EGP or more on any Be-Gro products.
        </p>
      </section>

      {/* Placeholder for other sections (Best Sellers, Blog, etc.) */}
      <section className="py-20 px-6 text-center text-gray-400">
        <p>More sections like Best Sellers, Categories, and Blog will go here...</p>
      </section>
    </main>
  );
}
