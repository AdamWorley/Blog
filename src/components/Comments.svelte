<script lang="ts">
  import Giscus from '@giscus/svelte';
  import { settings } from '../store';
</script>

<div>
  <Giscus
  id="comments"
  repo="AdamWorley/Blog"
  repoId="R_kgDOIcQuRw"
  category="Blog Post Comments"
  categoryId="DIC_kwDOIcQuR84CXxT7"
  mapping="pathname"
  reactionsEnabled='1'
  emitMetadata="0"
  inputPosition="top"
  theme={$settings.darkModeEnabled == "true" ? "dark_protanopia" : "light"}
  lang="en"
  loading="lazy"/>
</div>