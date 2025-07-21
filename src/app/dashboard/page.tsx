import Link from "next/link";

// UI
import DashboardTangoCard from "./_components/DashboardTangoCard";

export default function Page() {
  return (
    <main className="pt-16">
      <div className="min-h-full">
        <div>
          <div className="mx-auto md:max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-full md:max-w-7xl px-4 py-6 md:px-8">
            <ul className="flex flex-col md:grid md:grid-cols-3 md:justify-center gap-8">
              {Array(20)
                .fill(0)
                .map((project, index) => (
                  <li key={index}>
                    <DashboardTangoCard
                      title="英単語vol.1"
                      description="教科書p104~120の英単語"
                      link={`/projects/${index}`}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
