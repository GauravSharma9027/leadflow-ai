/**
 * ------------------------------------------------------------------
 * File: asyncHandler.js
 * Location: src/middleware/asyncHandler.js
 *
 * Purpose:
 * Wrap async controllers and automatically forward errors
 * to Express Error Middleware.
 *
 * Why?
 * Prevents repetitive try...catch blocks in every controller.
 *
 * Example:
 *
 * const getUsers = asyncHandler(async (req, res) => {
 *      const users = await User.find();
 *
 *      return new ApiResponse(
 *          200,
 *          users,
 *          "Users fetched successfully"
 *      ).send(res);
 * });
 *
 * ------------------------------------------------------------------
 */

const asyncHandler = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

export default asyncHandler;