const state = {
    saveRoutes: []   // 存储可缓存页面
}

const mutations = {
    SAVE_ROUTE: (state, route) => {
        if (!state.saveRoutes.includes(route)) {
            state.saveRoutes.push(route)
        }
    },
    DELETE_ROUTE: (state, route) => {
        const index = state.saveRoutes.indexOf(route)
        if (index > -1) {
            state.saveRoutes.splice(index, 1)
        }
    }
}

const actions = {
    saveRoute ({ commit }, route) {
        commit('SAVE_ROUTE', route)
    },
    delRoute ({ commit }, route) {
        commit('DELETE_ROUTE', route)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
