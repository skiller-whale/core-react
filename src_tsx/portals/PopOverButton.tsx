import { type FC, type MouseEventHandler, useState } from "react"
import PopOver from "./PopOver"

type Props = {
  info: string
  label: string
  onPress: (event: React.SyntheticEvent) => void
  popOverDisplayed: boolean
}

const InfoButton: FC<Props> = ({ info, label, onPress, popOverDisplayed }) => {
  const [buttonBoundingRect, setButtonBoundingRect] = useState(null)

  const onClickButton: MouseEventHandler<HTMLButtonElement> = (event) => {
    const buttonBoundingRect = event.currentTarget.getBoundingClientRect()
    setButtonBoundingRect(buttonBoundingRect)
    onPress(event)
  }

  return (
    <div className="relative">
      <button
        className="rounded px-3 py-2 text-white bg-blue-600"
        onClick={onClickButton}
      >
        {label}
      </button>
      {popOverDisplayed ? (
        <PopOver info={info} buttonBoundingRect={buttonBoundingRect} />
      ) : null}
    </div>
  )
}

export default InfoButton
