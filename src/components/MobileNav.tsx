import { Show, createSignal, For } from "solid-js";
import { navLinks } from "../constants";

export function MobileNav() {
  const [open, setOpen] = createSignal(false);

  const handleClick = () => {
    setOpen(!open());
  };
  return (
    <div class="text-white md:hidden bg-gray-950">
      <div class="flex items-center justify-between px-4 py-3">
        <span class="font-semibold">Casa Real</span>
        <button class="block" onclick={handleClick}>
          <svg
            class="block h-6 w-6 fill-none stroke-[1.5px] stroke-current"
            viewBox="0 0 24 24"
          >
            <Show
              when={open()}
              fallback={
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              }
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </Show>
          </svg>
        </button>
      </div>
      <Show when={open()}>
        <div class="px-2 pb-3 pt-2 grid grid-cols-1 gap-1 bg-gray-950">
          <For each={navLinks}>
            {(link) => (
              <a
                href={link.href}
                class="block rounded px-2 py-1 text-white hover:bg-gray-800"
              >
                {link.name}
              </a>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}
