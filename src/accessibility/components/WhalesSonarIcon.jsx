const WhaleIcon = ({ whale, centerX, centerY, radius }) => {
  const x = ((-(centerX - whale.location.x) * 100) / radius + 100) / 2
  const y = ((-(centerY - whale.location.y) * 100) / radius + 100) / 2

  return (
    <div key={whale.id} className={`absolute left-[${x}%] top-[${y}%]`}>
      <span className={`text-[${100 / radius}rem]`}>
        {whale.species.includes("Dolphin") ? "🐬" : "🐋"}
      </span>
    </div>
  )
}

export default WhaleIcon
