import { Model } from 'mongoose'
import PropertyModel, { IPropertyDocument } from './property-model'
import { INewProperty } from './property-types'

export default class PropertyService {
  readonly model: Model<IPropertyDocument>

  constructor() {
    this.model = PropertyModel
  }

  async create(newProperty: INewProperty): Promise<IPropertyDocument> {
    const property = await this.model.create(newProperty)

    return property
  }

  async delete(id: string): Promise<void> {
    await this.model.deleteOne({
      _id: id,
    })
  }

  async deleteAll(): Promise<void> {
    await this.model.deleteMany({})
  }

  async findAll(landLordId: string): Promise<IPropertyDocument[]> {
    const listProperty = await this.model.find({
      landlord_id: landLordId,
    })

    return listProperty
  }

  async findById(propertyId: string): Promise<IPropertyDocument | null> {
    const property = await this.model.findById(propertyId)

    return property
  }

  async findOne(criteria: object): Promise<IPropertyDocument | null> {
    const property = await this.model.findOne(criteria)

    return property
  }
}
