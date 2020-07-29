import { IDebtModel } from './debtInterface'
import { IUserModel } from './userInterface'

export interface IClientModel extends IUserModel {
  debts: IDebtModel[]
}
