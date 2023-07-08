
<script>
  import Giscus from '@giscus/svelte';
  import { settings } from '../store.ts';
</script>

<h1>Comments</h1>
<Giscus
id="comments"
repo="AdamWorley/Blog"
repoId="R_kgDOIcQuRw"
category="Announcements"
categoryId="DIC_kwDOIcQuR84CXvRW"
mapping="pathname"
term="Welcome to giscus!"
reactionsEnabled="1"
emitMetadata="0"
inputPosition="top"
theme={$settings.darkModeEnabled ? "dark_protanopia" : "light"}
lang="en"
loading="lazy"/>