"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var filter_1 = require("../actions/filter");
var initialState = {
    defaultState: {},
};
function filter(state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b, _c, _d;
    switch (action.type) {
        case typesafe_actions_1.getType(filter_1.filterActions.subscribeToFilterStore):
            return __assign({}, state, (_a = {}, _a[action.id] = action.settings, _a.defaultState = __assign({}, state.defaultState, (_b = {}, _b[action.id] = action.settings, _b)), _a));
        case typesafe_actions_1.getType(filter_1.filterActions.updateFilter):
            return __assign({}, state, (_c = {}, _c[action.id] = action.settings, _c));
        case typesafe_actions_1.getType(filter_1.filterActions.resetFilter):
            return __assign({}, state, (_d = {}, _d[action.id] = state.defaultState[action.id], _d));
        default:
            return state;
    }
}
exports.default = filter;
