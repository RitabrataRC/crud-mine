import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `<div class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"><form method="POST" action="?/login" data-svelte-h="svelte-1r6045i"><div class="flex flex-wrap -mx-3 mb-2"><div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">Email</label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Enter email" name="email"></div> <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">Password</label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="Enter password" name="password"></div>  <button type="submit" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded ">Login In</button></div></form> ${form?.success ? ` <p class="pt-2">Logged In. Your balance is ${escape(form?.balance)}!</p>` : ``}</div> <div class="m-20 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"><form method="POST" action="?/pay" data-svelte-h="svelte-1804uvj"><div class="flex flex-wrap -mx-3 mb-2"><div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">Email</label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Enter email" name="email"></div> <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">Password</label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="Enter password" name="password"></div>  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="paymail">Paymail</label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="paymail" type="text" placeholder="Enter paymail" name="paymail"></div> <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="amount">amount</label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="amount" type="text" placeholder="Enter amount" name="amount"></div> <button type="submit" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 ml-2 rounded shadow-md transition duration-300">Pay</button></div></form> ${form?.success ? ` <p class="pt-2 text-green-600 font-semibold">The payment was successful. Here is your <a href="${"https://whatsonchain.com/tx/" + escape(form?.payment, true)}" class="text-blue-500 underline" target="_blank">transaction</a>!</p>` : ``}</div>`;
});
export {
  Page as default
};
