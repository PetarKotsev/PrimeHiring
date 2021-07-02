<template>
    <nav>
        <v-toolbar>
            <v-app-bar-nav-icon class="" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title color="blue">
               Prime Hiring
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar> 

        <!-- <v-navigation-drawer app color="indigo" v-model="drawer">
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon class="white--text">dashboard</v-icon>
                    </v-list-tile-action>
                    <v-list-item-content>
                        <v-list-item-title>Single-line item</v-list-item-title>
                    </v-list-item-content>
               </v-list-tile>
           </v-list> 
        </v-navigation-drawer> -->

      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :mini-variant="miniVariant"
        :right="right"
        :src="bg"
        dark
        absolute
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item class="py-2 text-start" >
            <v-list-item-content>
                <h1> Prime Hiring </h1>
            </v-list-item-content>
            <v-btn color="" icon fab small @click="drawer=false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            router
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    data: () => ({
        drawer: false,
        items: [
          { title: 'Hire', icon: 'mdi-view-dashboard', path: '/'},
          { title: 'Add developer', icon: 'mdi-image', path: '/candidates/Add'},
        ],
    })
}
</script>

