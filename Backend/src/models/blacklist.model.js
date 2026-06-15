const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is require for Black listing"],
    },
  },
  {
    timestamps: true,
  },
);

const tokenBlackListModel = mongoose.model(
  "blacklistTokens",
  blacklistTokenSchema,
);

module.exports = tokenBlackListModel;
