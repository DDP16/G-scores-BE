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

  async create(dto: any) {
    const { data } = await this.repository.create(dto);

    return data;
  }

  async update(sbd: number, dto: any) {
    const { data } = await this.repository.update(sbd, dto);

    return data;
  }

  async delete(sbd: number) {
    return this.repository.delete(sbd);
  }
}
