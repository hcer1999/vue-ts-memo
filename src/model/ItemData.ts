import CateEnum from './CateEnum';
class ItemData {
  id: number;
  categoryId: CateEnum;
  title: string;
  content: string;
  createTime: string;
  constructor(
    id: number = -1,
    categoryId: CateEnum = -1,
    title: string = '',
    content: string = ''
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = this.formatDate(Date.now());
  }
  formatDate(value: number): string {
    const date = new Date(value);
    return `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  }
}
export default ItemData;
