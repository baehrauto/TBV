import { StatsData } from '@/types'
import { formatNumber } from '@/lib/utils'

const stats: StatsData = {
  projectsDelivered: 150,
  totalSquareFootage: 2500000,
  projectValue: 500000000,
}

export default function StatsBand() {
  return (
    <div className="bg-red-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Government Agencies
            </h2>
            <p className="mt-4 text-lg leading-8 text-red-100">
              Our track record speaks for itself with successful project delivery and client satisfaction.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-red-100">Projects Delivered</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                {formatNumber(stats.projectsDelivered)}+
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-red-100">Total Square Footage</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                {formatNumber(stats.totalSquareFootage)}+ sq ft
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-red-100">Project Value</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                ${formatNumber(stats.projectValue / 1000000)}M+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
