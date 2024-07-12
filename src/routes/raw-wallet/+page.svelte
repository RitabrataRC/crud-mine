<script lang="ts">
  import { PrivateKey } from '@bsv/sdk'
  
  let WIF: string
  let address: string
  
  function createKeys() {
      const privKey = PrivateKey.fromRandom()
      WIF = privKey.toWif()
      console.log("Private Key WIF format is ", WIF)
      address = privKey.toAddress()
      console.log("Your bitcoin address is ", address)
  }
</script>

<section class="flex flex-col items-center mt-10 space-y-6">
  <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300" on:click={createKeys}>
      Generate New Wallet Keys
  </button>
  <p class="text-lg text-gray-800 bg-yellow-100 p-2 rounded-lg shadow-md"><strong>Private Key WIF format:</strong> {WIF}</p>
  <p class="text-lg text-gray-800 bg-yellow-100 p-2 rounded-lg shadow-md"><strong>Your Bitcoin Address:</strong> {address}</p>
</section>
