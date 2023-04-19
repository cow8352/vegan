import { withRouter } from '../utils/withRouter'

function ProductBracelet(props) {
  console.log(props)
  return (
    <>
      <h1>ProductBracelet</h1>
    </>
  )
}

// 高階元件樣式，以此才能得到props中綁字router給的三個屬性值
export default withRouter(ProductBracelet)