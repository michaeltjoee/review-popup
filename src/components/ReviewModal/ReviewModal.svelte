<script lang="ts">
  import "./ReviewModal.scss";

  import { setContext } from "svelte";
  import type { MouseEventHandler } from "svelte/elements";
  import { t } from "svelte-i18n";

  import { reviewFormState } from "../../shared/reviewFormData.svelte";
  import CommentSection from "../CommentSection/CommentSection.svelte";
  import RatingSection from "../RatingSection/RatingSection.svelte";
  import ModalHeaderDesktop from "./ModalHeaderDesktop/ModalHeaderDesktop.svelte";

  let isOpen = $state(true);
  let container: HTMLElement | null;

  const { onUnmount } = $props();

  const handleClose = () => {
    isOpen = false;
    setTimeout(() => {
      const appboyBridge = window.appboyBridge;
      if (appboyBridge) {
        appboyBridge.closeMessage();
      }
      onUnmount();
    }, 1000);
  };

  function handleClickOutside(
    event: MouseEvent & { currentTarget: EventTarget & Document }
  ) {
    if (container && event.target) {
      if (!container.contains(event.target as Node)) {
        handleClose();
      }
    }
  }

  setContext("handleCloseReviewModal", () => {
    handleClose();
  });

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const brazeBridge = window.brazeBridge;

    if (brazeBridge) {
      brazeBridge
        .getUser()
        .setCustomUserAttribute("survey_response", reviewFormState);
    } else {
      console.error("Braze bridge not found");
    }

    handleClose();
  };

  const { hasFilledForm } = $derived.by(() => {
    const hasRateFindability = Number(reviewFormState.findabilityRating) > 0;
    const hasRateAccuracy = Number(reviewFormState.accuracyRating) > 0;
    const hasFilledForm = hasRateFindability && hasRateAccuracy;
    return { hasFilledForm };
  });
</script>

<svelte:document onclick={handleClickOutside} />
<div class={["modal", { ["modal-closing"]: !isOpen }]}>
  <div class={["modal-wrapper", { ["modal-wrapper-closing"]: !isOpen }]}>
    <div class="modal-overlay"></div>
    <section bind:this={container} class="modal-popup">
      <ModalHeaderDesktop />

      <div class="modal-body">
        <div class="modal-content">
          <RatingSection />
          <CommentSection />
        </div>
      </div>

      <footer class="modal-footer">
        <button
          onclick={handleSubmit}
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
