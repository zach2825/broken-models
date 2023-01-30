<template>
  <div style="display: flex">
    <div style="flex: 1;">
  <pre>
    {{ JSON.stringify(logPrefix, null, 2) }}
  </pre>
      <pre>
    {{ JSON.stringify(user_list, null, 2) }}
  </pre>
    </div>
    <div style="flex: 1;">
  <pre>
    {{ JSON.stringify(users_json, null, 2) }}
  </pre>
    </div>
  </div>
</template>
<script>
import User from '@/models/User'
import {defineComponent} from 'vue'
import users_json from '../utils/test_users.json'

export default defineComponent({
  data() {
    return {
      users_json,
      logPrefix: (new User).$LOG_PREFIX,
    }
  },

  computed: {
    user_list() {
      return User.query().all()
    },
  },

  async mounted() {
    const insertedUsers = users_json//
        .map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
        }))//
        .map(async user => {
          const newUser = new User(user)
          console.log({newUser})
          const saved = await newUser.$save()
          console.log({newUser, saved})
        })

    const testUser = User.find(1)
    if (testUser) {
      testUser.name = 'Test User'
    }

    // console.log({insertedUsers})
  },
})
</script>
