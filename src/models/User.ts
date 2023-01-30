import Todo from '@/models/Todo';
import { Model } from '@vuex-orm/core';

export default class User extends Model {
    static entity = 'users';

    static fields () {
        return {
            name: this.string(''),
            email: this.string(''),

            todos: this.hasMany(Todo, 'user_id'),
        }
    }


    name!: string;
    email!: string;
    todos!: Todo[];

}
