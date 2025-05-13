<script lang="ts">
  import "./RatingSection.scss";

  import { getContext } from "svelte";
  import type { MouseEventHandler } from "svelte/elements";
  import { t } from "svelte-i18n";

  import icClose from "../../assets/icons/tds_ic_cross_medium.svg";
  import icVerticalDivider from "../../assets/icons/vertical_separator.png";
  import RateBox from "./RateBox/RateBox.svelte";

  const handleCloseReviewModal: MouseEventHandler<HTMLButtonElement> =
    getContext("handleCloseReviewModal");
</script>

<div class="rate-box-container">
  <div class="title-section-mobile">
    <h1 class="heading-3">{$t("title")}</h1>
    <button
      onclick={handleCloseReviewModal}
      class="modal-close"
      type="button"
      tabIndex={-1}
    >
      <img src={icClose} alt="" />
    </button>
  </div>

  <div class="rate-list">
    <RateBox formKey="findabilityRating" />
    <img class="vertical-separator" alt="" src={icVerticalDivider} />
    <RateBox formKey="accuracyRating" />
  </div>
</div>
