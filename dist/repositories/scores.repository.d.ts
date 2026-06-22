import { ReportDto } from "../dtos/report.dto";
export declare class ScoresRepository {
    findAll(page: number, limit: number): Promise<import("@supabase/postgrest-js/dist/index.cjs").PostgrestSingleResponse<any[]>>;
    findBySbd(sbd: number): Promise<import("@supabase/postgrest-js/dist/index.cjs").PostgrestSingleResponse<any>>;
    getReport(): Promise<ReportDto[]>;
    getTop10GroupA(): Promise<any>;
}
