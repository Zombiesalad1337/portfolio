<script>
</script>

<style>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Ensure it is above other content */
  }

  .loading-message {
    font-size: 1.5rem;
  }
</style>

<div class="loading-screen">
<div class="loading-message">Loading...</div>
</div>
