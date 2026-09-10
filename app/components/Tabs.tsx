"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type TabItem = {
  id: string
  label: string
  count?: number
  href: string
}

type TabsProps = {
  items: TabItem[]
  activeId?: string
  variant?: "default" | "segmented"
  className?: string
}

const Tabs = ({
  items,
  activeId,
  variant = "default",
  className = "",
}: TabsProps) => {
  const pathname = usePathname()

  const currentActiveId =
    activeId ??
    [...items]
      .filter((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))
      .sort((firstItem, secondItem) => secondItem.href.length - firstItem.href.length)[0]?.id

  const isSegmented = variant === "segmented"

  return (
    <nav
      className={`max-w-full overflow-x-auto pb-1 ${className}`}
      aria-label="Page navigation"
    >
      <div
        className={`flex min-w-max items-center gap-2 ${isSegmented
            ? "rounded-xl bg-slate-100 p-1"
            : "w-max min-w-full"
          }`}
      >
        {items.map((item) => {
          const isActive = item.id === currentActiveId

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`whitespace-nowrap rounded-md border px-3 py-1.5 text-xs font-medium transition ${isSegmented
                  ? isActive
                    ? "border-white bg-white text-slate-900 shadow-[0_6px_18px_rgba(15,23,42,0.08)]"
                    : "border-transparent bg-transparent text-slate-500 hover:bg-white/70 hover:text-slate-700"
                  : isActive
                    ? "border-[#0f4ed8] bg-[#0f4ed8] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
            >
              {item.label}

              {typeof item.count === "number" && (
                <span> ({item.count})</span>
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Tabs