<script lang="ts">
  import { t } from "svelte-i18n";
  import { reviewFormState } from "../../shared/reviewFormData.svelte";

  import TextArea from "./TextArea/TextArea.svelte";
  import "./commentSection.scss";

  const { hasFilledForm } = $derived.by(() => {
    const hasRateFindability = Number(reviewFormState.findabilityRating) > 0;
    const hasRateAccuracy = Number(reviewFormState.accuracyRating) > 0;
    const hasFilledForm = hasRateFindability && hasRateAccuracy;
    return { hasFilledForm };
  });
</script>

<section class="comment-section">
  <h1 class="body-1">{$t("additionalFeedback")}</h1>
  <TextArea />
  <button
    disabled={!hasFilledForm}
    class={["btn-submit", { disabled: !hasFilledForm }]}
    type="button"
  >
    {$t("submit")}
  </button>
</section>
