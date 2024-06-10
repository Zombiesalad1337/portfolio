<script lang="ts">


  let activeLink = "Services";

  let navs = ["Services"];
    
</script>

<nav class="flex items-center justify-between w-full">
    <div class="">
        <img class="h-20" src="/logo-header.png" alt="Logo" />
    </div>
    <div class="flex items-end space-x-10    text-white bg-red rounded-full px-6 py-3 ">
        <a href="#Services" class="text-sm font-medium transition-colors hover:text-blue-500">
            <span class=" px-8 py-2 rounded-full group {activeLink === 'Services' ? 'bg-black-10' : ''}">
                Services
            </span>
        </a>
        <a href="#Process" class=" text-sm font-medium transition-colors hover:text-primary"
            class:bg-black-10="{activeLink === 'Process'}">
            <span class=" px-4 py-2 rounded-full group">
                Process
            </span>
        </a>
        <a href="#Insights" class=" text-sm font-medium transition-colors hover:text-primary"
            class:bg-black-10="{activeLink === 'Process'}">
            <span class=" px-4 py-2 rounded-full group">
                Insights
            </span>
        </a>
        <a href="#Connect" class=" text-sm font-medium transition-colors hover:text-primary"
            class:bg-black-10="{activeLink === 'Process'}">
            <span class=" px-4 py-2 rounded-full group">
                Connect
            </span>
        </a>
    </div>
    <button class="hidden md:block bg-yellow-300 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-400">
        Let's talk
    </button>
</nav>
