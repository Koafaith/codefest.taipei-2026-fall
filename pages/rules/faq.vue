<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
// 動態 :src 不會經過 Vite 的路徑解析，必須先 import 成變數再綁定
import iconMinus from '@/assets/images/icons/primary-minus.svg';
import iconPlus from '@/assets/images/icons/primary-plus.svg';

const { tm } = useI18n();

/**
 * 取得 FAQ 列表並確保為陣列格式
 */
const getFaqList = () => {
  const data = tm('faq.list');
  return Array.isArray(data) ? data : Object.values(data);
};

const faqList = computed(() => getFaqList());
const activeTab = ref(0);
</script>

<template>
  <div>
    <div class="lg:block hidden p-10">
      <p class="font-fusion-pixel text-2xl text-white text-center">
        {{ tm('faq.section_title') }}
      </p>
    </div>

    <div class="flex">
      <div
        v-for="(item, index) in faqList"
        :key="index"
        v-kb-focus="{
          id: `rules-faq-${index + 2}-50`,
          x: index + 2,
          y: 50,
        }"
        class="w-1/2 cursor-pointer transition-colors text-center p-5 border-t border-b border-white"
        :class="[
          index > 0 ? 'border-l border-white' : '',
          activeTab === index ? 'bg-[#d9fe68] text-primary-500 font-bold' : 'text-primary-500',
        ]"
        @click="activeTab = index"
      >
        {{ item.type }}
      </div>
    </div>

    <template v-for="(item, index) in faqList[activeTab]?.list" :key="`${activeTab}-${index}`">
      <Disclosure v-slot="{ open }" :default-open="index === 0">
        <DisclosureButton
          v-kb-focus="{
            id: `rules-faq-${activeTab + 2}-${index + 51}`,
            x: activeTab + 2,
            y: index + 51,
          }"
          class="w-full min-h-16 flex items-center justify-between lg:px-10 p-3 pr-8 border-t border-b border-t-white border-b-white lg:last:mb-40"
          :class="{ 'bg-[#d9fe68]': open }"
        >
          <p class="text-left text-lg text-white">{{ index + 1 }}. {{ item.title }}</p>
          <img
            :src="open ? iconMinus : iconPlus"
            :alt="open ? '收合常見問題' : '展開常見問題'"
            class="absolute right-5 lg:w-[40px] w-[20px]"
          />
        </DisclosureButton>
        <DisclosurePanel>
          <div class="relative w-full py-4 lg:px-10 px-3 border-b border-white">
            <AtomSaveHtml :html="item.content" />
          </div>
        </DisclosurePanel>
      </Disclosure>
    </template>
  </div>
</template>
