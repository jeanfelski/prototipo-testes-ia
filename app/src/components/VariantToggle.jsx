import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const VARIANTS = [
  { id: 'A', label: 'Variante A (Control)' },
  { id: 'B', label: 'Variante B (Experiment)' },
]

/**
 * Floating bottom switcher to toggle between Variant A and Variant B.
 */
export function VariantToggle({ activeVariant, onChange }) {
  return (
    <div
      role="region"
      aria-label="A/B Variant Switcher"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="inline-flex items-center gap-1 rounded-full border border-[#E2E8F0] bg-white/95 p-1 shadow-sm backdrop-blur-sm">
        {VARIANTS.map((variant) => {
          const isActive = activeVariant === variant.id
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onChange(variant.id)}
              aria-pressed={isActive}
              className={cn(
                'cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors',
                isActive
                  ? 'bg-[#0F172A] text-white'
                  : 'text-[#64748B] hover:bg-[#F4F6F8] hover:text-[#0F172A]'
              )}
            >
              {variant.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
