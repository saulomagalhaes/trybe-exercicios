interface IPlantsRepository {
  getPlants(): Promise<IPlant[]>;
  getPlantById(id: string): Promise<IPlant | null>;
  removePlantById(id: string): Promise<IPlant | null>;
  getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]>;
  editPlant(id: string, plant: IPlant): Promise<IPlant | null>;
  savePlant(plant: IPlant): Promise<IPlant | null>;

}