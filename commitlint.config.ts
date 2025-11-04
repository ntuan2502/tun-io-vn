import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // cho phép các type hay dùng
    "type-enum": [
      2,
      "always",
      [
        "feat", // tính năng
        "fix", // sửa lỗi
        "docs", // tài liệu
        "style", // format, không đổi logic
        "refactor", // tái cấu trúc
        "perf", // tối ưu hiệu năng
        "test", // thêm/sửa test
        "build", // build system, deps
        "ci", // CI/CD
        "chore", // lặt vặt, không đổi src hoặc test
        "revert", // revert commit
      ],
    ],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "header-max-length": [2, "always", 100],
  },
};

export default config;
