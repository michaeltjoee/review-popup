<script lang="ts">
  import { t } from "svelte-i18n";
  import { reviewFormState } from "../../../shared/reviewFormData.svelte";
  import "./TextArea.scss";

  const MAX_LENGTH = 250;
  let isFocused = $state(false);
  let letterCount = $derived(reviewFormState.additionalFeedback.length);

  function handleTextAreaFocus() {
    isFocused = true;
  }

  function handleTextAreaBlur() {
    isFocused = false;
  }
</script>

<div class={{ container: true, state_focused: isFocused }}>
  <div class="input_field_wrapper">
    <svg class="form_border_wrapper">
      <rect
        class="form_border"
        width="100%"
        height="100%"
        rx="8px"
        fill="none"
        stroke-width="2px"
      />
      <rect
        class="form_focus_border"
        width="100%"
        height="100%"
        rx="8px"
        fill="none"
        stroke-width="2px"
      />
    </svg>

    <div class="inline_input_wrapper">
      <div class="input_inner_wrapper">
        <textarea
          id="reason"
          bind:value={reviewFormState.additionalFeedback}
          class={{ input: true, has_counter: true }}
          maxlength="250"
          placeholder={$t("feedbackPlaceholder")}
          onblur={handleTextAreaBlur}
          onfocus={handleTextAreaFocus}
        >
        </textarea>
        <label class="low-emphasis" for="reason"
          >{$t("feedbackPlaceholder")}
        </label>
        <div data-invisible-label="__invisible_label" class="invisible_label">
          {$t("feedbackPlaceholder")}
        </div>
      </div>
    </div>

    <p class="counter">{String(letterCount)}/{MAX_LENGTH}</p>
  </div>
</div>
