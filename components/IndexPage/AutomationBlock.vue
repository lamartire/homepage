<template>
  <section class="automation-block">
    <section class="container automation-block-content">
      <div class="columns is-variable is-4">
        <div class="column is-5 is-offset-1">
          <h2>The case for true automation in financial compliance</h2>
        </div>
      </div>
      <div class="columns is-variable is-4">
        <section class="column is-5 is-offset-1 automation-block-description">
          <h3>When was the last time you looked at the santions list?</h3>
          <p>
            The data is unstructured and full of inconsistent formatting that
            are a recipe for inaccuracy.
          </p>
          <ul class="automation-block-list">
            <li>
              <div class="automation-block-list-icon">
                <v-svg-icon name="feature-4"></v-svg-icon>
              </div>
              <section>
                <h4>Advanced Data Science powered by AI</h4>
                <p>
                  While most solutions fail to account for these issues,
                  Endpass’ AI both normalizes the data and applies advanced
                  validation logic to give you the highest degree of certainty
                  that you haven’t accidentally missed something.
                </p>
              </section>
            </li>
            <li>
              <div class="automation-block-list-icon">
                <v-svg-icon name="feature-5"></v-svg-icon>
              </div>
              <section>
                <h4>Eliminationg expensive false negatives</h4>
                <p>
                  Not only does true automation allow for a smoother customer
                  onboarding experience, but it protects your business from
                  potential fines or government enforcement actions that could
                  come from inaccurate checks.
                </p>
              </section>
            </li>
          </ul>
        </section>
        <div class="column is-5 is-offset-1 automation-block-image">
          <image-card></image-card>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";
import ImageCard from "~/components/ImageCard";

export default {
  name: "AutomationBlock",

  components: {
    VSvgIcon,
    ImageCard
  }
};
</script>

<style lang="scss">
.automation-block {
  padding: 120px 0 130px;
  background-color: var(--color-bg-grey);
  background-image: url(../../assets/img/backgrounds/automation-block.svg);
  background-repeat: no-repeat;
  background-size: 100%;
}

.automation-block-description {
  font-size: 18px;
  line-height: 1.55;
}

.automation-block h2 {
  font-size: 32px;
  line-height: 1.25;
  margin-bottom: 16px;
}

.automation-block h3 {
  font-size: 24px;
  line-height: 1.15;
  margin-bottom: 30px;
}

.automation-block-description > p {
  margin-bottom: 48px;
}

.automation-block-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.automation-block-list li {
  position: relative;
}

.automation-block-list li h4 {
  font-weight: bold;
}

.automation-block-list li:not(:last-child) {
  margin-bottom: 38px;
}

.automation-block-list-icon {
  position: absolute;
  top: 0;
  left: calc(-42px - 30px);
  width: 42px;
  height: 42px;
}

.automation-block-image {
  height: 525px;
  width: calc(100% + 40px);
}

@include mobile {
  .automation-block {
    padding: 50px 0;
    background-image: none;
  }

  .automation-block-list-icon {
    position: static;
    margin-bottom: 16px;
  }

  .automation-block-list {
    margin-bottom: 24px;
  }

  .automation-block-list li:not(:last-child) {
    margin-bottom: 32px;
  }

  .automation-block-image {
    height: 320px;
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }

  .automation-block-description {
    font-size: 16px;
    line-height: 1.5;
  }

  .automation-block h2 {
    font-size: 24px;
    line-height: 1.3;
    margin-bottom: 16px;
  }

  .automation-block h3 {
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 32px;
  }
}
</style>
