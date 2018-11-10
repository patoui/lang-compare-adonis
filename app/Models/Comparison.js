'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comparison extends Model {
    async getMatches() {
        let matches = [];

        if (this.lang == 'php' && this.method == 'array_search') {
            matches = ['indexOf', 'findIndex', 'includes']
        } else if (this.lang == 'php' && this.method == 'array_push') {
            matches = ['push']
        } else if (this.lang == 'php' && this.method == 'array_map') {
            matches = ['map']
        } else if (this.lang == 'php' && this.method == 'array_reduce') {
            matches = ['reduce']
        } else if (this.lang == 'php' && this.method == 'is_array') {
            matches = ['isArray']
        } else if (this.lang == 'php' && this.method == 'count') {
            matches = ['length']
        } else if (this.lang == 'php' && this.method == 'sort') {
            matches = ['sort']
        } else if (this.lang == 'php' && this.method == 'array_slice') {
            matches = ['slice']
        } else if (this.lang == 'php' && this.method == 'array_reverse') {
            matches = ['reverse']
        } else if (this.lang == 'php' && this.method == 'implode') {
            matches = ['join']
        } else if (this.lang == 'php' && this.method == 'array_filter') {
            matches = ['filter']
        } else if (this.lang == 'php' && (this.method == 'array_merge' || this.method == 'array_merge_recursive')) {
            matches = ['concat']
        } else if (this.lang == 'php' && this.method == 'array_walk') {
            matches = ['every']
        } else if (this.lang == 'php' && this.method == 'array_fill') {
            matches = ['fill']
        } else if (this.lang == 'php' && this.method == 'array_walk') {
            matches = ['forEach']
        } else if (this.lang == 'php' && this.method == 'array_keys') {
            matches = ['keys']
        } else if (this.lang == 'php' && this.method == 'array_pop') {
            matches = ['pop']
        } else if (this.lang == 'php' && this.method == 'array_shift') {
            matches = ['shift']
        } else if (this.lang == 'php' && this.method == 'array_unshift') {
            matches = ['unshift']
        } else if (this.lang == 'php' && this.method == 'array_values') {
            matches = ['values']
        }

        return await Comparison
            .query()
            .select('id', 'lang', 'method', 'url')
            .whereNot('lang', this.lang)
            .where('lang', 'javascript')
            .whereIn('method', matches)
            .fetch()
    }
}

module.exports = Comparison
