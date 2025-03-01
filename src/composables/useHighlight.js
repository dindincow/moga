import { computed } from "vue";
import { useRoute } from "vue-router";

export function useHighlight(path) {
  const route = useRoute();

  // 判斷當前路由是否包含 `gameSetting`
  const isActive = computed(() => route.path.includes(path));

  return { isActive };
}
