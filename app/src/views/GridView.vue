<script lang="ts" setup></script>

<template>
    <p>PPPP</p>
    <h3>Grid</h3>
    <section class="grid-12 outline">
        <!--            {{#each debugGrid}}-->
        <div></div>
        <!--            {{/each}}-->
    </section>

    <section class="grid-12 gap-b12-0 gap-b10 outline">
        <!--            {{#each debugGrid}}-->
        <div></div>
        <!--            {{/each}}-->
    </section>

    <h3>Shrink</h3>
    <section class="grid-12 shrink-2 outline">
        <!--            {{#each debugGrid}}-->
        <div></div>
        <!--            {{/each}}-->
    </section>

    <section class="grid-12 shrink outline">
        <!--            {{#each debugGrid}}-->
        <div></div>
        <!--            {{/each}}-->
    </section>

    <section class="grid-11 shrink outline">
        <!--            {{#each debugGrid}}-->
        <div></div>
        <!--            {{/each}}-->
    </section>

    <h3>Row</h3>
    <section class="row outline">
        <div class="col-b10-3 col-b9-5 col-b8-6">1</div>
        <div>2</div>
        <div>3</div>
        <div class="col-3 col-b12-0 col-b5-6">4</div>
        <div>5</div>
        <div class="span-2">6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
    </section>

    <section class="row outline">
        <div class="col-b10-3 col-b9-5 col-b8-6">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
    </section>

    <section class="row-test">
        <!--            {{#each debugGrid}}-->
        <div></div>
        <!--            {{/each}}-->
    </section>

    <section class="row outline">
        <div>1</div>
        <div>2 325</div>
        <div>3</div>
    </section>

    <h3>Bar</h3>
    <section class="bar col-2 outline">
        <div>1</div>
        <div>2 325</div>
        <div>3</div>
    </section>

    <h3>Col</h3>
    <div class="col outline">
        <div>1</div>
        <span>2</span>
        <span>3</span>
        <span>2<br/>5</span>
        <div>5</div>
    </div>

    <h3>List</h3>
    <div class="list col-3 outline">
        <div>1</div>
        <span>2</span>
        <span>3</span>
        <span>2<br/>5</span>
        <div>5</div>
    </div>
</template>
