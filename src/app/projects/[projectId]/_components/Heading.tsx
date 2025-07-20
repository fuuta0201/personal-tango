export default function Heading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-[1fr_6rem] md:grid-cols-2 items-center justify-between mx-auto">
        <h1 className="col-start-1 row-start-1 text-3xl font-bold tracking-tight text-gray-900">
          英単語vol.1
        </h1>
        <p className="col-start-1 row-start-2 leading-7 [&:not(:first-child)]:mt-6">
          教科書p104~120の英単語
        </p>
        <div className="relative w-20 h-20 md:w-32 md:h-32 ml-auto rounded-full bg-gray-100 col-start-2 row-span-2">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#34d399 0% 75%, #e5e7eb 75% 100%)`,
            }}
          />
          <div className="absolute inset-2 md:inset-3 rounded-full bg-white flex items-center justify-center text-lg font-semibold text-green-500">
            75%
          </div>
        </div>
      </div>
    </div>
  );
}
