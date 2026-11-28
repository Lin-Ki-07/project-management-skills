# 项目管理 Skills

一组用中文协作的软件产品与项目工作流 Skills。每个 Skill 聚焦一个可重复的任务，让你在新项目中少解释流程，也让需求、设计和开发之间的交接更清楚。

目前有七个可用 Skill：**从产品想法到 PRD**、**开源方案调研与选型**、**开发路线图与版本计划**、**UI 原型与组件交接**、**已有项目体检**、**小步开发与验收**、**测试与版本收尾**。后续会根据实际项目经验逐步补充其他环节。

## 现有 Skills

| Skill | 适用场景 | 产出 |
| --- | --- | --- |
| [从产品想法到 PRD](product-discovery-to-prd/SKILL.md) | 有一个软件产品想法，或已有讨论记录，需要澄清需求与首版范围 | 经讨论和修订、可交给设计与研发继续评估的 PRD |
| [开源方案调研与选型](open-source-solution-research/SKILL.md) | 需要为已明确的能力寻找开源参考或评估引入方案 | 有来源的候选比较、复用边界、改造成本与风险 |
| [开发路线图与版本计划](development-roadmap/SKILL.md) | 已有明确目标，需要安排开发阶段、维护版本进度或调整计划 | 阶段、编号小目标、验收结果、当前状态与交接摘要 |
| [UI 原型与组件交接](ui-prototype-to-components/SKILL.md) | 已明确界面目标，需要先评审原型再逐项实现前端 | 可查看的原型、页面状态说明、组件清单与实现顺序 |
| [已有项目体检](existing-project-review/SKILL.md) | 接手已有项目，需要核对核心流程并排查影响继续开发的问题 | 有证据、按优先级排列的修复清单 |
| [小步开发与验收](incremental-development/SKILL.md) | 已选定一个功能或修复小目标，需要实施并核对实际结果 | 范围清楚的改动、diff、验证记录与交接摘要 |
| [测试与版本收尾](release-readiness/SKILL.md) | 阶段或版本准备收尾，需要核对回归与发布材料 | 验收结论、已知限制、版本记录与 Release 草稿 |

PRD Skill 适用于 App、网站和软件工具。它会根据你提供的信息逐轮提问，或直接从已有材料起草；写 PRD 前会让你选择在对话中查看，还是保存为项目文件夹中的 Markdown 文件。它不会代替技术选型、界面设计或开发排期。

路线图 Skill 可接收已确认的 PRD，也可直接检查现有项目后整理版本计划。它按实际验证更新完成状态，不把计划当作实现证据；分支、提交和发布仍由项目作者决定。

从 PRD 进入版本规划时，先交接已确认的首版范围、验收要点、约束与未决问题，再使用路线图 Skill 拆分阶段。各 Skill 可以独立使用，不要求每个项目先写完整 PRD。

开源调研 Skill 可在需求明确后、技术方案确定前使用，也可在开发中遇到新问题时单独使用。它提供带来源的比较与建议，不会自行下载或集成候选项目。

## 界面设计与实现约定

避免不必要的辅助标签与说明，让布局本身发挥解释作用。功能不必都跟随一段解释；优先通过清晰的分组、按钮名称、图标和交互状态帮助用户理解。对错误、风险、不可逆操作和必要的无障碍信息，仍应提供明确文字。

UI Skill 先展示和修订原型，再按职责拆分组件与状态，供前端逐项实现；可使用用户指定的设计工具或模型，不要求每次局部调整都制作完整高保真图。

## 快速开始

将要使用的 Skill 文件夹复制到你所用工具的 Skills 目录。以 Codex 为例，把 `product-discovery-to-prd` 整个文件夹放到个人 Skills 目录：

```text
~/.codex/skills/product-discovery-to-prd/
└── SKILL.md
```

重新打开会话后，可以这样开始：

```text
使用 $product-discovery-to-prd 帮我梳理一个 Android App 想法，先逐轮讨论需求。
```

如果已有访谈记录或需求笔记，也可以直接提供材料：

```text
使用 $product-discovery-to-prd，根据这些笔记整理 PRD，并标出尚未确认的问题。
```

## 从想法到版本收尾

