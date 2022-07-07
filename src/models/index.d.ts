import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserData {
  readonly id: string;
  readonly APIKey?: string | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserData, UserDataMetaData>);
  static copyOf(source: UserData, mutator: (draft: MutableModel<UserData, UserDataMetaData>) => MutableModel<UserData, UserDataMetaData> | void): UserData;
}