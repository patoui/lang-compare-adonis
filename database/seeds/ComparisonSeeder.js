'use strict'

/*
|--------------------------------------------------------------------------
| ComparisonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Comparison = use('App/Models/Comparison')

class ComparisonSeeder {
    async run () {
        const comparisons = [
            ['php', 'array_change_key_case', 'http://php.net/manual/en/function.array-change-key-case.php'],
            ['php', 'array_chunk', 'http://php.net/manual/en/function.array-chunk.php'],
            ['php', 'array_column', 'http://php.net/manual/en/function.array-column.php'],
            ['php', 'array_combine', 'http://php.net/manual/en/function.array-combine.php'],
            ['php', 'array_count_values', 'http://php.net/manual/en/function.array-count-values.php'],
            ['php', 'array_diff_assoc', 'http://php.net/manual/en/function.array-diff-assoc.php'],
            ['php', 'array_diff_key', 'http://php.net/manual/en/function.array-diff-key.php'],
            ['php', 'array_diff_uassoc', 'http://php.net/manual/en/function.array-diff-uassoc.php'],
            ['php', 'array_diff_ukey', 'http://php.net/manual/en/function.array-diff-ukey.php'],
            ['php', 'array_diff', 'http://php.net/manual/en/function.array-diff.php'],
            ['php', 'array_fill_keys', 'http://php.net/manual/en/function.array-fill-keys.php'],
            ['php', 'array_fill', 'http://php.net/manual/en/function.array-fill.php'],
            ['php', 'array_filter', 'http://php.net/manual/en/function.array-filter.php'],
            ['php', 'array_flip', 'http://php.net/manual/en/function.array-flip.php'],
            ['php', 'array_intersect_assoc', 'http://php.net/manual/en/function.array-intersect-assoc.php'],
            ['php', 'array_intersect_key', 'http://php.net/manual/en/function.array-intersect-key.php'],
            ['php', 'array_intersect_uassoc', 'http://php.net/manual/en/function.array-intersect-uassoc.php'],
            ['php', 'array_intersect_ukey', 'http://php.net/manual/en/function.array-intersect-ukey.php'],
            ['php', 'array_intersect', 'http://php.net/manual/en/function.array-intersect.php'],
            ['php', 'array_key_exists', 'http://php.net/manual/en/function.array-key-exists.php'],
            ['php', 'array_key_first', 'http://php.net/manual/en/function.array-key-first.php'],
            ['php', 'array_key_last', 'http://php.net/manual/en/function.array-key-last.php'],
            ['php', 'array_keys', 'http://php.net/manual/en/function.array-keys.php'],
            ['php', 'array_map', 'http://php.net/manual/en/function.array-map.php'],
            ['php', 'array_merge_recursive', 'http://php.net/manual/en/function.array-merge-recursive.php'],
            ['php', 'array_merge', 'http://php.net/manual/en/function.array-merge.php'],
            ['php', 'array_multisort', 'http://php.net/manual/en/function.array-multisort.php'],
            ['php', 'array_pad', 'http://php.net/manual/en/function.array-pad.php'],
            ['php', 'array_pop', 'http://php.net/manual/en/function.array-pop.php'],
            ['php', 'array_product', 'http://php.net/manual/en/function.array-product.php'],
            ['php', 'array_push', 'http://php.net/manual/en/function.array-push.php'],
            ['php', 'array_rand', 'http://php.net/manual/en/function.array-rand.php'],
            ['php', 'array_reduce', 'http://php.net/manual/en/function.array-reduce.php'],
            ['php', 'array_replace_recursive', 'http://php.net/manual/en/function.array-replace-recursive.php'],
            ['php', 'array_replace', 'http://php.net/manual/en/function.array-replace.php'],
            ['php', 'array_reverse', 'http://php.net/manual/en/function.array-reverse.php'],
            ['php', 'array_search', 'http://php.net/manual/en/function.array-search.php'],
            ['php', 'array_shift', 'http://php.net/manual/en/function.array-shift.php'],
            ['php', 'array_slice', 'http://php.net/manual/en/function.array-slice.php'],
            ['php', 'array_splice', 'http://php.net/manual/en/function.array-splice.php'],
            ['php', 'array_sum', 'http://php.net/manual/en/function.array-sum.php'],
            ['php', 'array_udiff_assoc', 'http://php.net/manual/en/function.array-sum.php'],
            ['php', 'array_udiff_uassoc', 'http://php.net/manual/en/function.array-udiff-uassoc.php'],
            ['php', 'array_udiff', 'http://php.net/manual/en/function.array-udiff.php'],
            ['php', 'array_uintersect_assoc', 'http://php.net/manual/en/function.array-uintersect-assoc.php'],
            ['php', 'array_uintersect_uassoc', 'http://php.net/manual/en/function.array-uintersect-uassoc.php'],
            ['php', 'array_uintersect', 'http://php.net/manual/en/function.array-uintersect.php'],
            ['php', 'array_unique', 'http://php.net/manual/en/function.array-unique.php'],
            ['php', 'array_unshift', 'http://php.net/manual/en/function.array-unshift.php'],
            ['php', 'array_values', 'http://php.net/manual/en/function.array-values.php'],
            ['php', 'array_walk_recursive', 'http://php.net/manual/en/function.array-walk-recursive.php'],
            ['php', 'array_walk', 'http://php.net/manual/en/function.array-walk.php'],
            ['php', 'array', 'http://php.net/manual/en/function.array.php'],
            ['php', 'arsort', 'http://php.net/manual/en/function.arsort.php'],
            ['php', 'asort', 'http://php.net/manual/en/function.asort.php'],
            ['php', 'compact', 'http://php.net/manual/en/function.compact.php'],
            ['php', 'count', 'http://php.net/manual/en/function.count.php'],
            ['php', 'current', 'http://php.net/manual/en/function.current.php'],
            ['php', 'each', 'http://php.net/manual/en/function.each.php'],
            ['php', 'end', 'http://php.net/manual/en/function.end.php'],
            ['php', 'extract', 'http://php.net/manual/en/function.extract.php'],
            ['php', 'in_array', 'http://php.net/manual/en/function.in-array.php'],
            ['php', 'key_exists', 'http://php.net/manual/en/function.key-exists.php'],
            ['php', 'key', 'http://php.net/manual/en/function.key.php'],
            ['php', 'krsort', 'http://php.net/manual/en/function.krsort.php'],
            ['php', 'ksort', 'http://php.net/manual/en/function.ksort.php'],
            ['php', 'list', 'http://php.net/manual/en/function.list.php'],
            ['php', 'natcasesort', 'http://php.net/manual/en/function.natcasesort.php'],
            ['php', 'natsort', 'http://php.net/manual/en/function.natsort.php'],
            ['php', 'next', 'http://php.net/manual/en/function.next.php'],
            ['php', 'pos', 'http://php.net/manual/en/function.pos.php'],
            ['php', 'prev', 'http://php.net/manual/en/function.prev.php'],
            ['php', 'range', 'http://php.net/manual/en/function.range.php'],
            ['php', 'reset', 'http://php.net/manual/en/function.reset.php'],
            ['php', 'rsort', 'http://php.net/manual/en/function.rsort.php'],
            ['php', 'shuffle', 'http://php.net/manual/en/function.shuffle.php'],
            ['php', 'sizeof', 'http://php.net/manual/en/function.sizeof.php'],
            ['php', 'sort', 'http://php.net/manual/en/function.sort.php'],
            ['php', 'uasort', 'http://php.net/manual/en/function.uasort.php'],
            ['php', 'uksort', 'http://php.net/manual/en/function.uksort.php'],
            ['php', 'usort', 'http://php.net/manual/en/function.usort.php'],
            ['php', 'is_array', 'http://php.net/manual/en/function.is-array.php'],
            ['php', 'implode', 'http://php.net/manual/en/function.implode.php'],

            ['javascript', 'length', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length'],
            ['javascript', 'from', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from'],
            ['javascript', 'isArray', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray'],
            ['javascript', 'of', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of'],
            ['javascript', 'concat', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat'],
            ['javascript', 'copyWithin', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin'],
            ['javascript', 'entries', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries'],
            ['javascript', 'every', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every'],
            ['javascript', 'fill', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill'],
            ['javascript', 'filter', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'],
            ['javascript', 'find', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find'],
            ['javascript', 'findIndex', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex'],
            ['javascript', 'flat', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat'],
            ['javascript', 'flatMap', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap'],
            ['javascript', 'forEach', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach'],
            ['javascript', 'includes', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes'],
            ['javascript', 'indexOf', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf'],
            ['javascript', 'join', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join'],
            ['javascript', 'keys', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys'],
            ['javascript', 'lastIndexOf', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf'],
            ['javascript', 'map', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'],
            ['javascript', 'pop', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop'],
            ['javascript', 'push', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push'],
            ['javascript', 'reduce', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'],
            ['javascript', 'reduceRight', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight'],
            ['javascript', 'reverse', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse'],
            ['javascript', 'shift', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift'],
            ['javascript', 'slice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice'],
            ['javascript', 'some', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some'],
            ['javascript', 'sort', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort'],
            ['javascript', 'splice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'],
            ['javascript', 'toLocaleString', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString'],
            ['javascript', 'toSource', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource'],
            ['javascript', 'toString', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString'],
            ['javascript', 'unshift', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift'],
            ['javascript', 'values', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values'],
        ]

        for (let i = 0; i < comparisons.length; i++) {
            await Comparison.create({
                lang: comparisons[i][0],
                method: comparisons[i][1],
                url: comparisons[i][2]
            })
        }

        process.exit(0)
    }
}

module.exports = ComparisonSeeder
