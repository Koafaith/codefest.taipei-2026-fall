import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

type DialogName = 'apply' | 'news' | 'mobileMenu' | 'winningTeam' | 'photo';

export const useDialogStore = defineStore('dialogStore', () => {
  const activeDialog = ref<DialogName | null>(null);

  // 控制 body scroll
  watch(activeDialog, val => {
    document.body.style.overflow = val ? 'hidden' : '';
  });

  const openDialog = (name: DialogName) => {
    activeDialog.value = name;
  };

  const closeDialog = () => {
    activeDialog.value = null;
  };

  return {
    activeDialog,
    openDialog,
    closeDialog,
  };
});