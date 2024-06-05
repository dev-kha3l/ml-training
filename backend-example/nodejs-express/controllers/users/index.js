const prisma = require("../../utils/prisma");
const ApiResponse = require("../response/apiResponse");

class UsersController {
  static async getUsers(req, res) {
    try {
      const data = await prisma.user.findMany({ where: { deletedAt: null } });
      return res.json(ApiResponse("get users", data));
    } catch (error) {
      return res.json(ApiResponse("get users error", error.message, 500, true));
    }
  }

  static async getUser(req, res) {
    try {
      const { id } = req.params;
      const data = await prisma.user.findUnique({
        where: {
          id: +id,
          deletedAt: null,
        },
      });
      return res.json(ApiResponse("get user", data));
    } catch (error) {
      return res.json(ApiResponse("get user error", error.message, 500, true));
    }
  }

  static async create(req, res) {
    try {
      const { email, name, age } = req.body;
      const data = await prisma.user.create({
        data: {
          email,
          name,
          age,
        },
      });
      return res.json(ApiResponse("create user", data));
    } catch (error) {
      return res.json(
        ApiResponse("create user error", error.message, 500, true)
      );
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { email, name, age } = req.body;
      const data = await prisma.user.update({
        where: {
          id: +id,
          deletedAt: null,
        },
        data: {
          email,
          name,
          age,
        },
      });
      return res.json(ApiResponse("update user", data));
    } catch (error) {
      return res.json(
        ApiResponse("update user error", error.message, 500, true)
      );
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await prisma.user.update({
        where: {
          id: +id,
          deletedAt: null,
        },
        data: {
          deletedAt: new Date(),
        },
      });

      return res.json(ApiResponse("delete user", data));
    } catch (error) {
      return res.json(
        ApiResponse("create user error", error.message, 500, true)
      );
    }
  }
}

module.exports = UsersController;
