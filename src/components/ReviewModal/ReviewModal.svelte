<script lang="ts">
  import { setContext } from "svelte";
  import { t } from "svelte-i18n";
  import ModalHeaderDesktop from "./ModalHeaderDesktop/ModalHeaderDesktop.svelte";
  import RatingSection from "../RatingSection/RatingSection.svelte";
  import CommentSection from "../CommentSection/CommentSection.svelte";
  import "./ReviewModal.scss";
  import { reviewFormState } from "../../shared/reviewFormData.svelte";

  let isOpen = $state(true);
  const { onUnmount } = $props();

  setContext("handleCloseReviewModal", () => {
    isOpen = false;
    setTimeout(() => {
      const appboyBridge = window.appboyBridge;
      if (appboyBridge) {
        appboyBridge.closeMessage();
      }
      onUnmount();
    }, 1000);
  });

  const { hasFilledForm } = $derived.by(() => {
    const hasRateFindability = Number(reviewFormState.findabilityRating) > 0;
    const hasRateAccuracy = Number(reviewFormState.accuracyRating) > 0;
    const hasFilledForm = hasRateFindability && hasRateAccuracy;
    return { hasFilledForm };
  });
</script>

<div class={["modal", { ["modal-closing"]: !isOpen }]}>
  <div class={["modal-wrapper", { ["modal-wrapper-closing"]: !isOpen }]}>
    <div class="modal-overlay"></div>
    <section class="modal-popup">
      <ModalHeaderDesktop />

      <div class="modal-body">
        <div class="modal-content">
          <RatingSection />
          <CommentSection />
        </div>
      </div>

      <footer class="modal-footer">
        <button
          disabled={!hasFilledForm}
          class={["btn-submit", { disabled: !hasFilledForm }]}
          type="button"
        >
          {$t("submit")}
        </button>
      </footer>
    </section>
  </div>
</div>
