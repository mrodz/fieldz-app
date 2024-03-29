/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  sub: string,
  type?: AccountType | null,
  bio?: string | null,
  owner?: string | null,
  userReservationId?: string | null,
};

export enum AccountType {
  GUEST = "GUEST",
  COACH = "COACH",
  ADMIN = "ADMIN",
}


export type ModelUserConditionInput = {
  sub?: ModelStringInput | null,
  type?: ModelAccountTypeInput | null,
  bio?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array<ModelUserConditionInput | null> | null,
  or?: Array<ModelUserConditionInput | null> | null,
  not?: ModelUserConditionInput | null,
  userReservationId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array<number | null> | null,
};

export type ModelAccountTypeInput = {
  eq?: AccountType | null,
  ne?: AccountType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  sub: string,
  type?: AccountType | null,
  Regions?: ModelRegionConnection | null,
  Reservation?: Reservation | null,
  bio?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  userReservationId?: string | null,
};

export type ModelRegionConnection = {
  __typename: "ModelRegionConnection",
  items: Array<Region | null>,
  nextToken?: string | null,
};

export type Region = {
  __typename: "Region",
  id: string,
  name: string,
  banner?: string | null,
  bio?: string | null,
  Fields?: ModelFieldConnection | null,
  user?: User | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  userRegionsId?: string | null,
};

export type ModelFieldConnection = {
  __typename: "ModelFieldConnection",
  items: Array<Field | null>,
  nextToken?: string | null,
};

export type Field = {
  __typename: "Field",
  id: string,
  name?: string | null,
  address?: string | null,
  regionID: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Reservation = {
  __typename: "Reservation",
  id: string,
  dateStart?: string | null,
  dateEnd?: string | null,
  Field?: Field | null,
  User?: User | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  reservationFieldId?: string | null,
  reservationUserId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  sub?: string | null,
  type?: AccountType | null,
  bio?: string | null,
  owner?: string | null,
  userReservationId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateReservationInput = {
  id?: string | null,
  dateStart?: string | null,
  dateEnd?: string | null,
  owner?: string | null,
  reservationFieldId?: string | null,
  reservationUserId?: string | null,
};

export type ModelReservationConditionInput = {
  dateStart?: ModelStringInput | null,
  dateEnd?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array<ModelReservationConditionInput | null> | null,
  or?: Array<ModelReservationConditionInput | null> | null,
  not?: ModelReservationConditionInput | null,
  reservationFieldId?: ModelIDInput | null,
  reservationUserId?: ModelIDInput | null,
};

export type UpdateReservationInput = {
  id: string,
  dateStart?: string | null,
  dateEnd?: string | null,
  owner?: string | null,
  reservationFieldId?: string | null,
  reservationUserId?: string | null,
};

export type DeleteReservationInput = {
  id: string,
};

export type CreateFieldInput = {
  id?: string | null,
  name?: string | null,
  address?: string | null,
  regionID: string,
  owner?: string | null,
};

export type ModelFieldConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  regionID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array<ModelFieldConditionInput | null> | null,
  or?: Array<ModelFieldConditionInput | null> | null,
  not?: ModelFieldConditionInput | null,
};

export type UpdateFieldInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  regionID?: string | null,
  owner?: string | null,
};

export type DeleteFieldInput = {
  id: string,
};

export type CreateRegionInput = {
  id?: string | null,
  name: string,
  banner?: string | null,
  bio?: string | null,
  owner?: string | null,
  userRegionsId?: string | null,
};

export type ModelRegionConditionInput = {
  name?: ModelStringInput | null,
  banner?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array<ModelRegionConditionInput | null> | null,
  or?: Array<ModelRegionConditionInput | null> | null,
  not?: ModelRegionConditionInput | null,
  userRegionsId?: ModelIDInput | null,
};

export type UpdateRegionInput = {
  id: string,
  name?: string | null,
  banner?: string | null,
  bio?: string | null,
  owner?: string | null,
  userRegionsId?: string | null,
};

export type DeleteRegionInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  sub?: ModelStringInput | null,
  type?: ModelAccountTypeInput | null,
  bio?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array<ModelUserFilterInput | null> | null,
  or?: Array<ModelUserFilterInput | null> | null,
  not?: ModelUserFilterInput | null,
  userReservationId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items: Array<User | null>,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelReservationFilterInput = {
  id?: ModelIDInput | null,
  dateStart?: ModelStringInput | null,
  dateEnd?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array<ModelReservationFilterInput | null> | null,
  or?: Array<ModelReservationFilterInput | null> | null,
  not?: ModelReservationFilterInput | null,
  reservationFieldId?: ModelIDInput | null,
  reservationUserId?: ModelIDInput | null,
};

