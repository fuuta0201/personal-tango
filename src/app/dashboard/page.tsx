// UI
import DashboardTangoCard from './_components/DashboardTangoCard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Page() {
  return (
    <main className="pt-16">
      <div className="min-h-full">
        <div>
          <div className="mx-auto flex items-center justify-between px-4 py-6 sm:px-6 md:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            <Dialog>
              <DialogTrigger asChild>
                <button className="col-start-1 row-start-3 inline-flex w-36 items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                  プロジェクト作成
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-full px-4 py-6 md:max-w-7xl md:px-8">
            <ul className="flex flex-col gap-8 md:grid md:grid-cols-3 md:justify-center">
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
