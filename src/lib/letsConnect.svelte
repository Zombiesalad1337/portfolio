<script lang="ts">
  let name = "";
  let email = "";
  let typeOfService = "";
  let budget = "";
  let message = "";

  const budgetOptions = ["5k-10k", "10k-50k"];

  const setBudget = (value: string) => {
    budget = value;
  };

  const submitForm = () => {
    // Validate and submit form logic here
  };
</script>

<section class="flex flex-col md:flex-row bg-black p-8 space-y-8 md:space-y-0 md:space-x-8">
  <!-- Left Column -->
  <div class="w-full md:w-2/5 space-y-8">
    <!-- Calendar Placeholder -->
    <div class="bg-white text-black p-4 rounded">
      <p>Select Meeting Dates:</p>
      <!-- Date range picker logic -->
    </div>

    <!-- Social Media Section -->
    <div>
      <p class="text-red-500 mb-2">SOCIAL MEDIA</p>
      <div class="grid grid-cols-2 gap-4">
        <!-- Social Media Icons Placeholder -->
        <div class="bg-white p-4 rounded text-black text-center">Icon 1</div>
        <div class="bg-white p-4 rounded text-black text-center">Icon 2</div>
        <div class="bg-white p-4 rounded text-black text-center">Icon 3</div>
        <div class="bg-white p-4 rounded text-black text-center">Icon 4</div>
      </div>
    </div>
  </div>

  <!-- Right Column -->
  <div class="w-full md:w-3/5 space-y-4">
    <input 
      type="text" 
      bind:value={name} 
      placeholder="Name" 
      required 
      class="w-full p-2 text-white bg-black border-b border-gray-400 focus:border-red-500"
    />

    <input 
      type="email" 
      bind:value={email} 
      placeholder="Email" 
      required 
      class="w-full p-2 text-white bg-black border-b border-gray-400 focus:border-red-500"
    />

    <select 
      bind:value={typeOfService} 
      required 
      class="w-full p-2 text-white bg-black border-b border-gray-400 focus:border-red-500"
    >
      <option value="" disabled>Select a service</option>
      <option value="design">Design</option>
      <option value="development">Development</option>
      <option value="marketing">Marketing</option>
    </select>

    <div class="space-y-2">
      <input 
        type="text" 
        bind:value={budget} 
        placeholder="Budget" 
        required 
        class="w-full p-2 text-white bg-black border-b border-gray-400 focus:border-red-500"
      />
      <div class="flex space-x-2">
        {#each budgetOptions as option}
          <button 
            type="button" 
            on:click={() => setBudget(option)} 
            class="p-2 bg-red-500 text-white rounded"
          >
            {option}
          </button>
        {/each}
      </div>
    </div>

    <textarea 
      bind:value={message} 
      placeholder="Message (Max 500 characters)" 
      maxlength="500" 
      required 
      class="w-full p-2 text-white bg-black border-b border-gray-400 focus:border-red-500 h-32"
    ></textarea>

    <button 
      on:click={submitForm} 
      class="w-full p-4 bg-red-500 text-white rounded"
    >
      Submit
    </button>
  </div>
</section>
