<script lang="ts">
  import "./RateBox.scss";

  import { t } from "svelte-i18n";

  import { reviewFormState } from "../../../shared/reviewFormData.svelte";
  import type { RatingType } from "../../../shared/types";

  let { formKey = "findabilityRating" as RatingType } = $props();

  const MAX_STARS = 5;
  const STARS = Array.from({ length: MAX_STARS }, (v, k) => {
    return {
      label: `Rate ${k + 1} ${k === 0 ? "star" : "stars"}`,
      value: k + 1,
    };
  });
</script>

<div class="rate-box-wrapper">
  <h1 class="body-1">{$t(formKey)}</h1>

  <div class="stars-container">
    {#each STARS as { label, value } (label)}
      <button
        onclick={() => {
          if (value === reviewFormState[formKey]) {
            reviewFormState[formKey] = 0;
          } else {
            reviewFormState[formKey] = value;
          }
        }}
        aria-label={label}
        type="button"
        class="btn-rate"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 34 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5624 31.6821L16.9806 27.1974L8.39887 31.6821C7.23568 32.2899 5.87618 31.3081 6.09833 30.0206L7.7373 20.5219L0.794512 13.7948C-0.146533 12.883 0.372747 11.2944 1.67324 11.1066L11.2679 9.72074L15.5588 1.0785C16.1404 -0.0928974 17.8208 -0.0928974 18.4024 1.0785L22.6933 9.72074L32.288 11.1066C33.5885 11.2944 34.1078 12.883 33.1668 13.7948L26.224 20.5219L27.8629 30.0206C28.0851 31.3081 26.7256 32.2899 25.5624 31.6821Z"
            fill={value <= reviewFormState[formKey] ? "#FEE645" : "#AEB2BE"}
          />
        </svg>
      </button>
    {/each}
  </div>
</div>
