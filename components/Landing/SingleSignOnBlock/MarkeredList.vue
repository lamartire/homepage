<template>
  <ul class="single-sign-on-block-markered-list">
    <li>Reducing customer friction for a faster onboarding process</li>
    <li>No back and forth with your support team</li>
    <li>Cutting onboarding costs</li>
    <li>Lower abandonment during registration process</li>
    <li>Happier customers with higher NPS scores</li>
    <li>Higher verification accuracy</li>
    <li>Stronger fraud and risk protection for your institution</li>
  </ul>
</template>

<style lang="scss">
.single-sign-on-block-markered-list {
  list-style: none;
  columns: 2;
  column-gap: 56px;
  padding: 0;
  margin: 0 0 56px;
}

.single-sign-on-block-markered-list li {
  display: flex;
  margin-bottom: 14px;
}

.single-sign-on-block-markered-list li:before {
  content: "";
  flex: 0 0 auto;
  width: 16px;
  height: 16px;
  margin-top: 7px;
  margin-right: 8px;
  background-image: url(../../../assets/img/check-list-marker.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@include touch {
  .single-sign-on-block-markered-list {
    columns: initial;
    margin-bottom: 30px;
  }

  .single-sign-on-block-markered-list li:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
