"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoresRepository = void 0;
const supabase_1 = require("../config/supabase");
class ScoresRepository {
    async findAll(page, limit) {
        const from = (page - 1) * limit;
        const to = from + limit - 1;
        return supabase_1.supabase
            .from("g_scores")
            .select("*", { count: "exact" })
            .range(from, to);
    }
    async findBySbd(sbd) {
        return supabase_1.supabase.from("g_scores").select("*").eq("sbd", sbd).single();
    }
    async getReport() {
        const { data, error } = await supabase_1.supabase.rpc("get_score_report");
        if (error) {
            throw error;
        }
        return data;
    }
    async getTop10GroupA() {
        const { data, error } = await supabase_1.supabase.rpc("get_top_10_a");
        if (error) {
            throw error;
        }
        return data;
    }
}
exports.ScoresRepository = ScoresRepository;
//# sourceMappingURL=scores.repository.js.map