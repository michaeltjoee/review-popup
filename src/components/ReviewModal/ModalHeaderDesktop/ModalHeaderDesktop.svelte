<script lang="ts">
  import { t } from "svelte-i18n";
  import { getContext } from "svelte";
  import icClose from "../../../assets/icons/tds_ic_cross_medium.svg";
  import "./ModalHeaderDesktop.scss";
  import type { MouseEventHandler } from "svelte/elements";

  const handleCloseReviewModal: MouseEventHandler<HTMLButtonElement> =
    getContext("handleCloseReviewModal");
</script>

<header class="modal-header">
  <h1 class="heading-3">{$t("title")}</h1>
  <button
    onclick={handleCloseReviewModal}
    class="modal-close"
    type="button"
    tabIndex={-1}
  >
    <img src={icClose} alt="" />
  </button>
</header>
