import { Request, Response, NextFunction } from 'express'
import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'

// Dependency Injection
import { DebtService } from '@services/DebtService'
const { getDebtAsync, getDebtsAsync, createDebtAsync, updateDebtAsync, deleteDebtAsync } = new DebtService()

class DebtController {
  // @desc      Get debts
  // @route     GET /api/v1/debts/
  // @route     GET /api/v1/users/:userId/debts
  public getDebts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const debts = await getDebtsAsync(req.params.userId)

    if (!debts) {
      return next(new ErrorResponse('Debts not found', 404))
    }

    res.json({ sucess: true, count: debts?.length, debts })
  })

  // @desc      Get single debt
  // @route     GET /api/v1/debts/:debtId
  public getDebt = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const debt = await getDebtAsync(req.params.debtId)

    if (!debt) {
      return next(new ErrorResponse('Debt not found', 404))
    }

    res.json({ sucess: true, debt })
  })

  // @desc      Create debt
  // @route     POST /api/v1/debts/
  public craeteDebt = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const debt = await createDebtAsync(req.body)

    if (!debt) {
      return next(new ErrorResponse('Debts not created', 404))
    }

    res.json({ sucess: true, debt })
  })

  // @desc      Update debt
  // @route     PUT /api/v1/debts/:debtId
  public updateDebt = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const debt = await updateDebtAsync(req.params.debtId, req.body)

    if (!debt) {
      return next(new ErrorResponse('Debt not found', 404))
    }

    res.json({ sucess: true, debt })
  })

  // @desc      Delete debt
  // @route     DELETE /api/v1/debts/:debtId
  public deleteDebt = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const debt = await deleteDebtAsync(req.params.debtId)

    if (!debt) {
      return next(new ErrorResponse('Debt not found', 404))
    }

    res.json({ sucess: true, debt: {} })
  })
}

export { DebtController }