这些 Skill 按任务选用，无需每次从头走完。新项目可从需求发现开始；已有代码但尚不清楚先修什么时，从项目体检进入，目标明确时可直接做路线图或当前开发小步。只需修一个界面问题时，也可从 UI 或开发环节进入。

| 当前问题 | 使用的 Skill | 交给下一环节的内容 |
| --- | --- | --- |
| 还不清楚为谁解决什么问题 | `product-discovery-to-prd` | 已确认的目标、首版范围、验收要点和未决问题 |
| 需要比较开源参考或依赖 | `open-source-solution-research` | 有来源的候选比较、复用边界、成本与风险 |
| 需要安排阶段、版本和当前一步 | `development-roadmap` | 编号小目标、状态、依赖与验收结果 |
| 界面方向尚未确定 | `ui-prototype-to-components` | 经评审的原型、关键状态和组件清单 |
| 接手已有项目，尚不清楚先修什么 | `existing-project-review` | 已证实问题、待验证风险和小步修复顺序 |
| 当前小目标准备改代码 | `incremental-development` | 改动 diff、实际验证结果与剩余限制 |
| 阶段或版本准备结束 | `release-readiness` | 回归结论、版本说明、Release 草稿与下阶段交接 |

先让用户确认会影响方向的决定，再进入下一环节。计划、原型和代码完成各是不同状态；只有对应验收通过，才记录为已完成。具体规则以各 Skill 的 `SKILL.md` 为准。本仓库不包含具体项目的 PRD、商业计划或用户资料。

## 仓库组织

每个 Skill 独立放在一个同名文件夹中。以后增加新的工作流时，会在上方的清单中列出；不同 Skill 可以独立安装和使用。

阶段结束或需要跨会话、跨 AI 接续时，可将 [交接模板](templates/HANDOFF.md) 复制到具体项目并填写。交接文档记录当前状态与下一步；接手者仍需核对仓库和实际运行结果。

调整提示词或 Skill 时，可参考 [轻量评测方法](evaluation/README.md) 和 [案例记录模板](evaluation/CASE.md)，用真实任务比较改动前后的结果。评测方法目前是文档，尚未封装为独立 Skill。

“小步开发与验收”已附带可复制的 [工作日志模板](incremental-development/assets/WORKLOG.md) 和 [修复案例](incremental-development/references/fix-example.md)。模板用于实际项目记录，案例展示问题、修改 diff 与验收之间的对应关系；案例为虚构示意，未作为真实应用执行验证。安装时复制整个 `incremental-development` 文件夹，以保留这些配套资源；已有项目日志时沿用现有格式。

“开发路线图与版本计划”附带 [路线图模板](development-roadmap/assets/ROADMAP.md) 和 [需求变更案例](development-roadmap/references/change-example.md)，用于安排小目标、保留步骤替代去向，并以证据入口衔接工作日志。案例是虚构试填，不是实际开发结果。安装时复制整个 `development-roadmap` 文件夹以保留配套资源。

“从产品想法到 PRD”附带 [PRD 模板](product-discovery-to-prd/assets/PRD.md) 和 [需求收敛案例](product-discovery-to-prd/references/discovery-example.md)，展示从场景澄清、首版取舍到确认与路线图交接的过程。案例对话及确认均为虚构示意。安装时复制整个 `product-discovery-to-prd` 文件夹以保留配套资源。

“已有项目体检”附带 [体检记录模板](existing-project-review/assets/REVIEW.md) 和 [体检报告案例](existing-project-review/references/review-example.md)，用于区分已证实问题、待验证风险和可选优化，并整理最小修复与验收交接。案例为虚构试填。安装时复制整个 `existing-project-review` 文件夹以保留配套资源。

“测试与版本收尾”附带 [验收与收尾模板](release-readiness/assets/ACCEPTANCE.md) 和 [版本收尾案例](release-readiness/references/closeout-example.md)，用于核对版本证据、记录阻碍与限制，并准备 Release 草稿。案例为虚构试填。安装时复制整个 `release-readiness` 文件夹以保留配套资源。

## 许可证

本仓库采用 [MIT License](LICENSE)，允许使用、修改和再分发（包括商业用途），但须保留原版权声明和许可证文本。
