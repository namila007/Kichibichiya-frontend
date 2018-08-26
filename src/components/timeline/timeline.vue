<template>
  <v-flex>
    <div class="pl-4 pr-4 pt-2 pb-2" wrap>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile
          :key="item._id"
          avatar
          ripple
          >
           <v-list-tile-avatar>
              <img :src="item.user.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
             <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              <v-list-tile-action >
                  <v-layout row >
                    <v-flex offset-md4>
                    <v-btn flat icon @click.native="favourite(index)">
                        <v-icon
                          v-if="item.is_favourited == false"
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
                        {{item.favourite_count}}
                    </v-btn>
                    </v-flex>
                    <v-flex offset-md4>
                      2
                    </v-flex>
                    <v-flex offset-md4>
                      3
                    </v-flex>
                  </v-layout>
              </v-list-tile-action>
            </v-list-tile-content>
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
      items: [],
      fav: ''
    }
  },
  async mounted () {
    const user = this.$store.getters.user
    const statuses = await statusService.getUserStatus(user)
    this.items = statuses.data.status
  },
  methods: {
    async favourite (index) {
      console.log(this.items[index].is_favourited)
      var favourited = this.items[index].is_favourited
      const data = {
        'statusid': this.items[index]._id
      }
      console.log(data)
      if (!favourited) {
        const createfav = await statusService.createFavourite(data)
        this.items[index] = createfav.data.status
        console.log(this.items)
      } else {
        const deletefav = await statusService.deleteFavourite(data)
        this.items[index] = deletefav.data.status
        console.log(this.items)
      }
    }
  },
  watch: {
    items: function(newValue, oldValue) {
      console.log('ddddd')
      console.log(newValue, oldValue)
    }
  }
}
</script>

<style scoped>

</style>
