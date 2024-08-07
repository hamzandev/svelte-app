<script>
  // @ts-nocheck

  import {page} from "$app/stores";

  const langList = {
    en: "Hello!",
    fr: "Bonjour!",
    de: "Hallo!",
    id: "Halo!",
  };

  const {lang} = $page.params;
</script>

<div>
  <h1>{langList[lang]}</h1>
</div>
