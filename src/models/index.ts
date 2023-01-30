import VuexORM from '@vuex-orm/core'

const database = new VuexORM.Database()

database.register(require('./User').default)
database.register(require('./Todo').default)

export default database
