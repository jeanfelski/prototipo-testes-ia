import { useState } from 'react'
import { VariantToggle } from './components/VariantToggle'
import { VariantA } from './variants/VariantA'
import { VariantB } from './variants/VariantB'

export default function App() {
  const [activeVariant, setActiveVariant] = useState('A')

  return (
    <div className="min-h-screen bg-[#F4F6F8] pb-20">
      {activeVariant === 'A' ? <VariantA /> : <VariantB />}
      <VariantToggle activeVariant={activeVariant} onChange={setActiveVariant} />
    </div>
  )
}
