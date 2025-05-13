<script lang="ts">
  import ModalHeaderDesktop from "./ModalHeaderDesktop/ModalHeaderDesktop.svelte";
  import RatingSection from "../RatingSection/RatingSection.svelte";
  import CommentSection from "../CommentSection/CommentSection.svelte";
  import "./modal.scss";
</script>

<div class="modal">
  <div class="modal-wrapper">
    <div class="modal-overlay"></div>
    <section class="modal-popup">
      <ModalHeaderDesktop />

      <div class="modal-body">
        <div class="modal-content">
          <RatingSection />
          <CommentSection />
        </div>
      </div>
    </section>
  </div>
</div>
