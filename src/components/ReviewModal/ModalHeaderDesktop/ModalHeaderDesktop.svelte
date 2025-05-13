<script lang="ts">
  import "./ModalHeaderDesktop.scss";

  import { getContext } from "svelte";
  import type { MouseEventHandler } from "svelte/elements";
  import { t } from "svelte-i18n";

  import icClose from "../../../assets/icons/tds_ic_cross_medium.svg";

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
