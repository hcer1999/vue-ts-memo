import DataHelper from './DataHelper';
import ItemData from '../model/ItemData';
import Category from '@/model/CateEnum';

class ActionHelper {
  // 1.负责数据处理
  dataHelper: DataHelper = new DataHelper('memoData', 'id');
  memoList: Array<ItemData>;
  // 2.负责业务处理
  constructor() {
    // 读取本地数据，将笔记数组保存到this.memoList 变量中
    this.memoList = this.readData();
  }
  // 根据id返回对应分类的文本
  getCategoryName(cateId: Category): string {
    const arrNames = ['工作', '生活', '学习'];
    return arrNames[cateId];
  }
  // 读取数据的方法
  readData(): Array<ItemData> {
    // 1.读取本地的Object数组 - dataHelper
    let arrObj = this.dataHelper.readData();
    let arrItem = arrObj.map((ele: any) => {
      let item: ItemData = new ItemData();
      item.id = ele.id;
      item.categoryId = ele.categoryId;
      item.title = ele.title;
      item.content = ele.content;
      item.createTime = ele.createTime;
      return item;
    });
    return arrItem;
  }
  // 添加笔记的方法
  add(item: ItemData): number {
    // 保存到本地，会返回生成的ID值
    item.id = this.dataHelper.addData(item);
    // 将笔记添加到笔记数组中
    this.memoList.push(item);
    // 将笔记数组重新保存到本地
    this.dataHelper.saveData(this.memoList);
    // 返回新笔记的id
    return item.id;
  }
  // 修改笔记数据的方法
  edit(item: ItemData): void {
    // 找出对应要修改的数据
    let editItem: ItemData | undefined = this.memoList.find((ele) => {
      return ele.id === item.id;
    });
    if (editItem) {
      editItem.categoryId = item.categoryId;
      editItem.title = item.title;
      editItem.content = item.content;
      // 将修改后的数据重新保存
      this.dataHelper.saveData(this.memoList);
    }
  }
  // 删除笔记的方法
  remove(id: number): void {
    // 找出id对应的元素下标
    let index = this.memoList.findIndex((ele) => {
      return ele.id === id;
    });
    // 根据下标删除对应元素
    this.memoList.splice(index, 1);
    // 将删除后的数据重新保存到localstorage中
    this.dataHelper.saveData(this.memoList);
  }
}
export default ActionHelper;
