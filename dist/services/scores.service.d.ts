export declare class ScoresService {
    private repository;
    getAll(page?: number, limit?: number): Promise<import("@supabase/postgrest-js/dist/index.cjs").PostgrestSingleResponse<any[]>>;
    getBySbd(sbd: number): Promise<any>;
    getReport(): Promise<import("../dtos/report.dto").ReportDto[]>;
    getTop10GroupA(): Promise<any>;
}
