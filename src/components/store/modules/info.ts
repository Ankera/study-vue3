import { defineStore } from "pinia";

const useInfoStore = defineStore("info", {
  state: () => {
    return {
      count: 99,
      arr: [2,3,4,5],
    };
  },
  actions: {
    updateNum() {
        this.count++;
    },
  },
  getters: {
    countPX(): string {
        return this.count + "px";
    }
  },
});

export default useInfoStore;
