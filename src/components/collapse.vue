<template>
  <div :class="['collapse',{'unfold':foldStatus[item]}]">
    <h4 @click="toggleFold(item)">
      {{oriSorts[item]}}
      <i></i>
    </h4>
    <ul>
      <li v-if="cpt.sort == item" :key="cpt.name">
        <a :href="'./#/'+cpt.name">
          {{cpt.name}}
          <span>{{cpt.chnName || ""}}</span>
          <nut-rate class="cpt-rec" v-if="cpt.star" :total="5" :value="cpt.star" :size="8" :spacing="3" :readOnly="true"></nut-rate>            </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
