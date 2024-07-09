import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="bg-white border-gray-200" data-svelte-h="svelte-ns5vu9"><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"><img src="https://tsoc.dev/TSoC_Favicon.svg" class="h-8" alt="TSoC Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap ">TSoC Fullstack Application</span></a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false"><span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button> <div class="hidden w-full md:block md:w-auto" id="navbar-default"><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"><li><a href="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a></li> <li><a href="/profiles" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Profiles</a></li> <li><a href="/raw-wallet" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Raw Wallet</a></li> <li><a href="/cloud-wallet" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Cloud Wallet</a></li> </ul></div></div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 " data-svelte-h="svelte-1upwq8t"><span class="text-sm text-gray-500 sm:text-cente">© 2024 <a href="https://tsoc.dev" class="hover:underline">Timechain Summer of Code™</a>. All Rights Reserved.</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0"><li><a href="https://tsoc.dev" class="hover:underline me-4 md:me-6">About</a></li> <li><a href="https://linktr.ee/timechainsummerofcode2024" class="hover:underline me-4 md:me-6">Register for TSoC</a></li></ul></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};