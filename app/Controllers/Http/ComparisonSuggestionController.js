'use strict'

const Comparison = use('App/Models/Comparison')

class ComparisonSuggestionController {
    async index({ request, response }) {
        return await Comparison.query().where('method', 'like', request.input('q') + '%').pluck('method')
    }
}

module.exports = ComparisonSuggestionController
