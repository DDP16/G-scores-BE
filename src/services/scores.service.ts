import { ScoresRepository } from "../repositories/scores.repository";
import { NotFoundError } from "../utils/errors";

export class ScoresService {
  private repository = new ScoresRepository();

  async getAll(page = 1, limit = 20) {
    return this.repository.findAll(page, limit);
  }

  async getBySbd(sbd: number) {
    const { data } = await this.repository.findBySbd(sbd);

    if (!data) throw new NotFoundError({ message: `Score with the given SBD ${sbd} not found` });

    return data;
  }

  async getReport() {
    return this.repository.getReport();
  }

  async getTop10GroupA() {
    return this.repository.getTop10GroupA();
  }
}
