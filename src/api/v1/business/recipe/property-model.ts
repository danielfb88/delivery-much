import mongoose, { Document } from 'mongoose'
import { INewProperty } from './property-types'

export interface IPropertyDocument extends INewProperty, Document {}

const PropertySchema = new mongoose.Schema(
  {
    landlord_id: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
)

export default mongoose.model<IPropertyDocument>('properties', PropertySchema)
