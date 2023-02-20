import { Component, createRef } from "react"

class ScrollableContainerClass extends Component {
  divRef
  constructor(props) {
    super(props)
    this.divRef = createRef()
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
