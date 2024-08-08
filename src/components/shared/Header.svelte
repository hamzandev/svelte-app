<script lang="ts">
  import {page} from "$app/stores";
  import ModeSwitcher from "$lib/components/ModeSwitcher.svelte";
  import {Input} from "$lib/components/ui/input";
  import logo from "$lib/images/svelte-logo.svg";
  import {setContext} from "svelte";
  import type {Link} from "../../types";
  import CartButton from "../custom/CartButton.svelte";

  setContext("cart-ctx", 12);

  const links: Array<Link> = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Products",
      url: "/products",
    },
    {
      label: "Users",
      url: "/users",
    },
    {
      label: "Hello World",
      url: "/hello-world",
    },
    {
      label: "Docs",
      url: "/docs",
    },
  ];
</script>

<header class="py-3 border-b border-b-muted">
  <div class="container mx-auto flex items-center">
    <div class="w-1/12">
      <a
        href="https://kit.svelte.dev"
        class="flex items-center space-x-2 w-6 h-6"
      >
        <img src={logo} alt="SvelteKit" />
        <span class="text-lg font-bold">Svelte</span>
      </a>
    </div>

    <nav class="w-7/12 ps-10">
      <ul class="flex items-center space-x-8 font-bold uppercase text-sm">
        {#each links as link}
          <li
            aria-current={$page.url.pathname === link.url ? "page" : undefined}
          >
            <a href={link.url}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <div class="w-4/12 flex justify-end space-x-2 items-center">
      <Input placeholder="🔍 Search..." type="search" />
      <span class="inline-block">
        <ModeSwitcher />
      </span>
      <CartButton />
    </div>
  </div>
</header>
