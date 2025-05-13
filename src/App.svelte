<script lang="ts">
  import ReviewModal from "./components/ReviewModal/ReviewModal.svelte";

  let renderReviewModal = $state(true);

  function handleUnmountReviewModal() {
    renderReviewModal = false;
  }
</script>

{#if renderReviewModal}
  <ReviewModal onUnmount={handleUnmountReviewModal} />
{/if}
