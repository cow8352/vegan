import { withRouter } from '../utils/withRouter'

function ProductHat(props) {
  console.log(props)
  return (
    <>
      <h1>ProductHat</h1>
    </>
  )
}

// 高階元件樣式，以此才能得到props中綁字router給的三個屬性值
export default withRouter(ProductHat)