import { type FC } from "react"
import PopOverButton from "./PopOverButton"

type Props = {
  title: string
  label: string
  text: string
  info: string
  img: string
  infoDisplayed: boolean
  onDisplayInfo: (event: React.SyntheticEvent) => void
}

const Card: FC<Props> = ({
  title,
  label,
  text,
  info,
  img,
  infoDisplayed,
  onDisplayInfo,
}) => {
  const showImage = false // toggle this when instructed

  const hideOverflow = false // toggle this when instructed

  return (
    <div className="border border-gray-400 flex flex-col w-72">
      <h4 className="font-semibold text-lg bg-gray-200 p-3">{title}</h4>
      <div
        className={`p-3 bg-cyan-900 relative ${
          hideOverflow ? "overflow-hidden" : ""
        }`}
      >
        {showImage ? (
          <img
            alt="should be cropped by container overflow:hidden style"
            src={img}
            className="absolute max-w-none w-72 inset-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        ) : null}
        <div className="flex-1 relative pr-8 pb-3">
          <h6 className="font-semibold text-white">{label}</h6>
          <p className="text-white">{text}</p>
        </div>
        <div className="flex justify-end align-end">
          <PopOverButton
            popOverDisplayed={infoDisplayed}
            label="More Info"
            info={info}
            onPress={onDisplayInfo}
          />
        </div>
      </div>
    </div>
  )
}

export default Card
