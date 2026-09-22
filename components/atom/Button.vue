<script setup lang="ts">
import { NuxtLink } from '#components';

const props = defineProps<{
  // 按鈕 icon
  iconType?: 'arrow' | 'download' | null; // 預設箭頭
  // NuxtLink
  to?: string | Record<string, string | number | boolean>;
  // button
  type?: 'button' | 'submit' | 'reset';
  // a
  href?: string;
  target?: string;
  rel?: string;
  // 是否禁用
  disabled?: boolean;
}>();

const tag = computed(() => {
  if (props.href) return 'a';
  if (props.to) return NuxtLink;
  return 'button';
});
</script>

<template>
  <component
    :is="tag"
    v-bind="{
      to,
      href,
      target: target || (href ? '_blank' : undefined),
      rel: rel || (href ? 'noopener noreferrer' : undefined),
      type: !to && !href ? type || 'button' : undefined,
      disabled: disabled,
    }"
    class="icon-btn font-fusion-pixel"
    :class="[iconType ? `icon-btn--${iconType}` : '']"
  >
    <span>
      <slot />
    </span>
  </component>
</template>

<style lang="postcss">
.icon-btn {
  @apply relative;
  /** 內外兩層框線都是主色深藍 */
  @apply border border-primary-500 max-w-full;
  &::after {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 24px;
    height: 24px;
  }
  &--arrow::after {
    content: url('/assets/images/icons/primary-right-arrow.svg');
  }

  &--download::after {
    content: url('/assets/images/icons/primary-download.svg');
  }

  span {
    @apply flex items-center justify-center h-[63px];
    @apply m-1 py-2 border border-primary-500 text-primary-500;
    background-color: #d9fe68;
  }

  &:disabled {
    /** 停用時內外兩層框線改為淺灰、底色淺灰，文字深灰；外層不填底色以保留兩層框線之間的間隙 */
    @apply cursor-not-allowed;
    border-color: #e2e2e2;

    span {
      border-color: #e2e2e2;
      background-color: #e2e2e2;
      color: #6f6f6f;
    }
  }

  @media (max-width: 1024px) {
    &::after {
      right: 12px;
    }
  }
}
</style>
