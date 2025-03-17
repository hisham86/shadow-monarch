import { useState } from 'react'

const MenuItem = ({ text, selected, onClick }) => (
  <div 
    className={`cursor-pointer transition-all duration-300 ${
      selected 
        ? 'text-shadow-light text-2xl font-bold animate-glow'
        : 'text-shadow-accent hover:text-shadow-light text-xl'
    }`}
    onClick={onClick}
  >
    {selected ? '► ' : ''}{text}
  </div>
)

export default function MainMenu() {
  const [selectedItem, setSelectedItem] = useState(0)
  const menuItems = ['New Game', 'Continue', 'Settings', 'Credits']

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-shadow-primary/80 to-shadow-primary z-20">
      {/* Title */}
      <div className="mb-20 text-center">
        <h1 className="text-6xl font-bold text-shadow-light mb-4 animate-glow">
          Shadow Monarch's Gambit
        </h1>
        <p className="text-xl text-shadow-accent">
          Rise as the Shadow Sovereign
        </p>
      </div>

      {/* Menu Items */}
      <div className="space-y-6">
        {menuItems.map((item, index) => (
          <MenuItem
            key={item}
            text={item}
            selected={selectedItem === index}
            onClick={() => setSelectedItem(index)}
          />
        ))}
      </div>

      {/* Version */}
      <div className="absolute bottom-4 right-4 text-shadow-accent text-sm">
        v0.1.0 Alpha
      </div>

      {/* Purple Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-shadow-accent/20 via-transparent to-transparent opacity-50" />
      </div>
    </div>
  )
} 