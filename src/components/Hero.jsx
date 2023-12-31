export default function Hero() {
  return (
    <main className="min-h-screen flex flex-wrap bg-custom-background items-center justify-center gap-x-8 gap-y-4">
      <div className="w-600 text-center heroText">
        <h4 className="text-3xl pb-4 text-gray-500">Shop is fun</h4>
        <h1 className="text-5xl uppercase font-bold pb-4">
          browse our premium product
        </h1>
        <p className="text-gray-700">
          Us which over of signs divide dominion deep fill bring the meat beho
          upon own earth without morning over third. Their male dry. They are
          great appear whose land fly grass
        </p>
        <button className="bg-custom-blue text-white rounded-full transition-all duration-500 px-12 py-4 mt-12">
          {" "}
          Browse Now
        </button>
      </div>
    </main>
  );
}
