import Image from "next/image"

export default function FlyerCard({ logoSrc, storeName, flyersCount, offersCount }: any) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center min-h-[200px] justify-between">
      <div className="flex-shrink-0 mb-4">
        <Image
          src={logoSrc}
          alt={`${storeName} logo`}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-1">{storeName}</h3>
        <p className="text-card-yellow-text text-sm">
          {flyersCount} flyers | {offersCount} Offer(s)
        </p>
      </div>
    </div>
  )
}
