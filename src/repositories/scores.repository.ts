import { supabase } from "../config/supabase";
import { ReportDto } from "../dtos/report.dto";

export class ScoresRepository {
  async findAll(page: number, limit: number) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    return supabase
      .from("g_scores")
      .select("*", { count: "exact" })
      .range(from, to);
  }

  async findBySbd(sbd: number) {
    return supabase.from("g_scores").select("*").eq("sbd", sbd).single();
  }

  async getReport(): Promise<ReportDto[]> {
    const { data, error } = await supabase.rpc("get_score_report");
    if (error) {
      throw error;
    }
    return data;
  }

  async getTop10GroupA() {
    const { data, error } = await supabase.rpc("get_top_10_a");
    if (error) {
      throw error;
    }
    return data;
  }
}
