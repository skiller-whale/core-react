import {
  Component,
  createRef,
  type PropsWithChildren,
  type RefObject,
} from "react"

class ScrollableContainerClass extends Component<PropsWithChildren<{}>> {
  private readonly divRef: RefObject<HTMLDivElement>
  constructor(props) {
    super(props)
    this.divRef = createRef<HTMLDivElement>()
  }

  scrollTop() {
    if (this.divRef.current) {
      this.divRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }
  render() {
    return (
      <div ref={this.divRef} className="relative overflow-auto max-h-[60vh]">
        {this.props.children}
      </div>
    )
  }
}

export default ScrollableContainerClass
