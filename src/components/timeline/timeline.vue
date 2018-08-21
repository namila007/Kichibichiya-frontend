<template>
  <v-flex>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-list-tile
          :key="item.text"
          avatar
          ripple
          @click="toggle(index)"
          >
            <v-list-tile-content>
             <v-list-tile-sub-title>{{ item.text }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <!-- <v-list-tile-action>
              <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
              <v-icon
                v-if="selected.indexOf(index) < 0"
                color="grey lighten-1"
              >
                star_border
              </v-icon>

              <v-icon
                v-else
                color="yellow darken-2"
              >
                star
              </v-icon>
            </v-list-tile-action> -->

          </v-list-tile>
          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </div>
  </v-flex>
</template>

<script>
import statusService from '@/services/Status'
export default {
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    const user = this.$store.getters.user
    console.log(user)
    const statuses = await statusService.getUserStatus(user)
    this.items = statuses.data.status
    console.log(this.items)
  },
  methods: {
    toggle (index) {
      // const i = this.selected.indexOf(index)
      // if (i > -1) {
      //   this.selected.splice(i, 1)
      // } else {
      //   this.selected.push(index)
      // }
    }
  }
}
</script>

<style scoped>

</style>
