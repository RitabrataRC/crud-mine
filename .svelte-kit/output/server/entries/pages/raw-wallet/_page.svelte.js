import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import "@bsv/sdk";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let WIF;
  let address;
  return `<section class="flex flex-col items-center mt-10 space-y-6"><button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300" data-svelte-h="svelte-1bvv77n">Generate New Wallet Keys</button> <p class="text-lg text-gray-800 bg-yellow-100 p-2 rounded-lg shadow-md"><strong data-svelte-h="svelte-1pgmbw1">Private Key WIF format:</strong> ${escape(WIF)}</p> <p class="text-lg text-gray-800 bg-yellow-100 p-2 rounded-lg shadow-md"><strong data-svelte-h="svelte-1xbhnyp">Your Bitcoin Address:</strong> ${escape(address)}</p></section>`;
});
export {
  Page as default
};
