import { supabase } from "../config/supabase";

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

  async create(data: any) {
    return supabase.from("g_scores").insert(data).select().single();
  }

  async update(sbd: number, data: any) {
    return supabase
      .from("g_scores")
      .update(data)
      .eq("sbd", sbd)
      .select()
      .single();
  }

  async delete(sbd: number) {
    return supabase.from("g_scores").delete().eq("sbd", sbd);
  }
}
