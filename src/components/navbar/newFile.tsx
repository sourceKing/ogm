import DepositQr from "@components/DepositQr";
import DepositModal from "@components/ui/depositModal.astro";
import { Astronav, MenuItems } from "astro-navbar";
import Dropdown from "./dropdown.astro";

<Fragment>
<div class="lg:w-full w-fit flex items-center lg:justify-end justify-start px-5">
{/** FLow for live button click bring up deposit modal with payment addresses and networks */}
<DepositModal id="depositModal" open="Open modal">
<main slot="main" class="w-full grid items-start justify-items-start justify-center min-w-fit overflow-y-scroll h-full relative">
<div class="bg-slate-700/90 p-3">
<label class="grid items-start mt-10 gap-2">
<span class="capitalize lg:text-lg font-bold text-xl mb-1 text-white">BTC DEPOSIT</span>
<DepositQr address={"3KSFShFwm27bGPhfXttPyUGL4kZEmD7E8G"} client: only />
<input type="text" class="bg-slate-800 w-[300px] border-gray-400/50 rounded-md caret-current border px-2 py-3 text-white outline-none font-medium" readonly placeholder="Address" value="3KSFShFwm27bGPhfXttPyUGL4kZEmD7E8G" />
<input type="number" class="bg-slate-800 w-[300px] border-gray-400/50 rounded-md caret-current border px-2 py-3 text-white outline-none font-medium" placeholder="Enter amount to deposit" />
<button class="bg-blue-500 text-white hover:bg-blue-400 px-2 py-1 w-full h-10 active:bg-blue-600 tracking-wide mx-auto">I HAVE MADE THIS DEPOSIT</button>
</label>
<label class="grid items-start mt-10 gap-2">
<span class="capitalize lg:text-lg font-bold text-xl mb-1 text-white">ETH(ERC20) DEPOSIT</span>
<DepositQr address={"0x46c4fB880819F6a77433eF996d317Cc9ABc15391"} client: only />
<input type="text" class="bg-slate-800 w-[300px] border-gray-400/50 rounded-md caret-current border px-2 py-3 text-white outline-none font-medium" readonly placeholder="Address" value="0x46c4fB880819F6a77433eF996d317Cc9ABc15391" />
<input type="number" class="bg-slate-800 w-[300px] border-gray-400/50 rounded-md caret-current border px-2 py-3 text-white outline-none font-medium" placeholder="Enter amount to deposit" />
<button class="bg-blue-500 text-white hover:bg-blue-400 px-2 py-1 w-full h-10 active:bg-blue-600 tracking-wide mx-auto">I HAVE MADE THIS DEPOSIT</button>
</label>
<label class="grid items-start mt-10 gap-2">
<span class="capitalize lg:text-lg font-bold text-xl mb-1 text-white">USDT(ERC20) DEPOSIT</span>
<DepositQr address={"0x46c4fB880819F6a77433eF996d317Cc9ABc15391"} client: only />
<input type="text" class="bg-slate-800 w-[300px] border-gray-400/50 rounded-md caret-current border px-2 py-3 text-white outline-none font-medium" readonly placeholder="Address" value="0x46c4fB880819F6a77433eF996d317Cc9ABc15391" />
<input type="number" class="bg-slate-800 w-[300px] border-gray-400/50 rounded-md caret-current border px-2 py-3 text-white outline-none font-medium" placeholder="Enter amount to deposit" />
<button class="bg-blue-500 text-white hover:bg-blue-400 px-2 py-1 w-full h-10 active:bg-blue-600 tracking-wide mx-auto">I HAVE MADE THIS DEPOSIT</button>
</label>
</div>
</main>
<button slot="close" class="mx-auto text-center absolute right-0 top-1">
<Icon name="mdi:window-close" class="h-10 w-10 text-slate-300" />
</button>
</DepositModal>
<Astronav>
<MenuItems>
<div class="lg:w-full grid items-center justify-start w-fit">
<Dropdown title={title} />
</div>
</MenuItems>
</Astronav>
</div>

</Fragment>;
