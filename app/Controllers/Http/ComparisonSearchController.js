'use strict'

const Comparison = use('App/Models/Comparison')

class ComparisonSearchController {
    async index({ request, response }) {
        const comparison = await Comparison.query().where('method', 'like', request.input('q') + '%').first()
        const matches = await comparison.getMatches()

        return response.send({
            comparison: comparison,
            matches: matches,
        })
    }
}

module.exports = ComparisonSearchController