export type ModelReservationConnection = {
  __typename: "ModelReservationConnection",
  items: Array<Reservation | null>,
  nextToken?: string | null,
};

export type ModelFieldFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  regionID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array<ModelFieldFilterInput | null> | null,
  or?: Array<ModelFieldFilterInput | null> | null,
  not?: ModelFieldFilterInput | null,
};

export type ModelRegionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  banner?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array<ModelRegionFilterInput | null> | null,
  or?: Array<ModelRegionFilterInput | null> | null,
  not?: ModelRegionFilterInput | null,
  userRegionsId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sub?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  and?: Array<ModelSubscriptionUserFilterInput | null> | null,
  or?: Array<ModelSubscriptionUserFilterInput | null> | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  in?: Array<string | null> | null,
  notIn?: Array<string | null> | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  in?: Array<string | null> | null,
  notIn?: Array<string | null> | null,
};

export type ModelSubscriptionReservationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dateStart?: ModelSubscriptionStringInput | null,
  dateEnd?: ModelSubscriptionStringInput | null,
  and?: Array<ModelSubscriptionReservationFilterInput | null> | null,
  or?: Array<ModelSubscriptionReservationFilterInput | null> | null,
};

export type ModelSubscriptionFieldFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  regionID?: ModelSubscriptionIDInput | null,
  and?: Array<ModelSubscriptionFieldFilterInput | null> | null,
  or?: Array<ModelSubscriptionFieldFilterInput | null> | null,
};

