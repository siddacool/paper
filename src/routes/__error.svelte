<script>
</script>

<div class="page-not-found">
  <section>
    <h2>You are lost</h2>
    <p><a href="/">👈 Get back to Paper</a></p>
  </section>
</div>

<style lang="scss">
  .page-not-found {
    height: 100%;
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding-bottom: 100px;

    @media (min-width: 900px) {
      padding-bottom: 0;
      justify-content: flex-start;
      padding-top: 10vh;
    }
  }

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
