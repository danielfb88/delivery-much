export interface INewProperty {
  address: string
  landlord_id: string
}

export interface IProperty extends INewProperty {
  id?: string
}
