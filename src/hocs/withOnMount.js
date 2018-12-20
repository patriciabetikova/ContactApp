import { lifecycle } from "recompose"

const withOnMount = fn =>
  lifecycle({
    componentDidMount() {
      fn(this.props)
    }
  })

export default withOnMount