export type ModelSubscriptionRegionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  banner?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  and?: Array<ModelSubscriptionRegionFilterInput | null> | null,
  or?: Array<ModelSubscriptionRegionFilterInput | null> | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User",
    id: string,
    sub: string,
    type?: AccountType | null,
    Regions?: {
      __typename: "ModelRegionConnection",
      items: Array<{
        __typename: "Region",
        id: string,
        name: string,
        banner?: string | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userRegionsId?: string | null,
      } | null>,
      nextToken?: string | null,
    } | null,
    Reservation?: {
      __typename: "Reservation",
      id: string,
      dateStart?: string | null,
      dateEnd?: string | null,
      Field?: {
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      User?: {
        __typename: "User",
        id: string,
        sub: string,
        type?: AccountType | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userReservationId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      reservationFieldId?: string | null,
      reservationUserId?: string | null,
    } | null,
    bio?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userReservationId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User",
    id: string,
    sub: string,
    type?: AccountType | null,
    Regions?: {
      __typename: "ModelRegionConnection",
      items: Array<{
        __typename: "Region",
        id: string,
        name: string,
        banner?: string | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userRegionsId?: string | null,
      } | null>,
      nextToken?: string | null,
    } | null,
    Reservation?: {
      __typename: "Reservation",
      id: string,
      dateStart?: string | null,
      dateEnd?: string | null,
      Field?: {
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      User?: {
        __typename: "User",
        id: string,
        sub: string,
        type?: AccountType | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userReservationId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      reservationFieldId?: string | null,
      reservationUserId?: string | null,
    } | null,
    bio?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userReservationId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User",
    id: string,
    sub: string,
    type?: AccountType | null,
    Regions?: {
      __typename: "ModelRegionConnection",
      items: Array<{
        __typename: "Region",
        id: string,
        name: string,
        banner?: string | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userRegionsId?: string | null,
      } | null>,
      nextToken?: string | null,
    } | null,
    Reservation?: {
      __typename: "Reservation",
      id: string,
      dateStart?: string | null,
      dateEnd?: string | null,
      Field?: {
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      User?: {
        __typename: "User",
        id: string,
        sub: string,
        type?: AccountType | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userReservationId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      reservationFieldId?: string | null,
      reservationUserId?: string | null,
    } | null,
    bio?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userReservationId?: string | null,
  } | null,
};

export type CreateReservationMutationVariables = {
  input: CreateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type CreateReservationMutation = {
  createReservation?: {
    __typename: "Reservation",
    id: string,
    dateStart?: string | null,
    dateEnd?: string | null,
    Field?: {
      __typename: "Field",
      id: string,
      name?: string | null,
      address?: string | null,
      regionID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    User?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    reservationFieldId?: string | null,
    reservationUserId?: string | null,
  } | null,
};

export type UpdateReservationMutationVariables = {
  input: UpdateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type UpdateReservationMutation = {
  updateReservation?: {
    __typename: "Reservation",
    id: string,
    dateStart?: string | null,
    dateEnd?: string | null,
    Field?: {
      __typename: "Field",
      id: string,
      name?: string | null,
      address?: string | null,
      regionID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    User?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    reservationFieldId?: string | null,
    reservationUserId?: string | null,
  } | null,
};

export type DeleteReservationMutationVariables = {
  input: DeleteReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type DeleteReservationMutation = {
  deleteReservation?: {
    __typename: "Reservation",
    id: string,
    dateStart?: string | null,
    dateEnd?: string | null,
    Field?: {
      __typename: "Field",
      id: string,
      name?: string | null,
      address?: string | null,
      regionID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    User?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    reservationFieldId?: string | null,
    reservationUserId?: string | null,
  } | null,
};

export type CreateFieldMutationVariables = {
  input: CreateFieldInput,
  condition?: ModelFieldConditionInput | null,
};

export type CreateFieldMutation = {
  createField?: {
    __typename: "Field",
    id: string,
    name?: string | null,
    address?: string | null,
    regionID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFieldMutationVariables = {
  input: UpdateFieldInput,
  condition?: ModelFieldConditionInput | null,
};

export type UpdateFieldMutation = {
  updateField?: {
    __typename: "Field",
    id: string,
    name?: string | null,
    address?: string | null,
    regionID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFieldMutationVariables = {
  input: DeleteFieldInput,
  condition?: ModelFieldConditionInput | null,
};

export type DeleteFieldMutation = {
  deleteField?: {
    __typename: "Field",
    id: string,
    name?: string | null,
    address?: string | null,
    regionID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRegionMutationVariables = {
  input: CreateRegionInput,
  condition?: ModelRegionConditionInput | null,
};

export type CreateRegionMutation = {
  createRegion?: {
    __typename: "Region",
    id: string,
    name: string,
    banner?: string | null,
    bio?: string | null,
    Fields?: {
      __typename: "ModelFieldConnection",
      items: Array<{
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null>,
      nextToken?: string | null,
    } | null,
    user?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userRegionsId?: string | null,
  } | null,
};

export type UpdateRegionMutationVariables = {
  input: UpdateRegionInput,
  condition?: ModelRegionConditionInput | null,
};

export type UpdateRegionMutation = {
  updateRegion?: {
    __typename: "Region",
    id: string,
    name: string,
    banner?: string | null,
    bio?: string | null,
    Fields?: {
      __typename: "ModelFieldConnection",
      items: Array<{
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null>,
      nextToken?: string | null,
    } | null,
    user?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userRegionsId?: string | null,
  } | null,
};

export type DeleteRegionMutationVariables = {
  input: DeleteRegionInput,
  condition?: ModelRegionConditionInput | null,
};

export type DeleteRegionMutation = {
  deleteRegion?: {
    __typename: "Region",
    id: string,
    name: string,
    banner?: string | null,
    bio?: string | null,
    Fields?: {
      __typename: "ModelFieldConnection",
      items: Array<{
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null>,
      nextToken?: string | null,
    } | null,
    user?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userRegionsId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User",
    id: string,
    sub: string,
    type?: AccountType | null,
    Regions?: {
      __typename: "ModelRegionConnection",
      items: Array<{
        __typename: "Region",
        id: string,
        name: string,
        banner?: string | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userRegionsId?: string | null,
      } | null>,
      nextToken?: string | null,
    } | null,
    Reservation?: {
      __typename: "Reservation",
      id: string,
      dateStart?: string | null,
      dateEnd?: string | null,
      Field?: {
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      User?: {
        __typename: "User",
        id: string,
        sub: string,
        type?: AccountType | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userReservationId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      reservationFieldId?: string | null,
      reservationUserId?: string | null,
    } | null,
    bio?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userReservationId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection",
    items: Array<{
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type UserBySubQueryVariables = {
  sub: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserBySubQuery = {
  userBySub?: {
    __typename: "ModelUserConnection",
    items: Array<{
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetReservationQueryVariables = {
  id: string,
};

export type GetReservationQuery = {
  getReservation?: {
    __typename: "Reservation",
    id: string,
    dateStart?: string | null,
    dateEnd?: string | null,
    Field?: {
      __typename: "Field",
      id: string,
      name?: string | null,
      address?: string | null,
      regionID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    User?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    reservationFieldId?: string | null,
    reservationUserId?: string | null,
  } | null,
};

export type ListReservationsQueryVariables = {
  filter?: ModelReservationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReservationsQuery = {
  listReservations?: {
    __typename: "ModelReservationConnection",
    items: Array<{
      __typename: "Reservation",
      id: string,
      dateStart?: string | null,
      dateEnd?: string | null,
      Field?: {
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      User?: {
        __typename: "User",
        id: string,
        sub: string,
        type?: AccountType | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userReservationId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      reservationFieldId?: string | null,
      reservationUserId?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetFieldQueryVariables = {
  id: string,
};

export type GetFieldQuery = {
  getField?: {
    __typename: "Field",
    id: string,
    name?: string | null,
    address?: string | null,
    regionID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFieldsQueryVariables = {
  filter?: ModelFieldFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFieldsQuery = {
  listFields?: {
    __typename: "ModelFieldConnection",
    items: Array<{
      __typename: "Field",
      id: string,
      name?: string | null,
      address?: string | null,
      regionID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type FieldsByRegionIDQueryVariables = {
  regionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFieldFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FieldsByRegionIDQuery = {
  fieldsByRegionID?: {
    __typename: "ModelFieldConnection",
    items: Array<{
      __typename: "Field",
      id: string,
      name?: string | null,
      address?: string | null,
      regionID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetRegionQueryVariables = {
  id: string,
};

export type GetRegionQuery = {
  getRegion?: {
    __typename: "Region",
    id: string,
    name: string,
    banner?: string | null,
    bio?: string | null,
    Fields?: {
      __typename: "ModelFieldConnection",
      items: Array<{
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null>,
      nextToken?: string | null,
    } | null,
    user?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userRegionsId?: string | null,
  } | null,
};

export type ListRegionsQueryVariables = {
  filter?: ModelRegionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRegionsQuery = {
  listRegions?: {
    __typename: "ModelRegionConnection",
    items: Array<{
      __typename: "Region",
      id: string,
      name: string,
      banner?: string | null,
      bio?: string | null,
      Fields?: {
        __typename: "ModelFieldConnection",
        nextToken?: string | null,
      } | null,
      user?: {
        __typename: "User",
        id: string,
        sub: string,
        type?: AccountType | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userReservationId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userRegionsId?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User",
    id: string,
    sub: string,
    type?: AccountType | null,
    Regions?: {
      __typename: "ModelRegionConnection",
      items: Array<{
        __typename: "Region",
        id: string,
        name: string,
        banner?: string | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userRegionsId?: string | null,
      } | null>,
      nextToken?: string | null,
    } | null,
    Reservation?: {
      __typename: "Reservation",
      id: string,
      dateStart?: string | null,
      dateEnd?: string | null,
      Field?: {
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      User?: {
        __typename: "User",
        id: string,
        sub: string,
        type?: AccountType | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userReservationId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      reservationFieldId?: string | null,
      reservationUserId?: string | null,
    } | null,
    bio?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userReservationId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User",
    id: string,
    sub: string,
    type?: AccountType | null,
    Regions?: {
      __typename: "ModelRegionConnection",
      items: Array<{
        __typename: "Region",
        id: string,
        name: string,
        banner?: string | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userRegionsId?: string | null,
      } | null>,
      nextToken?: string | null,
    } | null,
    Reservation?: {
      __typename: "Reservation",
      id: string,
      dateStart?: string | null,
      dateEnd?: string | null,
      Field?: {
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      User?: {
        __typename: "User",
        id: string,
        sub: string,
        type?: AccountType | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userReservationId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      reservationFieldId?: string | null,
      reservationUserId?: string | null,
    } | null,
    bio?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userReservationId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User",
    id: string,
    sub: string,
    type?: AccountType | null,
    Regions?: {
      __typename: "ModelRegionConnection",
      items: Array<{
        __typename: "Region",
        id: string,
        name: string,
        banner?: string | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userRegionsId?: string | null,
      } | null>,
      nextToken?: string | null,
    } | null,
    Reservation?: {
      __typename: "Reservation",
      id: string,
      dateStart?: string | null,
      dateEnd?: string | null,
      Field?: {
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      User?: {
        __typename: "User",
        id: string,
        sub: string,
        type?: AccountType | null,
        bio?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userReservationId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      reservationFieldId?: string | null,
      reservationUserId?: string | null,
    } | null,
    bio?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userReservationId?: string | null,
  } | null,
};

export type OnCreateReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
  owner?: string | null,
};

export type OnCreateReservationSubscription = {
  onCreateReservation?: {
    __typename: "Reservation",
    id: string,
    dateStart?: string | null,
    dateEnd?: string | null,
    Field?: {
      __typename: "Field",
      id: string,
      name?: string | null,
      address?: string | null,
      regionID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    User?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    reservationFieldId?: string | null,
    reservationUserId?: string | null,
  } | null,
};

export type OnUpdateReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateReservationSubscription = {
  onUpdateReservation?: {
    __typename: "Reservation",
    id: string,
    dateStart?: string | null,
    dateEnd?: string | null,
    Field?: {
      __typename: "Field",
      id: string,
      name?: string | null,
      address?: string | null,
      regionID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    User?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    reservationFieldId?: string | null,
    reservationUserId?: string | null,
  } | null,
};

export type OnDeleteReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteReservationSubscription = {
  onDeleteReservation?: {
    __typename: "Reservation",
    id: string,
    dateStart?: string | null,
    dateEnd?: string | null,
    Field?: {
      __typename: "Field",
      id: string,
      name?: string | null,
      address?: string | null,
      regionID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    User?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    reservationFieldId?: string | null,
    reservationUserId?: string | null,
  } | null,
};

export type OnCreateFieldSubscriptionVariables = {
  filter?: ModelSubscriptionFieldFilterInput | null,
  owner?: string | null,
};

export type OnCreateFieldSubscription = {
  onCreateField?: {
    __typename: "Field",
    id: string,
    name?: string | null,
    address?: string | null,
    regionID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFieldSubscriptionVariables = {
  filter?: ModelSubscriptionFieldFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFieldSubscription = {
  onUpdateField?: {
    __typename: "Field",
    id: string,
    name?: string | null,
    address?: string | null,
    regionID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFieldSubscriptionVariables = {
  filter?: ModelSubscriptionFieldFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFieldSubscription = {
  onDeleteField?: {
    __typename: "Field",
    id: string,
    name?: string | null,
    address?: string | null,
    regionID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRegionSubscriptionVariables = {
  filter?: ModelSubscriptionRegionFilterInput | null,
  owner?: string | null,
};

export type OnCreateRegionSubscription = {
  onCreateRegion?: {
    __typename: "Region",
    id: string,
    name: string,
    banner?: string | null,
    bio?: string | null,
    Fields?: {
      __typename: "ModelFieldConnection",
      items: Array<{
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null>,
      nextToken?: string | null,
    } | null,
    user?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userRegionsId?: string | null,
  } | null,
};

export type OnUpdateRegionSubscriptionVariables = {
  filter?: ModelSubscriptionRegionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRegionSubscription = {
  onUpdateRegion?: {
    __typename: "Region",
    id: string,
    name: string,
    banner?: string | null,
    bio?: string | null,
    Fields?: {
      __typename: "ModelFieldConnection",
      items: Array<{
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null>,
      nextToken?: string | null,
    } | null,
    user?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userRegionsId?: string | null,
  } | null,
};

export type OnDeleteRegionSubscriptionVariables = {
  filter?: ModelSubscriptionRegionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRegionSubscription = {
  onDeleteRegion?: {
    __typename: "Region",
    id: string,
    name: string,
    banner?: string | null,
    bio?: string | null,
    Fields?: {
      __typename: "ModelFieldConnection",
      items: Array<{
        __typename: "Field",
        id: string,
        name?: string | null,
        address?: string | null,
        regionID: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null>,
      nextToken?: string | null,
    } | null,
    user?: {
      __typename: "User",
      id: string,
      sub: string,
      type?: AccountType | null,
      Regions?: {
        __typename: "ModelRegionConnection",
        nextToken?: string | null,
      } | null,
      Reservation?: {
        __typename: "Reservation",
        id: string,
        dateStart?: string | null,
        dateEnd?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        reservationFieldId?: string | null,
        reservationUserId?: string | null,
      } | null,
      bio?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userReservationId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userRegionsId?: string | null,
  } | null,
};
