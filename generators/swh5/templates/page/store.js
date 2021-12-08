import CacheableStore from "stores/cacheable.js"
import Actions from "./action"

class Store extends CacheableStore {
  init() {
    this.listenables = Actions
    this.state = {
      // TODO init state
      // /**
      //  * 瀑布流的商品数据
      //  */
      // goods_list: []
    }
  }

  // TODO set your state
  // onGetDataCompleted(data) {
  //   this.setState({xxx})
  // }
}

export default Store
