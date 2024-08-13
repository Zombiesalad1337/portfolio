<script lang="ts">
  /**
   * Indicates if line is active
   */
  export let active: boolean = false;

  /**
   * Symbol to show
   */
  export let symbol: number = -1;
</script>


<style>
  .custom-line__container {
    height: 5px; /* Adjust the height for the line */
    width: 25%; /* Adjust the width for the line */
    background-color: #727272;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .custom-line__container:hover {
    opacity: 0.9;
  }
  .custom-line__container_active {
    background-color: #af1315;
  }
  .custom-line__symbol {
    font-size: 14px;
    font-weight: bold;
    color: #eaeaea;
    display: inline-block;
    text-align: center;
    width: 100%;
    line-height: 20px; /* Adjust line-height to vertically center the text */
  }
</style>
