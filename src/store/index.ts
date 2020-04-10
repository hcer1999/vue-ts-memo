import Vuex from 'vuex';
import Vue from 'vue';
import ActionHelper from './ActionHelper';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 控制添加对话框组件的显示
    isShow: false,
    aHelper: new ActionHelper(),
    transMemo: null,
    // 控制当前显示的分类笔记信息
    filterCateId: -1
  },
  mutations: {
    showEditMemo(state: any, editMemo: any) {
      state.transMemo = editMemo;
      state.isShow = false;
    },
    filterCateIdChange(state: any, newCateId: number) {
      console.log(newCateId);

      state.filterCateId = newCateId;
    }
  }
});

export default store;
