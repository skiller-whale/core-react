import {
  Component,
  type PropsWithChildren,
  type RefObject,
  createRef,
} from "react"

class ScrollableContainerClass extends Component<PropsWithChildren<{}>> {
  private readonly divRef: RefObject<HTMLDivElement>

  constructor(props: PropsWithChildren<{}>) {
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
      <div ref={this.divRef} className="relative overflow-auto h-96">
        {this.props.children}
      </div>
    )
  }
}

export default ScrollableContainerClass
