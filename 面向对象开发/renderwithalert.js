import Render from './render.js'
// RenderWithAlert 继承了 Render
class RenderWithAlert extends Render {
  constructor(list) {
    super(list)
  }
  changeItem(key) {
    super.changeItem(key)
    alert(key)
  }
}
export default RenderWithAlert