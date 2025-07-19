import Link from "next/link";

type Props = {
  title: string;
  description: string;
  link: string;
};

export default function DashboardTangoCard({
  title,
  description,
  link,
}: Props) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm grid grid-cols-[1fr_6rem] justify-between gap-4">
      <a href="#" className="col-start-1 row-start-1">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 col-start-1 row-start-2">
        {description}
      </p>
      <Link
        href={link}
        className="w-36 col-start-1 row-start-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        単語帳を見る
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
      <span className="col-start-2 row-start-1 w-24 h-6 ml-auto rounded-full flex items-center justify-center bg-[#34d399] px-2 py-0.5 text-xs font-medium text-white">
        English
      </span>
      <div className="relative w-20 h-20 ml-auto mt-auto rounded-full bg-gray-100 col-start-2 row-span-2">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#34d399 0% 75%, #e5e7eb 75% 100%)`,
          }}
        />
        <div className="absolute inset-3 rounded-full bg-white flex items-center justify-center text-lg font-semibold text-green-500">
          75%
        </div>
      </div>
    </div>
  );
}
