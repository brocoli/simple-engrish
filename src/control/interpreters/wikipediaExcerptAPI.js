
import lodash from "lodash"
import rp from "request-promise"

import {getMaestro} from "index.js"



export default {
    requestExcerpt: async function requestExcerpt(sourceArticleTitle) {
        let response = null
        try {
            response = await rp("https://simple.wikipedia.org/api/rest_v1/page/summary/" + sourceArticleTitle)
        } catch(error) {
            return Promise.reject(error)
        }
        const parsedResponse = JSON.parse(response)
        const excerpt = lodash.trim(parsedResponse.extract).split("\n")[0]
        return Promise.resolve(excerpt)
    }
}

