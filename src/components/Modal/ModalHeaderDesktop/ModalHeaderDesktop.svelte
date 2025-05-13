<script lang="ts">
  import { t } from "svelte-i18n";
  import icClose from "../../../assets/icons/tds_ic_cross_medium.svg";
  import "./ModalHeaderDesktop.scss";
</script>

<header class="modal-header">
  <h1 class="heading-3">{$t("title")}</h1>
  <button class="modal-close" type="button" tabIndex={-1}>
    <img src={icClose} alt="" />
  </button>
</header>
