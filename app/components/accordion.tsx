"use client"

import {
  ReactNode,
  useId,
  useState,
} from "react"
import { ChevronDown } from "lucide-react"

export type AccordionItemData = {
  id: string
  header: ReactNode
  content: ReactNode
  disabled?: boolean
}

type AccordionProps = {
  items: AccordionItemData[]

  /**
   * Open one item by default.
   */
  defaultOpenId?: string

  /**
   * Open multiple items by default.
   * Used when multiple=true.
   */
  defaultOpenIds?: string[]

  /**
   * Allow multiple accordion items to be open.
   */
  multiple?: boolean

  /**
   * Called whenever the open items change.
   */
  onChange?: (openIds: string[]) => void

  /**
   * Visual style.
   */
  variant?: "default" | "borderless" | "separated"

  /**
   * Additional classes for the accordion wrapper.
   */
  className?: string
}

const Accordion = ({
  items,
  defaultOpenId,
  defaultOpenIds,
  multiple = false,
  onChange,
  variant = "default",
  className = "",
}: AccordionProps) => {
  const uniqueId = useId()

  const initialOpenIds =
    defaultOpenIds ??
    (defaultOpenId ? [defaultOpenId] : [])

  const [openIds, setOpenIds] = useState<string[]>(initialOpenIds)

  const toggleItem = (id: string) => {
    const isOpen = openIds.includes(id)

    let nextOpenIds: string[]

    if (multiple) {
      nextOpenIds = isOpen
        ? openIds.filter((openId) => openId !== id)
        : [...openIds, id]
    } else {
      nextOpenIds = isOpen ? [] : [id]
    }

    setOpenIds(nextOpenIds)
    onChange?.(nextOpenIds)
  }

  const getContainerClasses = () => {
    switch (variant) {
      case "borderless":
        return "overflow-hidden"

      case "separated":
        return "space-y-2"

      default:
        return "space-y-2"
    }
  }

  const getItemClasses = () => {
    switch (variant) {
      case "borderless":
        return "overflow-hidden bg-white"

      case "separated":
        return "overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]"

      default:
        return "overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]"
    }
  }

  return (
    <div className={`${getContainerClasses()} ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)

        const panelId = `accordion-${uniqueId}-panel-${item.id}`
        const buttonId = `accordion-${uniqueId}-button-${item.id}`

        return (
          <section
            key={item.id}
            className={getItemClasses()}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                disabled={item.disabled}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={`
                  flex w-full items-center justify-between
                  gap-3 px-4 py-3 text-left
                  text-sm font-medium text-slate-900
                  transition
                  hover:bg-slate-50
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#0f4ed8]
                  focus-visible:ring-inset
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                `}
                onClick={() => toggleItem(item.id)}
              >
                <span className="min-w-0 flex-1">
                  {item.header}
                </span>

                <ChevronDown
                  aria-hidden="true"
                  className={`
                    h-4 w-4 shrink-0
                    text-slate-500
                    transition-transform duration-200
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-slate-100 bg-slate-50/40 px-4 py-3"
              >
                {item.content}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

export default Accordion