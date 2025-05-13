<script lang="ts">
  import "./commentSection.scss";

  import { t } from "svelte-i18n";

  import TextArea from "./TextArea/TextArea.svelte";
</script>

<section class="comment-section">
  <h1 class="body-1">{$t("additionalFeedback")}</h1>
  <TextArea />
</section>
